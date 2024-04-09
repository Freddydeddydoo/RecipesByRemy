import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Removed duplicate import of useEffect

import './../CSSFiles/View.css';
import { Button, Slider } from '@mui/base/';


const Profile = (props) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();
    const [switchChecked, setSwitchChecked] = useState(false); // Use useState hook for switch state

    const handleSwitchChange = (checked) => { // Define a handler for switch state change
        console.log(checked);
        setSwitchChecked(checked);
    };

    const onButtonClickPassword = () => {
        console.log("change password");
    }
    const onButtonClickLogout = () => {
        console.log("logout");
    }

    return (
        <div className='container'>
            <div className='box'>
                <h1 className='text'>One Pot Italian Tomato Chicken and Rice</h1>
                <Button>Save for Later</Button>
            </div>

            <img src="recipes-with-remy/src/Images/Italian-Chicken-and-Rice-2.jpg" />

            <div className='box'>
                <div>
                    <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Nutritional Facts (per serving)</h1>
                    <span className='facts'>Calories: 650 cal</span>
                    <span className='facts'>Carbohydrates: 27g</span>
                    <span className='facts'>Fat: 22g</span>
                    <span className='facts'>Fiber: 3g</span>
                    <span className='facts'>Protein: 48g</span>
                </div>
            </div>

            <div className='box'>
                <div>
                    <h1>Number of servings:</h1>
                    <Slider defaultValue={50} />
                </div>
                <div>
                    <h1>Ingredients</h1>
                </div>
            </div>
        </div>
    );
};

export default Profile;
