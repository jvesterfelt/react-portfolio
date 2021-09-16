import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { HiOutlineMailOpen } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaStackOverflow, FaQuestion } from 'react-icons/fa';
import { GoDeviceMobile } from "react-icons/go";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
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
        width: "65%"
    };

    return (
        <section className="container m-5">
            <form className="m-5 flex-row justify-content-around" id="contact-form" onSubmit={handleSubmit} style={formStyle}>
                <div className="card mb-3">
                    {/* <img src="..." className="bg-light card-img-top" alt="..." /> */}
                    <div className="card-body bg-secondary">
                        <h5 className="card-title text-center text-light">Contact Me</h5>
                        <p className="card-text text-light text-center text-wrap">If you'd like to get in contact, please leave me your contact information and any questions/comments that you have and I'll respond when I get a chance.
                        </p>
                    </div>
                </div>
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