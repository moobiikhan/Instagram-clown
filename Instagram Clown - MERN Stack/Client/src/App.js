import React from 'react';
import './App.css';
import NavBar from './components/screens/Navbar';
import {BrowserRouter, Route} from "react-router-dom"
import Home from './components/screens/Home';
import Signin from './components/screens/Signup';
import Profile from './components/screens/Profile';
import Signup from "./components/screens/Signin"

function App() {
  return(
    <BrowserRouter>
      <NavBar />
      <Route exact path="/"> 
          <Home />
      </Route>   
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/login">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
    </BrowserRouter>
  )
}

export default App;
