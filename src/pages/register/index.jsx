import { useState } from "react"
import styles from "./index.module.css"
export const RegisterPage = () => {
    const [error, setError] = useState()
    const postData = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(async response => {
            const data = await response.json()
            if(data.errors){
                return setError(data.errors)
            }
            window.location.href = '/login'
        })
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const data = {
        name: name,
        mail: email,
        password: password
    }
    return (
        <main className={styles.registerContaner}>
            <form className={styles.registerForm} onSubmit={e => {postData(e)}}>
                <h1>Registrate!</h1>
                <div className={styles.inputContainer}>
                    <p className={styles.parrafo}>Nombre</p>
                    <input type="text" placeholder="John Doe" className={styles.registerInput} onChange={e => setName(e.target.value)}/>
                </div>
                <div className={styles.inputContainer}>
                    <p className={styles.parrafo}>Email</p>
                    <input type="email" placeholder="JohnDoe@gmail.com" className={styles.registerInput} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className={styles.inputContainer}>
                    <p className={styles.parrafo}>Contraseña</p>
                    <input type="text" placeholder="********" className={styles.registerInput} onChange={e => setPassword(e.target.value)}/>
                </div>
                {
                    error && error.map(item => {
                        return <p key={item.msg} className={styles.error}>{item.msg}</p>
                    })
                }
                <input type="submit" value={"Registrarse"} className={styles.registerButton} />
                <a className={styles.link} href="/login">Inicia Sesión</a>
            </form>
        </main>
    )
}