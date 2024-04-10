import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './../CSSFiles/Search.css'
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Header from '../Components/header'




const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const TenIngredients = [
    {label: 'Potatoe'},
    {label: 'Pickles'},
    {label: 'Chicken Breast'},
    {label: 'Garlic'},
    {label: 'Onion'},
    {label: 'Avocado'},
    {label: 'Ground Beef'},
    {label: 'Tomato'},
    {label: 'Banana'},
    {label: 'Foot Lettuce'}
  ]

  const FiveCusines = [
    {label: 'Greek'},
    {label: 'French'},
    {label: 'Chinese'},
    {label: 'Mexican'},
    {label: 'Indian'}
  ]


const ExtraButton = ({index}) =>{
    return <Button variant='contained'> Child {index}</Button>;
};



const Search = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()
    const [buttonClicked, setButtonClicked] = useState(false)

    const [age, setSort] = React.useState('');

    const handleChange = (event) => {
      setSort(event.target.value);
      handleOrderChange();
    };
    const [order, setOrder] = useState('-1');

    const [isVisible, setIsVisible] = useState(true);
    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
    const [isVisible3, setIsVisible3] = useState(true);
    
    const handleOrderChange = () => {
        const newOrder = order === '-1' ? '1' : '-1';
        setOrder(newOrder)
    }
    const HandleCheck = () =>{
        setIsVisible(!isVisible)
    }

    const [showMessage, setShowMessage] = useState(false);

    const inProgress = () => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000); // 3000 milliseconds = 3 seconds
    };

    const HandleCheck1 = () =>{
        setIsVisible1(!isVisible1)
    }

    const HandleCheck2 = () =>{
        setIsVisible2(!isVisible2)
    }

    const HandleCheck3 = () =>{
        setIsVisible3(!isVisible3)
    }

    const HandleAll = () =>{
        HandleCheck();
        HandleCheck2();
        HandleCheck3();
        HandleCheck1();
    }

    const HideOther = (event) =>{
        if (event.key === 'Enter') {
            HandleCheck2();
            HandleCheck3();
            HandleCheck1();
          }
        
    }




    const [components, setComponents] = useState([]);

    const addComponent = () => {
        setComponents(prevComponents => [
          ...prevComponents,
          <ExtraButton key={prevComponents.length + 1} index={prevComponents.length + 1} />
        ]);
      };


    return (
        <div className='fullPage'>
            <Header/>

            <div className='pageContent'>
                <div className='filterSide'>
                    <h1>Filters</h1>

                    <div className='filterCell'>
                        Based On Ingredients
                        <div className='excludeInclude'>
                            
                            <div className='searchNclicker'>
                                <Autocomplete
                                    
                                    sx={{ 
                                        borderRadius: 1,
                                        border: 1,
                                        width: 1,
                                        bgcolor: "antiquewhite",

                                    }}
                                    onChange={HandleCheck}
                                    multiple
                                    id="tags-standard"
                                    options={TenIngredients}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => (
                                    <TextField

                                        margin='dense'
                                        {...params}
                                        variant="standard"
                                        label="Include Ingredients:"
                                        placeholder="Start typing an ingredient"
                                    />
                                    )}
                                />
                            </div>

                            <div className='searchNclicker'>
                                <Autocomplete
                                    
                                    sx={{ 
                                        borderRadius: 1,
                                        border: 1,
                                        width: 1,
                                        bgcolor: "antiquewhite"

                                    }}
                                    onChange={HandleCheck1}
                                    multiple
                                    id="tags-standard"
                                    options={TenIngredients}
                                    getOptionLabel={(option) => option.label}

                                    renderInput={(params) => (
                                    <TextField
                                        margin='dense'
                                        {...params}
                                        variant="standard"
                                        label="Exclude Ingredients:"
                                        placeholder="Start typing an ingredient"
                                    />
                                    )}
                                />
                            </div>

                        </div>
                    </div>

                <div className='filterCell'>                   
                    Based On Time To Make
                    <div className='excludeInclude'>
                    
                        <div className='textBox'>
                        <TextField
                            sx={{ 
                                borderRadius: 1,
                                border: 1,
                                width: 1,
                                bgcolor: "antiquewhite"

                            }}
                            margin='normal'
                            label="Min Time (min)"
                            placeholder='Enter Min Time'
                        />
                        </div>

                        <div className='textBox'>
                        <TextField
                            
                            onChange={
                                HandleAll}

                            sx={{ 
                                borderRadius: 1,
                                border: 1,
                                width: 1,
                                bgcolor: "antiquewhite"

                            }}
                            margin='normal'
                            label="Max Time (min)"
                            placeholder='Enter Max Time'
                        />
                        </div>
                    </div>
                </div>

                <div className='filterCell'>                   
    
                    Based On Cusine
                    <div className='searchNclicker'>
                    <Autocomplete
                                
                                sx={{ 
                                    borderRadius: 1,
                                    border: 1,
                                    width: 1,
                                    bgcolor: "antiquewhite"

                                }}

                                multiple
                                id="tags-standard"
                                options={FiveCusines}
                                getOptionLabel={(option) => option.label}

                                renderInput={(params) => (
                                <TextField
                                    margin='dense'
                                    {...params}
                                    variant="standard"
                                    label="Cusine Type"
                                    placeholder="Start typing a Cusine"
                                />
                                )}
                            />
                    </div>
                </div>

                <div className='filterCell'>                   

                        Based On Dietary Restrictions
                    <div className='dietRes'>
                        <div className='checkBox'>
                            <FormControlLabel    
                            onChange={HandleCheck}                        
                            defaultChecked="unchecked"
                            value="top"
                            control={<Checkbox />}
                            label="Nut Free"
                            labelPlacement="start"
                            />
                        </div>

                        <div className='checkBox'>
                            <FormControlLabel
                            onChange={HandleCheck1} 
                            value="top"
                            control={<Checkbox />}
                            label="Gluten Free"
                            labelPlacement="start"
                            />
                        </div>
                        <div className='checkBox'>
                            <FormControlLabel
                            onChange={HandleCheck2} 
                            value="top"
                            control={<Checkbox />}
                            label="Pescatarian"
                            labelPlacement="start"
                            />
                        </div>
                        <div className='checkBox'>
                            <FormControlLabel
                            onChange={HandleCheck3} 
                            value="top"
                            control={<Checkbox />}
                            label="Plant-Based"
                            labelPlacement="start"
                            />
                        </div>
                        <div className='checkBox'>
                            <FormControlLabel
                            onChange={HandleCheck2} 
                            value="top"
                            control={<Checkbox />}
                            label="Kosher"
                            labelPlacement="start"
                            />
                        </div>
                        <div className='checkBox'>
                            <FormControlLabel
                            onChange={HandleCheck1} 
                            value="top"
                            control={<Checkbox />}
                            label="Halal"
                            labelPlacement="start"
                            />
                        </div>
                    </div>

                </div>   
                </div>
                    
                <div className='resultSide'>
                    <h1> Results</h1>
                    <div className='searchSort'>
                        <div className='keywordSearch'>
                        <TextField
                            sx={{ 
                                borderRadius: 1,
                                border: 1,
                                width: 1,
                                bgcolor: "antiquewhite"

                            }}
                            onKeyDown={HideOther}
                            margin='normal'
                            label="Keyword Search"
                            placeholder='Enter keywords'
                        />
                        </div>

                        <div className='sorter'>
                        <FormControl fullWidth
                        sx={{
                            marginTop: 2
                        }}
                        >
                            <InputLabel>Sort By</InputLabel>
                                <Select
                                defaultValue="Expiring Ingredients"
                                sx={{ 
                                    borderRadius: 1,
                                    border: 1,
                                    width: 1,
                                    bgcolor: "antiquewhite",
    
                                }}


                                onChange={handleChange}
                                onClose={handleOrderChange}
                                >
                                <MenuItem value="Most Ingredients Matched">Most Ingredients Matched</MenuItem>
                                <MenuItem value="Lowest Cook Time">Lowest Cook Time</MenuItem>
                                <MenuItem value="Expiring Ingredients">Most Expiring Ingredients</MenuItem>
                                <MenuItem value="Lowest Calories">Lowest Calories</MenuItem>
                                <MenuItem value="Least Ingredients">Least Ingredients</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                    </div>

                    <div className='result'>
                        {isVisible && <div style= {{order}} className='resultCard'>
                            <div className='image'>
                                IMAGE HERE
                            </div>

                            <div className='titleFax'>
                                <div className='title'>
                                    One Pot Italian Tomato Chicken and Rice
                                </div>

                                <div className='fax'>
                                    <div className='faxCell'>
                                    45 min to prepare
                                    </div>
                                    <div className='faxCell'>
                                    650 cal per Serving
                                    </div>
                                    <div className='faxCell'>
                                    6/8 Ingredients
                                    </div>
                                </div>


                            </div>

                            <div className='buttons'>
                                    <Button variant='contained' 
                                    sx={{ 
                                    borderRadius: 1,
                                    border: 1,
                                    width: 1,
                                    bgcolor: "yellow",
                                    color: 'black',
                                    margin: 0.5,
                                    display: 'flex',
                                    justifyContent: 'center'
                                    
                                    }}

                                    onClick={() => {
                                        alert('Feature Under Development!');
                                      }}
                                    > More Info</Button>

                                    

                                    <Button variant='contained'
                                    sx={{ 
                                    borderRadius: 1,
                                    color: 'black',
                                    border: 1,
                                    width: 1,
                                    bgcolor: "green",
                                    margin: 0.5,
                                    }}
                                    onClick={() => {
                                        navigate("/view");
                                      }}
                                    > View Recipe</Button>
                            </div>

                        </div>}
                        

                        {isVisible1 && <div className='resultCard'> 
                        <h1>*Another Result *</h1>
                        </div>}

                        {isVisible2 && <div className='resultCard'> 
                        <h1>*Another Result #2*</h1>
                        </div>}

                        {isVisible3 && <div className='resultCard'> 
                        <h1>*Another Result #3 *</h1>
                        </div>}
                    </div>
                </div>
            </div>
        
        </div>
    )

    
}

export default Search