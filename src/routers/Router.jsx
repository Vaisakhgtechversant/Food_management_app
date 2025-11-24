import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Add from '../components/Add';
import Home from '../components/Home';
import View from '../components/View';
import Edit from '../components/Edit';
import Login from '../components/Login';
import Register from '../components/Register';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


 
const Router = () => {
  return (
    <BrowserRouter>
     <Navbar />
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='/view/:id' element={<View/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
    </Routes>
     <Footer />
    </BrowserRouter>
  )
}

export default Router