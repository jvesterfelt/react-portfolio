import React, {useState} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from "../../assets/images/";
import ProjectList from '../ProjectList';

function Projects({}) {
    const [projects] = useState([
        {
            name: "Join-Coin",
            description: "Project 1: Using third-party APIs",
            url: "https://github.com/EastonShaum/Join-Coin",
            imgSrc: "./src/assets/images/join_coin.jpg"
        }, {
            name: "Goal-Getter",
            description: "Project 2: Full-stack application utilizing templating and custom APIs.",
            url: "https://github.com/EastonShaum/Goal-Getter",
            imgSrc: "./src/assets/images/goal-getter.jpg"
        }, {
            name: "Run-Buddy",
            description: "Module 1: Learning HTML",
            url: "https://jvesterfelt.github.io/module-1-Run-Buddy/",
            imgSrc: "./src/assets/images/Run-Buddy.jpg"
        }, {
            name: "Coding Quiz",
            description: "Module 4: Web APIs",
            url: "https://jvesterfelt.github.io/coding-quiz/",
            imgSrc: "./src/assets/images/coding_quiz.jpg"
        }, {
            name: "Workday Scheduler",
            description: "Module 5: Third-Party APIs",
            url: "https://jvesterfelt.github.io/work-day-scheduler/",
            imgSrc: "./src/assets/images/workday_scheduler.jpg"
        }, {
            name: "Readme Generator",
            description: "Module 9: Introduction to Node.js",
            url: "https://github.com/jvesterfelt/readme-generator",
            imgSrc: "./src/assets/images/readme-generator.jpg"
        }, {
            name: "Waymazonfair",
            description: "Module 13: Introduction to Object Relational Mapping (ORM)",
            url: "https://github.com/jvesterfelt/waymazonfair",
            imgSrc: "./src/assets/images/ORM.jpg"
        }, {
            name: "Photo Port",
            description: "Module 20: Introduction to React.",
            url: "https://github.com/jvesterfelt/photo-port",
            imgSrc: "./src/assets/images/photo-port"
        },
    ]);
    const [currentProject, setCurrentProject] = useState(projects[0]);
  

    return (
        <section className="bg-light text-secondary" style={{ height: "100%", width: "100%"}}>
            <h1 className="text-dark">Project Category</h1>
            <p>Description of what this category demonstrates.</p>
            <div className="flex-row">
                <ProjectList/>
            </div>
        </section>
    );
}

export default Projects;