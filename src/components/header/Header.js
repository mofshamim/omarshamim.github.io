import React, { useState } from "react";
import "./Header.css";
import Fade from "../../react-reveal/in-and-out/Fade";
import { NavLink, Link } from "react-router-dom";
import { greeting } from "../../data/index";

import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";


const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
};


function Header(props) {

    const theme = props.theme;
    const [currTheme, setCurrTheme] = useState(props.theme);

    function changeTheme() {
        if (props.theme.name === "light") {
            props.setTheme("dark");
            localStorage.setItem("theme", "dark");
            setCurrTheme("dark");
        } else {
            props.setTheme("light");
            localStorage.setItem("theme", "light");
            setCurrTheme("light");
        }
    }

    const icon =
        props.theme.name === "dark" ? (
            <HiMoon
                strokeWidth={1}
                size={20}
                color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
            />
        ) : (
            <CgSun
                strokeWidth={1}
                size={20}
                color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
            />
        );

    return (
        <Fade top duration={1000} distance="20px">
            <div>
                <header className="header">
                    <NavLink to="/" className="logo">
                        <span style={{ color: theme.text }}> &lt;</span>
                        <span className="logo-name" style={{ color: theme.text }}>
                            {greeting.logo_name}
                        </span>
                        <span style={{ color: theme.text }}>/&gt;</span>
                    </NavLink>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu" style={{ backgroundColor: theme.body }}>
                        <li>
                            <NavLink
                                to="/home"
                                style={{ color: theme.text, fontWeight: "bold" }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/education"
                                style={{ color: theme.text, fontWeight: "bold" }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Education
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/experience"
                                style={{ color: theme.text, fontWeight: "bold" }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                style={{ color: theme.text, fontWeight: "bold" }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/opensource"
                                style={{ color: theme.text, fontWeight: "bold" }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Open Source
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                style={{ color: theme.text, fontWeight: "bold" }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Contact Me
                            </NavLink>
                        </li>
                        <li>
                            <button
                                style={{ marginTop: 15 }}
                                onClick={changeTheme}>
                                {icon}
                            </button>
                        </li>

                    </ul>
                </header>
            </div>
        </Fade>
    );

}
export default Header;
