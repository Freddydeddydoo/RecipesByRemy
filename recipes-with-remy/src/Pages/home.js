import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import './../CSSFiles/HomePage.css'

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()
    const [buttonClicked, setButtonClicked] = useState(false)

    const onButtonClickedLogin = () => {
        navigate('./login')
    }

    const onButtonClickSignin = () => {
        navigate('./signup')
    }

    const handleButtonClick = () =>{
        setButtonClicked(true)
    }

    return (
        <div className="mainContainer">
            <div className={'HomeSignLog'}>
                <div className={'titleContainer'}>
                    <div className={'homeTitle'}>Recipes By Remy</div>
                </div>
                <div>This is the home page.</div>
                <div className={'buttonContainer'}>
                    <input className={buttonClicked ? 'inputButtonWhiteHover' : 'inputButtonWhite'}  type="button" 
                    onClick={() => {
                        onButtonClickedLogin();
                        handleButtonClick();
                    }} 
                    value={'Log in'}
                    />
                </div>
                <div className={'buttonContainer'}>
                    <input  className={buttonClicked ? 'inputButtonWhiteHover' : 'inputButtonWhite'} 
                        type="button" 
                        onClick={onButtonClickSignin} 
                        value={'Sign up'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
