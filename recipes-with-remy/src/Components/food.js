import React, { useState } from 'react';
import '../CSSFiles/food.css';

const Food = ({ foodName, expiry, weight, image }) => {
  // States to track whether each field is being edited
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingExpiry, setIsEditingExpiry] = useState(false);
  const [isEditingWeight, setIsEditingWeight] = useState(false);

  // States to hold and change the editable values
  const [editableName, setEditableName] = useState(foodName);
  const [editableExpiry, setEditableExpiry] = useState(expiry);
  const [editableWeight, setEditableWeight] = useState(weight);

  // Handlers to switch to edit mode
  const handleNameClick = () => {
    setIsEditingName(true);
  };

  const handleExpiryClick = () => {
    setIsEditingExpiry(true);
  };

  const handleWeightClick = () => {
    setIsEditingWeight(true);
  };

  // Handlers to update the state when changes are made
  const handleNameChange = (e) => {
    setEditableName(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setEditableExpiry(e.target.value);
  };

  const handleWeightChange = (e) => {
    setEditableWeight(e.target.value);
  };

  // Handlers to revert to view mode on blur or enter key press
  const handleKeyPress = (e, handler) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      handler(false);
      // Here you can also implement saving the changed value to your state or backend
    }
  };

  return (
    <div className='FoodBox'>
      {/* Food Name */}
      {isEditingName ? (
        <input
          type="text"
          value={editableName}
          onChange={handleNameChange}
          onKeyPress={(e) => handleKeyPress(e, setIsEditingName)}
          onBlur={(e) => handleKeyPress(e, setIsEditingName)}
          autoFocus // Automatically focus the input when editing starts
        />
      ) : (
        <div onClick={handleNameClick}>
          Name: {editableName}
        </div>
      )}
      
      {/* Expiry Date */}
      {isEditingExpiry ? (
        <input
          type="text"
          value={editableExpiry}
          onChange={handleExpiryChange}
          onKeyPress={(e) => handleKeyPress(e, setIsEditingExpiry)}
          onBlur={(e) => handleKeyPress(e, setIsEditingExpiry)}
          autoFocus // Automatically focus the input when editing starts
        />
      ) : (
        <div onClick={handleExpiryClick}>
          Expiry: {editableExpiry || 'No expiry date'}
        </div>
      )}

      {/* Weight */}
      {isEditingWeight ? (
        <input
          type="text"
          value={editableWeight}
          onChange={handleWeightChange}
          onKeyPress={(e) => handleKeyPress(e, setIsEditingWeight)}
          onBlur={(e) => handleKeyPress(e, setIsEditingWeight)}
          autoFocus // Automatically focus the input when editing starts
        />
      ) : (
        <div onClick={handleWeightClick}>
          Weight: {editableWeight}g
        </div>
      )}
    </div>
  );
};

export default Food;
