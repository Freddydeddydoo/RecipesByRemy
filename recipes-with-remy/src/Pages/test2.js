import React from 'react';
import { Select, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
function MySelect() {
  return (
    <div>
    <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
    <Select defaultValue="Most Ingredients Matched">
      <MenuItem value="Most Ingredients Matched">Most Ingredients Matched</MenuItem>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      {/* Add more menu items if needed */}
    </Select>
    </div>
  );
}

export default MySelect;