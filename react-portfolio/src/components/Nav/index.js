import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Link } from "react-router-dom";

function Nav() {
    return (
<nav className="navbar navbar-dark bg-dark">
  <form className="container-fluid justify-content-start">
    <button className="btn btn-outline-success me-2" type="button">Home</button>
    <button className="btn btn-sm btn-outline-secondary" type="button">Projects</button>
  </form>
</nav>
    );

    // return (
    //     <header className="flex-row px-1">
    //         <h2>
    //             <a href="/">
    //                 <span role="img" aria-label=""></span> Jamie Vesterfelt
    //             </a>
    //         </h2>
    //         <nav>
    //             <ul className="flex-row">
    //                 <li className="mx-2">
    //                     <a href="#about">
    //                         About Me
    //                     </a>
    //                 </li>
    //                 <li className="mx-2">
    //                     <span>
    //                         Contact
    //                     </span>
    //                 </li>
    //                 {projects.map((project) => (
    //                     <li
    //                         className={`mx-1 ${
    //                             currentProject.name === project.name && 'navActive'
    //                         }`}
    //                         key={project.name}
    //                     >
    //                         <span onClick={() => {setCurrentProject(project)}}>
    //                             {capitalizeFirstLetter(project.name)}
    //                         </span>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </nav>
    //     </header>
    // );
}

export default Nav;