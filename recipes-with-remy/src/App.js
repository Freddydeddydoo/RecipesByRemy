import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './CSSFiles/App.css';
import './CSSFiles/Saved.css';

import Home from './Pages/home'
import Login from './Pages/login'
import signup from './Pages/signup'
import Saved from './Pages/saved'
import {useState, useEffect} from 'react'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)  
  const [email, setEmail] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<signup/>} />
          <Route path="/saved" element={<Saved/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
