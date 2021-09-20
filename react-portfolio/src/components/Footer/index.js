import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import {BiCopyright} from 'react-icons/bi'

function Footer() {

    return (
        <div className="container bg-dark w-100 col-12 mb-0">
            <footer className=" footer mt-auto bg-dark text-light d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top w-100">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                       
                    </a>
                    <span className="text-muted"><BiCopyright/> Jamie Vesterfelt 2021</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a class="text-muted" href="https://github.com/jvesterfelt"><FaGithub/></a>
                    </li>
                    <li className="ms-3">
                        <a class="text-muted" href="https://www.linkedin.com/in/jamie-vesterfelt"><FaLinkedin/></a>
                    </li>
                    <li className="ms-3">
                        <a class="text-muted" href="https://stackexchange.com/users/21095618/jvesterfelt"><FaStackOverflow/></a>
                    </li>
                </ul>
            </footer>
        </div>
    )
};

export default Footer;