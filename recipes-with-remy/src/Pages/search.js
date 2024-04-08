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
    };


    const [components, setComponents] = useState([]);

    const addComponent = () => {
        setComponents(prevComponents => [
          ...prevComponents,
          <ExtraButton key={prevComponents.length + 1} index={prevComponents.length + 1} />
        ]);
      };


    return (
        <div className='fullPage'>
            <div className='stickyHeader'>
                Eventual Nav Bar
            </div>

            <div className='pageContent'>
                <div className='filterSide'>
                    Filterside
                    <div className='filterCell'>
                        <Button variant='contained'
                        onClick={
                        addComponent
                        }
                        > Click to make more buttons</Button>
                        
                        {components.map(component => component)}
                        


                    </div>

                    <div className='excludeInclude'>
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
                                    margin='normal'
                                    {...params}
                                    variant="standard"
                                    label="Cusine Type"
                                    placeholder="Start typing a Cusine"
                                />
                                )}
                            />
                    </div>

                    <div className='dietRes'>
                        <div className='checkBox'>
                            <FormControlLabel
                            defaultChecked="unchecked"
                            value="top"
                            control={<Checkbox />}
                            label="Nut Free"
                            labelPlacement="start"
                            />
                        </div>

                        <div className='checkBox'>
                            <FormControlLabel
                            value="top"
                            control={<Checkbox />}
                            label="Gluten Free"
                            labelPlacement="start"
                            />
                        </div>
                        <div className='checkBox'>
                            <FormControlLabel
                            value="top"
                            control={<Checkbox />}
                            label="Pescatarian"
                            labelPlacement="start"
                            />
                        </div>
                        <div className='checkBox'>
                            <FormControlLabel
                            value="top"
                            control={<Checkbox />}
                            label="Plant-Based"
                            labelPlacement="start"
                            />
                        </div>
                        <div className='checkBox'>
                            <FormControlLabel
                            value="top"
                            control={<Checkbox />}
                            label="Kosher"
                            labelPlacement="start"
                            />
                        </div>
                        <div className='checkBox'>
                            <FormControlLabel
                            value="top"
                            control={<Checkbox />}
                            label="Halal"
                            labelPlacement="start"
                            />
                        </div>
                    </div>

                    
                </div>
                    
                <div className='resultSide'>
                    resultSide
                    <div className='searchSort'>
                        <div className='keywordSearch'>
                        <TextField
                            sx={{ 
                                borderRadius: 1,
                                border: 1,
                                width: 1,
                                bgcolor: "antiquewhite"

                            }}
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
                            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                                <Select
                                sx={{ 
                                    borderRadius: 1,
                                    border: 1,
                                    width: 1,
                                    bgcolor: "antiquewhite",
    
                                }}
                                value={age}
                                label="Sort By"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Most Ingredients Matched</MenuItem>
                                <MenuItem value={20}>Lowest Cook Time</MenuItem>
                                <MenuItem value={30}>Expiring Ingredients</MenuItem>
                                <MenuItem value={40}>Lowest Calories</MenuItem>
                                <MenuItem value={50}>Least Ingredients</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                    </div>

<div className='result'>
    <div className='table50'>
        <div className='tableLine'>
            <div className='IngrName'>
                <h1>Ingredients</h1>
            </div>
            <div className='percentage'>
                <h1>Percent in Fridge</h1>
            </div>
        <div className='tableLine'>
            <div className='IngrName'>
                 Pear
            </div>
            <div className='percentage'>
                100%
            </div>
        </div>
        <div className='tableLine'>
            <div className='IngrName'>
                Tomato
            </div>
            <div className='percentage'>
                70%
            </div>
        </div>
        </div>

    </div>
                    </div>
                </div>
            </div>
        
        </div>
    )

    
}

export default Search