import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react'


const Signup = (props) => {
    const { loggedIn, email } = props


    return (
    <div className={"FullPageWrapper"}>
        <div className='titleContainer'>Lets get Cooking</div>
        <div>Discover your passion for the craft</div>
        <div className={"SignInBox"}>
           <div className={'inputField'}>
                First Name: 
                <input className={'SignInInputs'} type='text'></input>
           </div>
           <div className={'inputField'} >
                Last Name:
                <input className={'SignInInputs'} type='text'></input>
            </div>
            <div className={'inputField'}>
                Email:
                <input className={'SignInInputs'} type='text'></input>
            </div>
            <div className={'inputField'}>
                Password(6 Characters or More):
                <input className={'SignInInputs'} type='password'></input>
            </div>
            <div className={'signInTxt'}>
                by clicking 'make account' you agree to our 
                <a href='https://www.google.com'> terms of service</a>.
                Enjoy cooking!
            </div>
            <div className="signinButton">
                <Button variant='success' className={"CustomGreen"} size='small'>
                    Sign In 
                </Button>
            </div>
        </div>
    </div>
    )
    }




export default Signup;