import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



const signup = (props) => {
    const { loggedIn, email } = props


    return (
    <div className="mainContainer">
        <div className={'HomeSignLog'}>
        <div className={'titleContainer'}>
            <div>Welcome!</div>
        </div>
        <div>This is the signin page.</div>
        </div>
    </div>
    )
    }




export default signup