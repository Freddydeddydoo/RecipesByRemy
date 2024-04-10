import React, { useState } from 'react';
import './../CSSFiles/efridge.css';
import Header from './../Components/header';
import Person1 from '../DummyData/Person1'; // Import Person1
import Button from 'react-bootstrap/Button';
import Food from '../Components/food';

const Efridge = () => {  
  // Initial state for food items and recently added items
  const [foodItems, setFoodItems] = useState(Person1[0].FoodData);
  const [recentlyAdded, setRecentlyAdded] = useState([]);

  // Function to handle adding a new food item
  const handleAddFoodItem = () => {
    // Create a new food item (You can modify this to add different default values)
    const newFoodItem = {
      Name: "New Food",
      weight: 0,
      expiry: null
    };

    // Update the food items array with the new food item
    setFoodItems([...foodItems, newFoodItem]);

    // Update the recently added items array
    setRecentlyAdded([newFoodItem, ...recentlyAdded]);
  };

  // Function to render Food components
  const renderFoodItems = (items) => {
    return items.map((foodItem, index) => (
      <Food
        key={index}
        foodName={foodItem.Name}
        expiry={foodItem.expiry}
        weight={foodItem.weight}
        // Add image if needed
      />
    ));
  };

  return (
    <div className="mainContainer">
      <Header />
      <div className={'FullEFridge'}>
        <div className='LeftSide'>
          <div className='SearchBox'>
            <label style={{color: 'black', fontSize: '35px', padding: '10px'}}>Add Item</label>
            <Button variant='success' className={"CustomGreene"} size='small' onClick={handleAddFoodItem}>
              +
            </Button>
          </div>
          <div className='RecentlyViewed'>
            <label style={{color: 'black', fontSize: '35px', padding: '10px'}}> Recently Added </label>
            {/* Render recently added items */}
            {renderFoodItems(recentlyAdded)}
          </div>
        </div>
        <div className='TheFridge'>
          {/* make the top draggable as well */}
          <div className='Top' style={{color: 'black', fontSize: '35px', padding: '10px', paddingTop: '35px'}}>
            Your eFridge
          </div>
          <div className='Bottom'>
            {/* Render Food components for each item in filteredItems */}
            {renderFoodItems(foodItems)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Efridge;
