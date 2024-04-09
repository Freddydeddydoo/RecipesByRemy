import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Removed duplicate import of useEffect

import './../CSSFiles/View.css';
import { Button, Slider } from '@mui/base/';
import PropTypes from 'prop-types';

function SliderValueLabel({ children }) {
    return <span className="valueLabel">{children}</span>;
}

SliderValueLabel.propTypes = {
    children: PropTypes.element.isRequired,
};

function valuetext(value) {
    return `${value}°C`;
}

const Profile = (props) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();
    const [switchChecked, setSwitchChecked] = useState(false); // Use useState hook for switch state

    const handleSwitchChange = (checked) => { // Define a handler for switch state change
        console.log(checked);
        setSwitchChecked(checked);
    };

    const onButtonClickSave = () => {
        console.log("save for later");
    }

    return (
        <div className='container'>
            <div className='box'>
                <h1 className='text'>One Pot Italian Tomato Chicken and Rice</h1>
                <Button onClick={onButtonClickSave}>Save for Later</Button>
            </div>

            <img src="recipes-with-remy/src/Images/Italian-Chicken-and-Rice-2.jpg" />

            <div className='column'>
                <div className='box_small'>
                    <div>
                        <h1>Steps</h1>
                        <ol>
                            <li>Heat oven to 200c | 400F. Heat the oil in a large, shallow ovenproof cast iron skillet/or pan. Add the chicken and fry for 3-4 mins on medium-high heat. Turn and fry again until golden all over. Add the onion, red capsicum/peppers and garlic and fry for about 3 mins or until lightly golden and onion is transparent. Transfer the chicken onto a plate; stir the olives, sundried tomato strips, basil, oregano, parsley and rice into the pan; allow the rice to soak up all the juices. Return the chicken pieces back to the pan on top of the rice; add the tomatoes and stock. Bring everything to the boil, rotate the chicken in the sauce before transferring to the oven. Cover with foil and allow to bake for about 40 minutes (depending on your oven) until the rice has softened. Remove cover and change oven settings to grill/broil on medium heat; grill/broil for a further 8-10 minutes or until the chicken is crispy and golden</li>
                            <li>Season with a little salt to taste and sprinkle with freshly chopped parsley and grated parmesan cheese (optional).</li>
                        </ol>
                    </div>
                </div>

                <div className='box_small'>
                    <div>
                        <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Nutritional Facts (per serving)</h1>
                        <span className='facts'>Calories: 650 cal</span>
                        <span className='facts'>Carbohydrates: 27g</span>
                        <span className='facts'>Fat: 22g</span>
                        <span className='facts'>Fiber: 3g</span>
                        <span className='facts'>Protein: 48g</span>
                    </div>
                </div>
            </div>

            <div className='box'>
                <div>
                    <h1>Number of servings:</h1>
                    <Slider
                        aria-label="Servings"
                        defaultValue={1}
                        getAriaValueText={valuetext}
                        shiftStep={1}
                        step={1}
                        marks
                        min={1}
                        max={10}
                        slots={{ valueLabel: SliderValueLabel }}
                    />
                </div>

                <div>
                    <h1>Ingredients</h1>
                </div>
            </div>
        </div>
    );
};

export default Profile;
