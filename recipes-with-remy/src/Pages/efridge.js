import React, { useState } from 'react';
import './../CSSFiles/efridge.css';
import Header from './../Components/header';
import FoodData from '../DummyData/Foodnames';
import Button from 'react-bootstrap/Button';

const getFilteredItems = (query, foodNames) => {
  if (!query) {
    return [];
  }
  return foodNames.filter(name => name.toLowerCase().includes(query.toLowerCase()));
};

const Efridge = () => {  
  const [query, setQuery] = useState("");
  const filteredItems = getFilteredItems(query, FoodData.FoodNames);

  const handleItemClick = (itemName) => {
    // Implement the action you want to take when an item is clicked
    alert(`You clicked on ${itemName}`);
  };

  return (
    <div className="mainContainer">
      <Header />
      <div className={'FullEFridge'}>
        <div className='LeftSide'>
          <div className='SearchBox'>
            <label style={{color: 'black', fontSize: '35px', padding: '10px'}}>Add Item</label>
            <Button variant='success' className={"CustomGreene"} size='small' onClick={handleItemClick}>
                    +
            </Button>
          </div>
          <div className='RecentlyViewed'>
          <label style={{color: 'black', fontSize: '35px', padding: '10px'}}> Recently Added </label>
          </div>
        </div>
        <div className='TheFridge'>
            {/* make the top draggable aswell */}
          <div className='Top' style={{color: 'black', fontSize: '35px', padding: '10px',paddingTop: '35px'}}>
            Your eFridge
          </div>
          <div className='Bottom'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Efridge;
