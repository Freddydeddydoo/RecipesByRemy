import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './CSSFiles/App.css';
import './CSSFiles/Saved.css';
import Home from './Pages/home'
import Signup from './Pages/signup'
import Saved from './Pages/saved'
import Search from './Pages/search'
import Test from './Pages/test'
import Test2 from './Pages/test2'
import EditView from './Pages/editview'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/login'
import Profile from './Pages/profile'
import View from './Pages/view'
import Efridge from './Pages/efridge';
import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/saved" element={<Saved/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/test2" element={<Test2/>} />
          <Route path="/view" element={<View/>} />
          <Route path="/editview" element={<EditView/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/efridge" element={<Efridge />} />
          <Route path="/view" element={<View />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
