import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { removeTokenTimestamp } from '../utils/utils';

const NavBar = ({ setSelectedContinent }) => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post('dj-rest-auth/logout/');
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            // console.log(err);
        }
    };

    useEffect(() => {
        const storedContinent = localStorage.getItem('selectedContinent');
        if (storedContinent) {
            setSelectedContinent(storedContinent);
        }

        return () => {
            localStorage.removeItem('selectedContinent');
        };
    }, [setSelectedContinent]);

    const handleContinentClick = (continent) => {
        setSelectedContinent(continent);
        localStorage.setItem('selectedContinent', continent);
    };

    const continentLinks = (
        <div>
            <Dropdown.Item className={styles.DropdownItem}>
                <NavLink
                    as="div"
                    className={styles.DropdownLink}
                    to="/posts/continent/africa"
                    onClick={() => handleContinentClick("AF")}
                >
                    Africa
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className={styles.DropdownItem}>
                <NavLink
                    as="div"
                    className={styles.DropdownLink}
                    to="/posts/continent/antarctica"
                    onClick={() => handleContinentClick("AN")}
                >
                    Antartica
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className={styles.DropdownItem}>
                <NavLink
                    as="div"
                    className={styles.DropdownLink}
                    to="/posts/continent/asia"
                    onClick={() => handleContinentClick("AS")}
                >
                    Asia
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className={styles.DropdownItem}>
                <NavLink
                    as="div"
                    className={styles.DropdownLink}
                    to="/posts/continent/europe"
                    onClick={() => handleContinentClick("EU")}
                >
                    Europe
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className={styles.DropdownItem}>
                <NavLink
                    as="div"
                    className={styles.DropdownLink}
                    to="/posts/continent/northamerica"
                    onClick={() => handleContinentClick("NA")}
                >
                    North America
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className={styles.DropdownItem}>
                <NavLink
                    as="div"
                    className={styles.DropdownLink}
                    to="/posts/continent/oceania"
                    onClick={() => handleContinentClick("OC")}
                >
                    Oceania
                </NavLink>
            </Dropdown.Item>
            <Dropdown.Item className={styles.DropdownItem}>
                <NavLink
                    as="div"
                    className={styles.DropdownLink}
                    to="/posts/continent/southamerica"
                    onClick={() => handleContinentClick("SA")}
                >
                    South America
                </NavLink>
            </Dropdown.Item>
        </div>
    );

    const continentDropdown = !expanded ? (
        <NavDropdown
            className={styles.NavLink}
            activeClassName={styles.Active}
            title={
                <span id="dropdown">
                    <i class="fa-solid fa-earth-americas"></i>
                    Continents
                </span>
            }
            id={styles.Dropdown}
        >
            {continentLinks}
        </NavDropdown>
    ) : (
        <NavDropdown
            className={styles.NavLink}
            title={
                <span id="dropdown">
                    <i class="fa-solid fa-earth-americas"></i>
                    Continents
                </span>
            }
            id={styles.Dropdown}
            show={expanded}
        >
            {continentLinks}
        </NavDropdown>
    );

    const newPostcardIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
        >
            <i className="fas fa-plus-square"></i>New postcard
        </NavLink>
    );
    const loggedInIcons = <>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/feed"
        >
            <i className="fas fa-stream"></i>Feed
        </NavLink>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/liked"
        >
            <i className="fas fa-heart"></i>Liked
        </NavLink>
        {continentDropdown}
        <NavLink
            className={styles.NavLink}
            to="/"
            onClick={handleSignOut}
        >
            <i className="fas fa-sign-out-alt"></i>Sign out
        </NavLink>
        <NavLink
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <Avatar src={currentUser?.profile_image} text={currentUser?.username} height={40} />
        </NavLink>
    </>;
    const loggedOutIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signin"
            >
                <i className="fas fa-sign-in-alt"></i>Sign in
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signup"
            >
                <i className="fas fa-user-plus"></i>Sign up
            </NavLink>
        </>
    );

    return (
        <Navbar expanded={expanded} className={styles.NavBar} expand="lg" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="45" />
                    </Navbar.Brand>
                </NavLink>
                {currentUser && newPostcardIcon}
                <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-right">
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/"
                        >
                            <i className="fas fa-home"></i>Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;