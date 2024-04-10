import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './CSSFiles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home'
import Login from './Pages/login'
import Profile from './Pages/profile'
import View from './Pages/view'
import Signup from './Pages/signup'
import Efridge from './Pages/efridge';
import {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)  
  const [email, setEmail] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/efridge" element={<Efridge/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
