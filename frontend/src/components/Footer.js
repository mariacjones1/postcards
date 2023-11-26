import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Nav justify fixed="bottom">
                <Nav.Item>
                    <Nav.Link
                        href="https://github.com/mariacjones1"
                        target="_blank"
                    >
                        GitHub
                    </Nav.Link>
                </Nav.Item >
                <Nav.Item>
                    &copy; {currentYear} mariacjones1
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/contact">Contact us</NavLink>
                </Nav.Item>
            </Nav >
        </>
    );
};

export default Footer;