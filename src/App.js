import React from 'react'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import "./styles/App.css"
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="app">
    <Router>

    <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
      </Routes>
      <Footer/>

    </Router>
     
      
    </div>
  );
}

export default App;
