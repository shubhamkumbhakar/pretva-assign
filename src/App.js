import React from 'react';
import './App.css';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
       <div className="App">
       <Navbar/>
        <Switch>

          {/*  */}

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Register />
          </Route>
        </Switch>
        <br/><br/><br/><br/>
       <Footer/>
       </div>
    </Router>
  );
}

export default App;
