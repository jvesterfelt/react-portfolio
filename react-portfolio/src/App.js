import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from "./components/Projects";
import Footer from './components/Footer';
import Home from "./pages/Home";

function App() {
 
  return (
      <div className="bg-light text-dark">
      <Nav></Nav>
      <main>
        <Home />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
