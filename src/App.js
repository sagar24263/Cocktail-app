import React, { Component }  from 'react';
import  './App.css';
import  Cocktail from './components/Cocktail';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Singlecocktail from './components/Singlecocktail';
import Error from './components/Error';


function App() {
  return (
    <div className="App">

   <Router>

   <Navbar/>

   <Routes>






<Route exact path='/' element={<Home />} />
<Route exact path='/about' element={<About/>} />
<Route exact path='/cocktail' element={<Cocktail/>}  />
<Route exact path='/cocktail/:id' element={<Singlecocktail/>} />
<Route exact path='*' element={<Error/>} />





   </Routes>



   </Router>



    </div>
  );

}

export default App;
 