import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { HiOutlineMailOpen } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaStackOverflow, FaQuestion } from 'react-icons/fa';
import { GoDeviceMobile } from "react-icons/go";

import jamieImg from "../../assets/images/JamieVesterfelt.PNG";

function ContactForm() {
    const [formState, setFormState] = useState({ firstName: '', lastName: '', phone: '', email: '', github: '', linkedin: '', stackOverflow: '', comments: '' });
    const { firstName, lastName, phone, email, github, linkedin, stackOverflow, comments } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    const formStyle = {
        width: "80%"
    };
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
        <section className="container" style={sectionStyle}>
            <div className="m-5 container-fluid">
                <div className="row g-0 justify-content-center">
                    <img src={ jamieImg } style={imgSize} className="profile-photo rounded-start" alt="...images" />
                    <div className="col-md-8 m-0 container">
                        <div className="card-body bg-secondary rounded-end" style={cardStyle}>
                            <h3 className="card-title text-center text-wrap bg-secondary text-light">Reach Out</h3>
                            <p className="card-text text-center text-wrap bg-secondary text-light">Leave your contact information and any questions or coments and I'll respond when I get a chance. Thank you!</p>
                        </div>
                    </div>          
                </div>
            </div>
            <form className="m-5 flex-row justify-content-around container-fluid" id="contact-form" onSubmit={handleSubmit} style={formStyle}>
                <div className="input-group mb-2">
                    <span className="input-group-text">First and Last Name</span>
                    <input type="text" aria-label="First name" name="firstName" className="form-control me-2" defaultValue={firstName} onBlur={handleChange}/>
                    <input type="text" aria-label="Last name" name="lastName" className="form-control" defaultValue={lastName} onBlur={handleChange}/>
                </div>
                <div className="input-group mb-2">
                    <span className="input-group-text"><GoDeviceMobile/></span>
                    <input type="text" aria-label="phone" name="phone" className="form-control" defaultValue={phone} onBlur={handleChange}/>
                </div>
                <div className="input-group mb-2">
                    <span className="input-group-text"><HiOutlineMailOpen/></span>
                    <input type="text" aria-label="email" name="email" className="form-control" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div className="input-group mb-2">
                    <span className="input-group-text"><FaGithub/></span>
                    <input type="text" aria-label="github" name="github" className="form-control" defaultValue={github} onBlur={handleChange}/>
                </div>
                <div className="input-group mb-2">
                    <span className="input-group-text"><FaLinkedin/></span>
                    <input type="text" aria-label="linkedin" name="linkedin" className="form-control" defaultValue={linkedin} onBlur={handleChange}/>
                </div>
                <div className="input-group mb-2">
                    <span className="input-group-text"><FaStackOverflow/></span>
                    <input type="text" aria-label="github" name="stackOverflow" className="form-control" defaultValue={stackOverflow} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div class="input-group mb-2">
                        <span class="input-group-text"><FaQuestion /></span>
                        <textarea class="form-control" aria-label="With textarea" name="comments" defaultValue={comments} onBlur={handleChange}></textarea>
                    </div>
                )}                
                <button className="btn btn-sm btn-outline-secondary mt-2" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;