import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Header1 from './components/Header1';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App(){
  // let arr = [34, "ayush", 343, {name: "golu", city:"bhopal"}, {name:"ayush", city: " bhopal"}]
  // console.log(arr[4].name)
  return (
    <div className = "text-center">
      <Header1/>
      <Routes>
        <Route path = '/home' element={<Home/>} />
        <Route path = '/About' element={<About/>} />
        <Route path = '/Contact' element={<Contact/>} />

      </Routes>
    </div>
  );
}

export default App;
