import React from 'react'
import { Link } from 'react-router-dom'
import './appbar.css'

const AppBar = () => {

    return (
        <div className='app1' >
            <div className='header'>
                <div className='homepage-appbar'>
                    <h1>Authentication</h1>
                    <ul className='nav-links'>
                        
                        <li><Link to='/auth/login'>Login</Link></li>
                        <li><Link to='/auth/register'>Register</Link></li>
                        <li><Link to='/home'>Home</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <img src='https://www.kindpng.com/picc/m/273-2738804_php-login-and-authentication-login-hd-png-download.png'></img>
            </div>
        </div>
    )
}

export default AppBar