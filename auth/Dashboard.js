import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Account from './Account'
import './dashboard.css'

const DashBoard = () => {
    useEffect(() => {
        let logData = sessionStorage.getItem("userDetails")
        console.log('logdata', logData)
        let user = JSON.parse(logData)
        console.log("User", user)
        
    },[])

    function handleLogout() { 
        const remove = sessionStorage.removeItem('userDetails');
        const rem = sessionStorage.removeItem('isLoggedIn')
        window.swal("Are you sure") 
    }

    return (
        <div className='app'>
            <div className='header'>
                <div className='homepage-appbar'>
                    <h1>Welcome to Amadis</h1>
                    <ul className='nav-links'>
                       
                        <li><Link to='/' onClick={handleLogout}> Logout</Link></li>
                    </ul> 
                </div>
            </div>
            <div>
            <Account/>
            </div>
        </div>
    )
}

export default DashBoard

