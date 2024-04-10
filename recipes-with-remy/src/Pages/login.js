import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './../CSSFiles/signup.css'
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react'


const Login = (props) => {
    const { loggedIn, email } = props //to be decided tbh
    const navigate = useNavigate()

    const onButtonClickedSignin = () => {
        navigate('/signup')
    }
    
    const onButtonClickedLogin = () => {
        navigate('/Efridge')
    }

    return (
    <div className="mainContainer">

        <div className={'FullPageWrapper'}>
        <div className={'titleContainer'}>
            <div>Lets Get Cooking!</div>
        </div>
        <div className={'LogInBox'}>
            <div className={'inputField'}>
                Email Address: 
                <input className={'SignInInputs'} type='text'></input>
            </div>

            <div className={'inputField'}>
                Password:
                <input className={'SignInInputs'} type='password'></input>
            </div>
            <div className="signinButton">
                <Button variant='success' className={"CustomGreen"} size='small' onClick={onButtonClickedLogin}>
                    Log In 
                </Button>
            </div>
            <div className={'signInTxt'}>
                Don't have an account?
                    <a style={{cursor: 'pointer', textDecoration: 'underline', color: 'blue'}} onClick={onButtonClickedSignin}>
                        Try  Signing in!
                    </a>
            </div>
        </div>
        </div>
    </div>
    )
    }




export default Login