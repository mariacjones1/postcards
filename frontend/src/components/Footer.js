import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from "../styles/Footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Nav justify className={`${styles.Footer} fixed-bottom`}>
                <Nav.Item>
                    <Nav.Link
                        href="https://github.com/mariacjones1"
                        target="_blank"
                        className={styles.Padding}
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