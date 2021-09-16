import React, {useState} from 'react';
import ProjectModal from "../ProjectModal";

function ProjectList(projects) {
    const toggleModal = (image, i) => {
        // setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
      }
    
      
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div>
            {isModalOpen && <ProjectModal onClose={toggleModal}/>}
            <div className="flex-row">
                    <div className="card bg-light text-secondary">
                    <img src="" className="card-img-top" alt="new image" onClick={() => toggleModal()}/>
                    <div className="card-body">
                            <h5 className="card-title text-dark">Project Title</h5>
                            <p className="card-text">Description of the project.</p>
                    </div>
                  </div>
            </div>
        </div>
    )
}

export default ProjectList;