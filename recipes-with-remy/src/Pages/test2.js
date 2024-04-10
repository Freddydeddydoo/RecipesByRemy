import React, { useState } from 'react';
import Button from '@mui/material/Button';


function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  return (
    <div>
      <button onClick={handleClick}>Show Message</button>
      {showMessage && (
        <div>
          <h1>Delayed message after 3 seconds</h1>
        </div>
      )}

<Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>
    </div>
  );
}

export default App;