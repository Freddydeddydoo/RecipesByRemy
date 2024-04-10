import React from 'react';
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
import Header from './../Components/header';








const EditView = (props) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();

    const [servings, setServings] = useState(1);
    const [percent, setPercent] = useState(100);
    const [percent2, setPercent2] = useState(100);

    const [removeDisabled, setRemoveDisabled] = useState(false);
    const [saveDisabled, setSaveDisabled] = useState(false);
    const [message, setMessage] = useState('');

    const [saveTxt, setSaveTxt] = useState('Save for Later');

    const [counter, setCounter] = useState(0);


    const [components, setComponents] = useState([
        <div className='stepRow'>
        <b1>Step 1</b1>
        <TextField
            sx={{ 
                marginInline: 3, 
                borderRadius: 1,
                border: 1,
                width: 1,
                bgcolor: "antiquewhite",
                alignSelf: "center"    
            }}
            multiline="true"
            margin='none'
            placeholder='Enter Step'
            defaultValue={"Heat oven to 200c | 400F. Heat the oil in a large, shallow ovenproof cast iron skillet/or pan."}
            

        />
        <Button 
        sx={{
            backgroundColor: "red",
            width: 0.05
        }}
        variant="contained" 
        size='small'
        onClick={() => deleteComponent(0)}>
            Delete Step
        </Button>
        
        </div>,
                <div className='stepRow'>
                <b1>Step 2</b1>
                <TextField
                    sx={{ 
                        marginInline: 3, 
                        borderRadius: 1,
                        border: 1,
                        width: 1,
                        bgcolor: "antiquewhite",
                        alignSelf: "center"    
                    }}
                    multiline="true"
                    margin='none'
                    placeholder='Enter Step'
                    defaultValue={"Add the chicken and fry for 3-4 mins on medium-high heat. Turn and fry again until golden all over."}
                    
        
                />
                <Button 
                sx={{
                    backgroundColor: "red",
                    width: 0.05
                }}
                variant="contained" 
                size='small'
                onClick={() => deleteComponent(1)}>
                    Delete Step
                </Button>
                
                </div>,




                <div className='stepRow'>
                <b1>Step 3</b1>
                <TextField
                    sx={{ 
                        marginInline: 3, 
                        borderRadius: 1,
                        border: 1,
                        width: 1,
                        bgcolor: "antiquewhite",
                        alignSelf: "center"    
                    }}
                    multiline="true"
                    margin='none'
                    placeholder='Enter Step'
                    defaultValue={"Add the onion, red capsicum/peppers and garlic and fry for about 3 mins or until lightly golden and onion is transparent. Transfer the chicken onto a plate; stir the olives, sundried tomato strips, basil, oregano, parsley and rice into the pan; allow the rice to soak up all the juices. "}
                    
        
                />
                <Button 
                sx={{
                    backgroundColor: "red",
                    width: 0.05
                }}
                variant="contained" 
                size='small'
                onClick={() => deleteComponent(2)}>
                    Delete Step
                </Button>
                
                </div>
        

    ]);

    /// INGREDIENT ARRAY
    const [componentsIngr, setComponentsIngr] = useState([
        <div className='stepRow'>
        <b1> 1 </b1>
        <TextField
            sx={{
                marginInline: 5, 
                borderRadius: 1,
                border: 1,
                width: 0.3,
                bgcolor: "antiquewhite",
                alignSelf: "center"    
            }}
            multiline="true"
            margin='none'
            defaultValue='1 tbsp olive oil'

            

        />
        <Button 
        sx={{
            backgroundColor: "red",
            width: 0.05
        }}
        variant="contained" 
        size='small'
        onClick={() => deleteComponentIngr(0)}>
            Delete
        </Button>
    </div>,

<div className='stepRow'>
<b1>2</b1>
<TextField
    sx={{
        marginInline: 5, 
        borderRadius: 1,
        border: 1,
        width: 0.3,
        bgcolor: "antiquewhite",
        alignSelf: "center"    
    }}
    multiline="true"
    margin='none'
    defaultValue='4 chicken thigh cutlets'
    

/>
<Button 
sx={{
    backgroundColor: "red",
    width: 0.05
}}
variant="contained" 
size='small'
onClick={() => deleteComponentIngr(1)}>
    Delete
</Button>
</div>,

<div className='stepRow'>
<b1>3</b1>
<TextField
    sx={{
        marginInline: 5, 
        borderRadius: 1,
        border: 1,
        width: 0.3,
        bgcolor: "antiquewhite",
        alignSelf: "center"    
    }}
    multiline="true"
    margin='none'
    defaultValue='400 g can chopped tomatoes
    '
    

/>
<Button 
sx={{
    backgroundColor: "red",
    width: 0.05
}}
variant="contained" 
size='small'
onClick={() => deleteComponentIngr(2)}>
    Delete
</Button>
</div>,

<div className='stepRow'>
<b1>4</b1>
<TextField
    sx={{
        marginInline: 5, 
        borderRadius: 1,
        border: 1,
        width: 0.3,
        bgcolor: "antiquewhite",
        alignSelf: "center"    
    }}
    multiline="true"
    margin='none'
    defaultValue='1.5 cups chicken stock
    '
    

/>
<Button 
sx={{
    backgroundColor: "red",
    width: 0.05
}}
variant="contained" 
size='small'
onClick={() => deleteComponentIngr(3)}>
    Delete
</Button>
</div>,



<div className='stepRow'>
<b1>5</b1>
<TextField
    sx={{
        marginInline: 5, 
        borderRadius: 1,
        border: 1,
        width: 0.3,
        bgcolor: "antiquewhite",
        alignSelf: "center"    
    }}
    multiline="true"
    margin='none'
    defaultValue='1 red onion , cut into 8 wedges
    '
    

/>
<Button 
sx={{
    backgroundColor: "red",
    width: 0.05
}}
variant="contained" 
size='small'
onClick={() => deleteComponentIngr(4)}>
    Delete
</Button>
</div>,



<div className='stepRow'>
<b1>6</b1>
<TextField
    sx={{
        marginInline: 5, 
        borderRadius: 1,
        border: 1,
        width: 0.3,
        bgcolor: "antiquewhite",
        alignSelf: "center"    
    }}
    multiline="true"
    margin='none'
    defaultValue='1 red capsicum/bell pepper , deseeded and chopped
    '
    

/>
<Button 
sx={{
    backgroundColor: "red",
    width: 0.05
}}
variant="contained" 
size='small'
onClick={() => deleteComponentIngr(5)}>
    Delete
</Button>
</div>,



<div className='stepRow'>
<b1>7</b1>
<TextField
    sx={{
        marginInline: 5, 
        borderRadius: 1,
        border: 1,
        width: 0.3,
        bgcolor: "antiquewhite",
        alignSelf: "center"    
    }}
    multiline="true"
    margin='none'
    defaultValue='4 whole garlic cloves , smashed with the back of a knife
    '
    

/>
<Button 
sx={{
    backgroundColor: "red",
    width: 0.05
}}
variant="contained" 
size='small'
onClick={() => deleteComponentIngr(6)}>
    Delete
</Button>
</div>

    ]);


    const addComponent = () => {
        setComponents((prevComponents) => [
          ...prevComponents,
          <div className='stepRow'>
                            <b1>Step {prevComponents.length+1}</b1>
                            <TextField
                                sx={{ 
                                    marginInline: 3, 
                                    borderRadius: 1,
                                    border: 1,
                                    width: 1,
                                    bgcolor: "antiquewhite",
                                    alignSelf: "center"    
                                }}
                                multiline="true"
                                margin='none'
                                placeholder='Enter Step'
                                
    
                            />
                            <Button 
                            sx={{
                                backgroundColor: "red",
                                width: 0.05
                            }}
                            variant="contained" 
                            size='small'
                            onClick={() => deleteComponent(prevComponents.length+1)}>
                                Delete Step
                            </Button>
                    </div>
        ]);
      };

      const deleteComponentIngr = (index) => {
        setComponentsIngr((prevComponents) => {
            const updatedComponents = [...prevComponents];
            updatedComponents.splice(index, 1);
            return updatedComponents;
          });
        
      };


      const addComponentIngr = () => {
        setComponentsIngr((prevComponents) => [
          ...prevComponents,
          <div className='stepRow'>
                            <b1>{prevComponents.length + 1}</b1>
                            <TextField
                                sx={{
                                    marginInline: 5, 
                                    borderRadius: 1,
                                    border: 1,
                                    width: 0.3,
                                    bgcolor: "antiquewhite",
                                    alignSelf: "center"    
                                }}
                                multiline="true"
                                margin='none'
                                placeholder='Enter Ingredient'
                                
    
                            />
                            <Button 
                            sx={{
                                backgroundColor: "red",
                                width: 0.05
                            }}
                            variant="contained" 
                            size='small'
                            onClick={() => deleteComponentIngr(prevComponents.length)}>
                                Delete
                            </Button>
                    </div>
        ]);
      };

      const deleteComponent = (index) => {
        setComponents((prevComponents) => {
          const updatedComponents = [...prevComponents];
          updatedComponents.splice(index, 1);
          return updatedComponents;
        });
      };


    

      


    

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
        navigate("/saved");
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
        setTimeout(() => {
            setRemoveDisabled(true); // Enable the button after 10 seconds
            setMessage(''); // Clear the message
        }, 5000);
        setMessage('Saving Changes...'); // Set the message
        setTimeout(() => {
            setRemoveDisabled(false); // Enable the button after 10 seconds
            setMessage(''); // Clear the message
        }, 5000);
    };

    return (
        <div className='container'>

            {/* <Header/> */}
            <Button sx={{marginBlock: "1%", alignSelf:"left", width:"25%"}} onClick={onButtonClickBack} variant='contained'>Back</Button>

            <div className='box' style={{
                display:"flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%"
                }}>
                
                <TextField
                            sx={{ 
                                borderRadius: 1,
                                border: 1,
                                width: 0.75,
                                bgcolor: "antiquewhite",
                                alignSelf: "center"


                            }}
                            
                            margin='normal'
                            label="Recipe Name (Click to edit)"
                            placeholder='Enter Name'
                            defaultValue={"One Pot Italian Tomato Chicken and Rice"}

                        />
                
            </div>

            <div className='column' style={{backgroundColor:"rgb(164, 205, 167)", borderRadius:"10px", padding:"1%"}}>
                <div>
                    <img src={chicken} width="300" height="400" className='image' />
                </div>

                <div className='faxBox' >
                    
                        <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Nutritional Facts (per serving)</h1>
                        <b1 style={{ textAlign: 'left', marginLeft: '20px', marginBlock: "10px" }}>Click to edit each</b1>
                        
                        <div className='row'>
                            <div className='IngrText'>Calories:</div>
                            <TextField
                            sx={{ 

                                borderRadius: 1,
                                border: 1,
                                width: 0.35,
                                textAlign: "center",
                                bgcolor: "antiquewhite",
                                alignSelf: "center"
                                


                            }}
                            size='small'

                            multiline
                            
                            margin='none'
                            defaultValue={"573"}

                            /> kcal
                        </div>

                        <div className='row'>
                        <div className='IngrText'>Carbohydrates:</div>
                        
                            <TextField
                            sx={{ 
                                borderRadius: 1,
                                border: 1,
                                width: 0.3,
                                bgcolor: "antiquewhite",
                                alignSelf: "center"
                                


                            }}
                            size='small'

                            multiline
                            
                            margin='none'
                            defaultValue={"27"}

                            />g
                        </div>


                        <div className='row'>
                        <div className='IngrText'>Fat:</div>
                            <TextField
                            sx={{ 
                                borderRadius: 1,
                                border: 1,
                                width: "fit-content",
                                bgcolor: "antiquewhite",
                                alignSelf: "center",
                                textAlign: "center",
                                width: 0.3,



                            }}
                            size='small'

                            multiline
                            
                            margin='none'
                            defaultValue={"22"}

                            />g
                        </div>

                        <div className='row'>
                        <div className='IngrText'>Fiber:</div>                            
                        <TextField
                            sx={{ 
                                borderRadius: 1,
                                border: 1,
                                width: "fit-content",
                                bgcolor: "antiquewhite",
                                width: 0.3,
                                alignSelf: "center"
                                


                            }}
                            size='small'

                            multiline
                            
                            margin='none'
                            defaultValue={"3"}

                            />g
                        </div>

                        <div className='row'>
                        <div className='IngrText'>Protein:</div>
                            <TextField
                            sx={{ 
                                borderRadius: 1,
                                border: 1,
                                width: 0.3,
                                
                                bgcolor: "antiquewhite",
                                alignSelf: "center"
                                


                            }}
                            size='small'
                            multiline
                            alignItems="center"
                            
                            margin='none'
                            defaultValue={"48"}

                            />g
                        </div>
                    
                </div>
            </div>

            <div className='box' style={{display:"flex", flexDirection:"column", margin: "1%"}}>
                <h1>Steps</h1>
                <div className='Stepcolumn'>
                    
                        
                        {components.map((component, index) => (
                            <div key={index} className='Stepcolumn'>
                                {component}
                            </div>
                        ))}
                        
                        
                        <Button variant='contained' onClick={addComponent}>Add Step</Button>

                        
                    
                    
                </div>
            </div>

            <div className='box' style={{display:"flex", flexDirection:"column", width:"50%"}}>
                <h1>Ingredients</h1>
                <div className='Stepcolumn'>
                    

                        {/* Container to hold components */}
                        
                        {componentsIngr.map((componentIngr, indexIngr) => (
                            <div key={indexIngr} className='Stepcolumn'>
                                {componentIngr}
                            </div>
                        ))}
                        
                        {/* Button to add a new component */}
                        <Button variant='contained' onClick={addComponentIngr}>Add Ingredient</Button>

                        
                    
                    
                </div>
            </div>

            

            <Button variant='contained' onClick={onButtonClickMade} disabled={removeDisabled}>Save Changes</Button>
            <p>{message}</p>

            

                    
        
            
        </div>
    );
};

export default EditView;