import React from 'react';
import jamieImg from "../../assets/images/JamieVesterfelt.PNG";

function About() {
  const imgSize = {
    width: "200px",
    height: "250px"
  };
  
  const cardStyle = {
    width: "75%",
    height: "250px"
  }
  
  const sectionStyle = {
    width: "70%"
  };

    return (
      <section className="container-fluid bg-light" style={sectionStyle}>
        <div className="mb-3 mt-5 bg-light" >
          <div className="row g-0 justify-content-center">
              <img src={ jamieImg } style={imgSize} className="profile-photo rounded-start" alt="...images" />
            <div className="col-md-8 m-0 container" style={cardStyle}>
              <div className="card-body bg-secondary rounded-end" style={cardStyle}>
                <h3 className="card-title text-center text-wrap bg-secondary text-light">Jamie Vesterfelt</h3>
                <h5 className="card-title text-center text-wrap bg-secondary text-light">About Me</h5>
                <p className="card-text text-center text-wrap bg-secondary text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;