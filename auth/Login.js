import React, { useEffect, useState } from "react"
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import './login.css'


const Login = (props) => {
    const formData = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const[localData, setLocalData] = useState({})
    // const[isLoggedIn, setIsLoggedIn] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData2 = {
            username: username,
            password: password
        }
        let data = localStorage.getItem("formData")





        let data2 = JSON.parse(data)
        console.log("data2", data2)
        // setIsLoggedIn(true)
        // console.log("isloggedIn", isLoggedIn)

        if (data2.username === username && data2.password === password) {
            window.swal("Login Successful")
            sessionStorage.setItem("isLoggedIn", true)
            sessionStorage.setItem("userDetails", JSON.stringify(data2))
            navigate('/auth/dashboard')


        } else {
            window.swal("Invalid email or password")
        }
        console.log("formdata2", formData2)
    }


    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }
    return (
        <div class="login">
            <div class="form-container">
                <div class="image-holder">
                    <img src="" alt=""></img>
                </div>

                <form onSubmit={handleSubmit}>
                    <h2 class="text-center"><strong>Login</strong> an account.</h2>

                    <div class="form-group">
                        <input class="form-control" type="text" name="username" placeholder="Enter name" value={username} onChange={handleChange} />
                    </div>

                    <div class="form-group">
                        <input class="form-control" type="password" name="password" placeholder="Enter Password" value={password} onChange={handleChange} />
                    </div>

            

                    <div class="form-group">
                        <button class="btn btn-primary btn-block" type="submit" >Sign In</button>
                    </div>

                    <a href="#/auth/register" class="already">You don't have an account? Register here.</a>
                </form>
            </div>
        </div>
    )
}
export default Login