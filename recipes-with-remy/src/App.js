import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './CSSFiles/App.css';
import './CSSFiles/Saved.css';

import Home from './Pages/home'
import Login from './Pages/login'
import signup from './Pages/signup'
import Saved from './Pages/saved'
import Search from './Pages/search'
import {useState, useEffect} from 'react'
import Test from './Pages/test'
import Test2 from './Pages/test2'
import View from './Pages/view'
import EditView from './Pages/editview'


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
          <Route path="/search" element={<Search/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/test2" element={<Test2/>} />
          <Route path="/view" element={<View/>} />
          <Route path="/editview" element={<EditView/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
