import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AppLayout from './components/AppLayout';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {


  return (
    <>
   <Routes>
     <Route path="/" element={<AppLayout/>}>
                <Route index element={<Home/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
      </Route>
        </Routes>
    </>
  )
}

export default App
