import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';

const NavBar = ({ setSelectedContinent }) => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post('dj-rest-auth/logout/');
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

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
            <div>
                <NavLink
                    className={styles.DropdownItem}
                    to="/posts/continent/africa"
                    onClick={() => setSelectedContinent("AF")}
                >
                    Africa
                </NavLink>
                <NavLink
                    className={styles.DropdownItem}
                    to="/posts/continent/antartica"
                    onClick={() => setSelectedContinent("AN")}
                >
                    Antartica
                </NavLink>
                <NavLink
                    className={styles.DropdownItem}
                    to="/posts/continent/asia"
                    onClick={() => setSelectedContinent("AS")}
                >
                    Asia
                </NavLink>
                <NavLink
                    className={styles.DropdownItem}
                    to="/posts/continent/europe"
                    onClick={() => setSelectedContinent("EU")}
                >
                    Europe
                </NavLink>
                <NavLink
                    className={styles.DropdownItem}
                    to="/posts/continent/northamerica"
                    onClick={() => setSelectedContinent("NA")}
                >
                    North America
                </NavLink>
                <NavLink
                    className={styles.DropdownItem}
                    to="/posts/continent/oceania"
                    onClick={() => setSelectedContinent("OC")}
                >
                    Oceania
                </NavLink>
                <NavLink
                    className={styles.DropdownItem}
                    to="/posts/continent/southamerica"
                    onClick={() => setSelectedContinent("SA")}
                >
                    South America
                </NavLink>
            </div>
        </NavDropdown>
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