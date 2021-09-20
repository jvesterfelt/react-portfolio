import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    projectCategories = [],
    setCurrentProjectCategory,
    currentProjectCategory,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentProjectCategory.name);
  }, [currentProjectCategory]);

    return (
<nav className="navbar navbar-dark bg-dark">
  <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button" href="#about" onClick={() => setContactSelected(false)}>
              About Me
          </button>
          {projectCategories.map((category) => (
            <button className={`btn btn-sm btn-outline-secondary me-2 ${currentProjectCategory.name === category.name && !contactSelected && 'navActive'}`}
              key={category.name}
              type="button" onClick={() => {
                setCurrentProjectCategory(category);
                setContactSelected(false);
              }}>
              {capitalizeFirstLetter(category.name)}
            </button>
          ))}
          <button className="btn btn-sm btn-outline-secondary" type="button">
            <span onClick={() => setContactSelected(true)}>Contact</span>
    </button>
  </form>
</nav>
    );
}

export default Nav;



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