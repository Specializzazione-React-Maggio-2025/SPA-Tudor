// import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router";
import './App.css';
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import NotFoundPage from "./pages/404"


function App() {

  return (
    <>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Gallery" element={<Gallery/>} />
        <Route path="*" element={<NotFoundPage />} />
        <Route/>
      </Routes>
    </>
  )
}

export default App
