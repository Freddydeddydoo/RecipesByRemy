import React from 'react'


import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Removed duplicate import of useEffect

import './../CSSFiles/EditView.css';
// import { Button } from '@mui/base/Button';
// import { Slider } from '@mui/base/Slider';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import chicken from "./../Images/garlic.jpeg";
import { padding } from '@mui/system';
import IconButton from '@mui/material/IconButton';


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