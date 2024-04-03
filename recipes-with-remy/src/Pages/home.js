import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    const onButtonClickedLogin = () => {
        navigate('./login')
    }

    const onButtonClickSignin = () => {
        //
    }

    return (
        <div className="mainContainer">
            <div className={'HomeSignLog'}>
                <div className={'titleContainer'}>
                    <div>Welcome!</div>
                </div>
                <div>This is the home page.</div>
                <div className={'buttonContainer'}>
                    <input className={'inputButtonWhite'} type="button" onClick={onButtonClickedLogin} value={'Log in'}/>
                </div>
                <div className={'buttonContainer'}>
                    <input className={'inputButtonWhite'} type="button" onClick={onButtonClickSignin} value={'Sign up'}/>
                </div>
            </div>
        </div>
    )
}

export default Home
