import { useState } from "react"
import styles from "./index.module.css"
export const LoginPage = () => {
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const loginUser = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(async response => {
            const data = await response.json()
            if(!data.token) {
                setIsError(true)
                return setErrorMessage(data.error)
            }
            localStorage.setItem('token', data.token)
            window.location.href = '/'
        }) }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = {
        mail: email,
        password: password
    }
    return (
        <main className={styles.registerContaner}>
            <form className={styles.registerForm} onSubmit={e => {loginUser(e)}}>
                <h1>Inicia Sesión!</h1>
                <div className={styles.inputContainer}>
                    <p className={styles.parrafo}>Email</p>
                    <input type="email" placeholder="JohnDoe@gmail.com" className={styles.registerInput} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className={styles.inputContainer}>
                    <p className={styles.parrafo}>Contraseña</p>
                    <input type="text" placeholder="********" className={styles.registerInput} onChange={e => setPassword(e.target.value)}/>
                </div>
                {
                    isError &&  <p className={styles.error}>{errorMessage}</p>
                }
                <input type="submit" value={"Ingresar"} className={styles.registerButton} />
                <a className={styles.link} href="/register">Registrarse</a>
            </form>
        </main>
    )
}