import React from 'react'
import { useRef, useState } from 'react';
import loginService from '../services/login'
import registerService from '../services/register'



const LoginForm = ({ username, setUsername, password, setPassword, setUser }) => {



    const [loginState, setLoginState] = useState(true)
    const [newUserName, setNewUserName] = useState('')
    const [newName, setNewName] = useState('')
    const [newUserpassword, setNewpassword] = useState('')
    const [newProfession, setnewProfession] = useState('')
    const [newEmail, setEmail] = useState('')


    const onRegister = () => {
        setLoginState(false)
    }

    const onLogin = () => {
        setLoginState(true)
    }

    const handleLogin = async (event) => {
        event.preventDefault()

        try {

            const user = await loginService
                .login({ username, password })
            setUser(user)
            setUsername('')
            setPassword('')
            console.log(user.username, 'logged in!')

        }
        catch {
            console.log('Wrong Credentials')
        }
    }

    const handleRegister = async (event) => {
        event.preventDefault()

        const newUserBody = {
            exams: [],
            username: newUserName,
            name: newName,
            password: newUserpassword,
            profession: newProfession,
            email: newEmail
        }
        const demo = {
            exams: [],
            username: "Beck",
            name: "Beck P",
            password: "Beck",
            profession: "Professor",
            email: "beck123@gmail.com"
        }
        try {
            const newRegisteredUser = await registerService
                .register(newUserBody)
            setNewUserName('')
            setNewName('')
            setPassword('')
            setEmail('')
            setnewProfession('')
        }
        catch {
            console.log('unable to register')
        }

    }

    const SignInform = () => {
        return (
            <form id="login" className="input-group" onSubmit={handleLogin}>
                <input type="text" value={username} className="input-field" placeholder="User ID" required onChange={({ target }) => setUsername(target.value)} />
                <input type="password" value={password} className="input-field" placeholder="Password" required onChange={({ target }) => setPassword(target.value)} />
                <input type="checkbox" className="checkbox" /><span>Remember me</span>
                <button type="submit" className="submit-btn">Login</button>
            </form>
        )
    }
    const SignUpForm = () => {
        return (
            <form id="register" className="input-group" onSubmit={handleRegister}>
                <input type="email" className="input-field" placeholder="Email ID" required onChange={({ target }) => setEmail(target.value)} />
                <input type="text" className="input-field" placeholder="User Name" required onChange={({ target }) => setNewUserName(target.value)} />
                <input type="text" className="input-field" placeholder="Full Name" required onChange={({ target }) => setNewName(target.value)} />
                <input type="text" className="input-field" placeholder="Profession" required onChange={({ target }) => setnewProfession(target.value)} />
                <input type="password" className="input-field" placeholder="Password" required onChange={({ target }) => setNewpassword(target.value)} />
                <input type="checkbox" className="checkbox" /><span>Remember me</span>
                <button type="submit" className="submit-btn">Register</button>
            </form>
        )
    }

    return (
        <div className="hero">
            <div className="form-box">
                <div className="button-box">
                    <div id="btn" style={{ left: loginState ? '0px' : '110px' }}></div>
                    <button type="button" className="toggle-btn" onClick={onLogin}>Log In</button>
                    <button type="button" className="toggle-btn" onClick={onRegister}>Register</button>
                </div>
                {loginState && SignInform()}
                {!loginState && SignUpForm()}
            </div>
        </div>

    )

}

export default LoginForm