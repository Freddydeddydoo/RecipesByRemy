import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Components/home'
//import 
import {useState, useEffect} from 'react'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)  
  const [email, setEmail] = useState('')

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>

  //     </header>
  //   </div>
  // );
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          
          {/* <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
