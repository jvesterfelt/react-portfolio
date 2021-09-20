import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from "./pages/Contact";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [projectCategories] = useState([
    {
      name: 'HTML & CSS',
      description: 'Projects demonstrating purely HTML and CSS experience',
    },
    { name: 'Javascript', description: 'Projects highlighting Javascript knowledge and skills' },
    { name: 'Full-Stack', description: 'Projects focused on back-end development' },
    { name: 'MERN-Stack', description: 'Projects centered on the MERN stack' },
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
            <Projects currentProjectCategory={ currentProjectCategory }></Projects>
            <About></About>
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
