import React, {useState } from "react";
import {useNavigate} from 'react-router-dom'
import './register.css'


const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[phone, setPhone] = useState('')
    const[userData, setUserData] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username : username,
            email:email,
            phone:phone,
            password:password
            
        }
        let userData = formData
        localStorage.setItem("formData",JSON.stringify(userData))
        console.log("data1",formData)
        navigate('/auth/login')

        
    }

    // useEffect(()=>{
    //     localStorage.setItem("username",JSON.stringify(username))
    // },[username])


    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }else if(e.target.name === 'phone'){
            setPhone(e.target.value)
        }
    }

    return (
    <div class="register">
	<div class="form-container">
		<div class="image-holder"></div>

		<form onSubmit={handleSubmit}>
			<h2 class="text-center"><strong>Create</strong> an account.</h2>

			<div class="form-group">
				<input class="form-control" type="text" name="username" placeholder="Enter name" value={username} onChange={handleChange}/>
			</div>
			
			<div class="form-group">
				<input class="form-control" type="email" name="email" placeholder="Enter email" value={email} onChange={handleChange}/>
			</div>

            <div class="form-group">
				<input class="form-control" type="text" name="phone" placeholder="Enter phone number" value={phone} onChange={handleChange}/>
			</div>
			
			<div class="form-group">
				<input class="form-control" type="password" name="password" placeholder="Enter Password" value={password} onChange={handleChange}/>
			</div>

			<div class="form-group">
				<button class="btn btn-primary btn-block" type="submit" >Sign Up</button>
			</div>

			<a href="#/auth/login" class="already">You already have an account? Login here.</a>
		</form>
	</div>
</div>
    )
}
export default Register