import React, {useState} from 'react';
import ProjectModal from "../ProjectModal";

function ProjectList({ category }) {
    const [photos] = useState([
        {
            name: "Join Coin",
            category: "HTML & CSS",
            description: "First project encompassing html, css, javascript, web/3rd-party APIs."
        },
        {
            name: "Goal Getters",
            category: "Full-Stack",
            description: "Second project demonstrating a scratch-built full-stack application."
        },
        {
            name: "CooKit",
            category: "MERN-Stack",
            description: "Third project, a scratch-built MERN-stack application."
        },
        {
            name: "Robot Gladiators",
            category: "Full-Stack",
            description: "A node.js application demonstrating the `back-end` of a full-stack application."
        },
        {
            name: "Photo Port",
            category: "MERN-Stack",
            description: "A React application used as a primer for the MERN-stack app concepts."
        },
        {
            name: "Password Generator",
            category: "Javascript",
            description: "A javascript application employing algorithms and DOM manipulation."
        }
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);
    const [currentPhoto, setCurrentPhoto] = useState();

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
      }
    
      
    const [isModalOpen, setIsModalOpen] = useState(false);

    const imgStyle = {
        width: "60%",
        height: "75%"
    }
    
    return (
        <section className="container m-2 bg-light">
            <div>
                {isModalOpen && <ProjectModal currentPhoto={currentPhoto} onClose={toggleModal} />}
                <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <div className="card bg-light text-secondary">
                    <img key={image.name} style={imgStyle} src={require(`../../assets/images/${category}/${i}.jpg`).default} className="img-thumbnail mx-1" alt={image.name} type="button" onClick={() => toggleModal(image, i)}/>
                        <div className="card-body">
                            <h5 className="card-title text-dark text-center text-wrap">Project Title</h5>
                            <p className="card-text text-center text-wrap">Description of the project.</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectList;