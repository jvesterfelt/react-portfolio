// import React, {useState} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import ProjectList from '../ProjectList';

function Projects({currentProjectCategory}) {


    return (
        <section className="bg-light text-secondary" style={{ height: "100%", width: "100%"}}>
            <h1 className="text-dark text-center text-wrap">{capitalizeFirstLetter(currentProjectCategory.name)}</h1>
            <p className="text-center text-wrap">{ currentProjectCategory.description }</p>
            <div className="flex-row">
                <ProjectList category={ currentProjectCategory.name }/>
            </div>
        </section>
    );
}

export default Projects;