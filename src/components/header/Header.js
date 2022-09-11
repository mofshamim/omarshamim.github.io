import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { style } from "glamor";
import "./Header.css";

function Header(props) {
    const theme = props.theme;

    function changeTheme() {
        if (theme.name === "light") {
            props.setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            props.setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }

    const icon = theme.name === "dark" ?
        <HiMoon
            strokeWidth={1}
            size={20}
            color={`${theme.moonColor}`}
        /> :
        <CgSun
            strokeWidth={1}
            size={20}
            color={theme.sunColor}
        />;


    let githubLink = theme.name === "light" ?
        style({
            color: 'rgba(0, 0, 0, 0.55) !important',
            '.active': {
                color: 'rgba(0, 0, 0, 0.55) !important'
            }
        }) :
        style({
            color: 'rgba(255, 255, 255, 0.55) !important',
            '.active': {
                color: 'rgba(255, 255, 255, 0.55) !important'
            }
        });


    return (
        <>
            <Navbar bg={theme.name} variant={theme.name}>
                <Container>
                    <Navbar.Brand>
                        <Nav.Link as={NavLink} to='/' >
                            <img alt="logo" src={require('../../assests/images/male_avatar.png')} className="logo-image" />
                            <span className="logo-name"> Omar Faruque Shamim</span>
                        </Nav.Link>
                    </Navbar.Brand>
                    <Nav className="me-auto" >
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to='/Portfolio'>Portfolio</Nav.Link>
                        <Nav.Link as={NavLink} to='/articles'>Articles</Nav.Link>
                        <Nav.Link href='https://github.com/omarshamim' className={`${githubLink}`} target="_blank">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </Nav.Link>
                        <span onClick={changeTheme} className="theme-icon">
                            {icon}
                        </span>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );

}
export default Header;
