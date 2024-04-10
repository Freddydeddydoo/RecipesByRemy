import React, { useState } from 'react';
import Button from '@mui/material/Button'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import './../CSSFiles/Search.css'



import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

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







// Define your component
const DynamicComponent = ({ index }) => {
  return <Button variant='contained'>This is dynamically created component {index}</Button>;
};







// Define your parent component
const ParentComponent = () => {
  const [components, setComponents] = useState([]);

  // Function to add a new component
  const addComponent = () => {
    setComponents(prevComponents => [
      ...prevComponents,
      <DynamicComponent key={prevComponents.length + 1} index={prevComponents.length + 1} />
    ]);
  };

  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      {/* Button to add a new component */}
      <button onClick={addComponent}>Add Component</button>

      {/* Container to hold components */}
      <div>
        {components.map(component => component)}
      </div>
      <div>

        <h1>SPACER</h1>
      </div>
      <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Units"
      defaultValue={"Metric"}
    >
      <ToggleButton value="Imperial">Imperial</ToggleButton>
      <ToggleButton value="Metric">Metric</ToggleButton>
    </ToggleButtonGroup>
    
    <div>

      <h1>SPACER</h1>
    </div>
    <Stack spacing={3} sx={{width:500}}>
    <Autocomplete
        multiple
        id="tags-standard"
        options={TenIngredients}
        getOptionLabel={(option) => option.label}
        defaultValue={[TenIngredients[5]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Include Ingredients:"
            placeholder="Start typing an ingredient"
          />
        )}
      />
    </Stack>
   
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

    <div className='filterCell'>
                        <Button variant='contained'
                        onClick={
                        addComponent
                        }
                        > Click to make more buttons</Button>
                        
                        {components.map(component => component)}
                        


                    </div>
    </div>
  );
};

export default ParentComponent;