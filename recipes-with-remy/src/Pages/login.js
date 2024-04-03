import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    return (
    <div className="mainContainer">

        <div className={'HomeSignLog'}>
        <div className={'titleContainer'}>
            <div>Welcome!</div>
        </div>
        <div>This is the login page.</div>
        </div>
    </div>
    )
    }




export default Login