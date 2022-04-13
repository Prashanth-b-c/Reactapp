import React, { useEffect, useState } from "react";
import { Card, Button } from 'react-bootstrap'

const Account = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    useEffect(() => {
        let logData = sessionStorage.getItem("userDetails")
        console.log('logdata', logData)
        let user = JSON.parse(logData)
        console.log("User", user)
        console.log('**', user.username)
        setName(user.username)
        setEmail(user.email)
        setPhone(user.phone)
    }, [])

    const centerStyle = {
        position: 'fixed',
        margin: 'auto',
        height: '400px',
        width: '400px',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
    return (
            <div className="" style={centerStyle}>
                <Card className="text-center">
                    <Card.Header>Account Details</Card.Header>
                    <Card.Body>
                        <Card.Title>Name - {name}</Card.Title>
                        <Card.Text>
                            <strong>Email - {email}</strong> <br />
                            <strong>Phone - {phone}</strong>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
            )
}

export default Account
