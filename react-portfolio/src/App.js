import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  const [projectCategories] = useState([
    {
      name: 'HTML & CSS',
      description: 'Projects demonstrating purely HTML and CSS experience',
    },
    { name: 'Javascript', description: 'Projects highlighting Javascript knowledge and skills' },
    { name: 'Node, ORM, Express', description: 'Projects focused on back-end development' },
    { name: 'MERN', description: 'Projects centered on the MERN stack' },
  ]);

  const [currentProjectCategory, setCurrentProjectCategory] = useState(projectCategories[0]);

  const [contactSelected, setContactSelected] = useState(false);
 
  return (
      <div>
      <Nav projectCategories={projectCategories}
        setCurrentProjectCategory={setCurrentProjectCategory}
        currentProjectCategory={currentProjectCategory}
        contactSelected={contactSelected}
      setContactSelected={setContactSelected}></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Home />
          </>
        ) : (
            <Contact className="container"/>
  )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
