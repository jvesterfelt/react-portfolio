import React, { useState } from "react";
import Projects from "../components/Projects";
import About from "../components/About";

const Home = () => {
    return (
        <div className="container bg-light text-dark" id="home">
            <About />
            <Projects />
        </div>
    )
};

export default Home;