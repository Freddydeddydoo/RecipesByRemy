import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Removed duplicate import of useEffect

import './../CSSFiles/View.css';
// import { Button } from '@mui/base/Button';
// import { Slider } from '@mui/base/Slider';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import chicken from "./../Images/garlic.jpeg";
import { padding } from '@mui/system';

const View = (props) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();

    const [servings, setServings] = useState(1);
    const [percent, setPercent] = useState(100);
    const [percent2, setPercent2] = useState(100);

    const [removeDisabled, setRemoveDisabled] = useState(false);
    const [saveDisabled, setSaveDisabled] = useState(false);
    const [message, setMessage] = useState('');

    const [saveTxt, setSaveTxt] = useState('Save for Later');

    function valuetext(value) {
        return `${value}`;
    }

    const onButtonClickSave = () => {
        if (saveTxt == "Save for Later") {
            setSaveTxt('Unsave');
        } else {
            setSaveTxt('Save for Later');
        }
        setSaveDisabled(true); // Disable the button
        setTimeout(() => {
            setSaveDisabled(false); // Enable the button after 10 seconds
        }, 2000);
        console.log("save for later");
    }
    const onButtonClickBack = () => {
        navigate("/search");
    }

    const handleSliderChange = (event, newValue) => {
        setServings(newValue);
    };

    const onChangeRemove = (event) => {
        const newValue = event.target.value;
        console.log(newValue);
        setPercent(newValue);
    }
    const onChangeRemove2 = (event) => {
        const newValue = event.target.value;
        console.log(newValue);
        setPercent2(newValue);
    }

    const onButtonClickMade = () => {
        setRemoveDisabled(true); // Disable the button
        setMessage('Ingredients removed!'); // Set the message
        setTimeout(() => {
            setRemoveDisabled(false); // Enable the button after 10 seconds
            setMessage(''); // Clear the message
        }, 5000);
    };

    return (
        <div className='container'>

            <Button onClick={onButtonClickBack} variant='contained'>Back</Button>

            <div className='box'>
                <h1 className='text'>One Pot Italian Tomato Chicken and Rice</h1>
                <Button onClick={onButtonClickSave} variant='contained' disabled={saveDisabled}>{saveTxt}</Button>
            </div>

            <div className='column'>
                <div>
                    <img src={chicken} width="300" height="400" className='image' />
                </div>

                <div className='box_small'>
                    <div>
                        <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Nutritional Facts (per serving)</h1>
                        <span className='facts'>Calories: 573 kcal<br />Carbohydrates: 27g<br />Fat: 22g<br />Fiber: 3g<br />Protein: 48g</span>

                    </div>
                </div>
            </div>

            <div className='box'>
                <div>


                    <div className='servings'>
                        <h3>Number of servings:</h3>
                        <Slider
                            aria-label="Servings"
                            defaultValue={1}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            marks
                            min={1}
                            max={10}
                            onChange={handleSliderChange}
                        />
                    </div>

                    <div className='table502'>
                        <div className='tableLine'>
                            <div className='IngrName2'>
                                <h1>Ingredients</h1>
                            </div>
                            <div className='percentage'>
                                <h1>Percent in Fridge</h1>
                            </div>

                            <div className='tableLine'>
                                <div className='IngrName2'>
                                    {1 * servings} tbsp olive oil
                                </div>
                                <div className='percentage'>
                                    {(Math.min(7 / (servings), 1) * 100).toFixed(2)}%
                                </div>
                            </div>
                            <div className='tableLine'>
                                <div className='IngrName2'>
                                    {4 * servings} chicken thigh cutlets
                                </div>
                                <div className='percentage'>
                                    {(Math.min(10 / (4 * servings), 1) * 100).toFixed(2)}%
                                </div>
                            </div>
                            <div className='tableLine'>
                                <div className='IngrName2'>
                                    {400 * servings} g can chopped tomatoes
                                </div>
                                <div className='percentage'>
                                    {(Math.min(1200 / (400 * servings), 1) * 100).toFixed(2)}%
                                </div>
                            </div>
                            <div className='tableLine'>
                                <div className='IngrName2'>
                                    {1.5 * servings} cups chicken stock
                                </div>
                                <div className='percentage'>
                                    {(Math.min(5 / (1.5 * servings), 1) * 100).toFixed(2)}%
                                </div>
                            </div>
                            <div className='tableLine'>
                                <div className='IngrName2'>
                                    {1 * servings} red onion , cut into {8 * servings} wedges
                                </div>
                                <div className='percentage'>
                                    {(Math.min(2 / (servings), 1) * 100).toFixed(2)}%
                                </div>
                            </div>
                            <div className='tableLine'>
                                <div className='IngrName2'>
                                    {1 * servings} red capsicum/bell pepper , deseeded and chopped
                                </div>
                                <div className='percentage'>
                                    {(Math.min(1 / (servings), 1) * 100).toFixed(2)}%
                                </div>
                            </div><div className='tableLine'>
                                <div className='IngrName2'>
                                    {4 * servings} whole garlic cloves , smashed with the back of a knife
                                </div>
                                <div className='percentage'>
                                    {(Math.min(3 / (4 * servings), 1) * 100).toFixed(2)}%
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

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
                        <span className='facts'>Calories: 573 kcal<br />Carbohydrates: 27g<br />Fat: 22g<br />Fiber: 3g<br />Protein: 48g</span>

                    </div>
                </div>
            </div>

            <Button variant='contained' onClick={onButtonClickMade} disabled={removeDisabled}>remove following ingredients from eFridge</Button>
            <p>{message}</p>

            <div className='box'>
                <div>
                    <div className='table50'>
                        <div className='tableLine'>
                            <div className='IngrName'>
                                <h1>Ingredients</h1>
                            </div>
                            <div className='percentage'>
                                <h1>Percent to Remove</h1>
                            </div>
                            <div className='equals'>
                                <h1>Equals</h1>
                            </div>

                            <div className='tableLine'>
                                <div className='IngrName'>
                                    1 tbsp olive oil
                                </div>
                                <div className='percentage'>
                                    <TextField
                                        hiddenLabel
                                        id="filled-hidden-label-small"
                                        defaultValue={percent}
                                        variant="filled"
                                        size="small"
                                        onChange={onChangeRemove}
                                    />
                                </div>
                                <div className='equals'>
                                    {percent / 100} tbsp olive oil
                                </div>
                            </div>
                            <div className='tableLine'>
                                <div className='IngrName'>
                                    4 chicken thigh cutlets
                                </div>
                                <div className='percentage'>
                                    <TextField
                                        hiddenLabel
                                        id="filled-hidden-label-small"
                                        defaultValue={percent2}
                                        variant="filled"
                                        size="small"
                                        onChange={onChangeRemove2}
                                    />
                                </div>
                                <div className='equals'>
                                    {percent2 / 100 * 4} chicken thigh cutlets
                                </div>
                            </div>
                            <div className='tableLine'>
                                <div className='IngrName'>
                                    400 g can chopped tomatoes
                                </div>
                                <div className='percentage'>
                                    <TextField
                                        hiddenLabel
                                        id="filled-hidden-label-small"
                                        defaultValue="100"
                                        variant="filled"
                                        size="small"
                                    />
                                </div>
                                <div className='equals'>
                                    400 g can chopped tomatoes
                                </div>
                            </div>
                            <div className='tableLine'>
                                <div className='IngrName'>
                                    1 1/2 cups chicken stock
                                </div>
                                <div className='percentage'>
                                    <TextField
                                        hiddenLabel
                                        id="filled-hidden-label-small"
                                        defaultValue="100"
                                        variant="filled"
                                        size="small"
                                    />
                                </div>
                                <div className='equals'>
                                    1 1/2 cups chicken stock
                                </div>
                            </div>
                            <div className='tableLine'>
                                <div className='IngrName'>
                                    1 red onion
                                </div>
                                <div className='percentage'>
                                    <TextField
                                        hiddenLabel
                                        id="filled-hidden-label-small"
                                        defaultValue="100"
                                        variant="filled"
                                        size="small"
                                    />
                                </div>
                                <div className='equals'>
                                    1 red onion
                                </div>
                            </div>
                            <div className='tableLine'>
                                <div className='IngrName'>
                                    1 red capsicum/bell pepper
                                </div>
                                <div className='percentage'>
                                    <TextField
                                        hiddenLabel
                                        id="filled-hidden-label-small"
                                        defaultValue="100"
                                        variant="filled"
                                        size="small"
                                    />
                                </div>
                                <div className='equals'>
                                    1 red capsicum/bell pepper
                                </div>
                            </div><div className='tableLine'>
                                <div className='IngrName'>
                                    4 whole garlic cloves
                                </div>
                                <div className='percentage'>
                                    <TextField
                                        hiddenLabel
                                        id="filled-hidden-label-small"
                                        defaultValue="100"
                                        variant="filled"
                                        size="small"
                                    />
                                </div>
                                <div className='equals'>
                                    4 whole garlic cloves
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;