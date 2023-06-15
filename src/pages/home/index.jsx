import { useEffect, useState } from "react"
import styles from './index.module.css'
import { FaPause, FaPlay } from "react-icons/fa";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export const HomePage = () => {
    const [cancionesData, setCancionesData] = useState([])
    const [playTrack, setPlayTrack] = useState('')

    if(!localStorage.getItem('token')){
        return window.location.href = '/login'
    }
    const getMusic = async () => {
        await fetch('http://localhost:8000/music', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
        }).then(async response => {
            const data = await response.json()
            setCancionesData(data.canciones)
        })
    }

    useEffect(() => {
        getMusic()
    }, [])

    console.log(cancionesData)


    return (
        <main className={styles.mainContainer}>
            <div className={styles.tracksContainer}>
            {
                cancionesData.map(item => {
                    return (
                        <div className={styles.track} key={item._id} onClick={() => setPlayTrack(item.file)}>
                            <div className={styles.row}>
                                <img className={styles.image} src={item.image} alt={item.name} />
                                <div className={styles.column}>
                                    <h3>{item.name}</h3>
                                    <p>{item.author}</p>
                                </div>
                            </div>
                            {
                                (playTrack === item.file) ? <FaPause /> : <FaPlay className={styles.play} />
                            }

                        </div>
                    )
                })
            }
            </div>
            <AudioPlayer
                autoPlay
                src={playTrack}
                onPlay={e => console.log("onPlay")}
            />
        </main>
    )
}
