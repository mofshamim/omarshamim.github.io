import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./views/home/Home";
import Education from "./views/education/Education";
import Experience from "./views/experience/Experience";
import Projects from "./views/projects/Projects";
import Contact from "./views/contact/Contact";

export default function Routing(propss) {
    return (
        <>
            <BrowserRouter basename="/">
                <Routes>
                    <Route path='/' element={<Home theme={propss.theme} setTheme={propss.setTheme} />} />
                    <Route path='/home' element={<Home theme={propss.theme} setTheme={propss.setTheme} />} />
                    <Route path='/education' element={<Education theme={propss.theme} setTheme={propss.setTheme} />} />
                    <Route path='/experience' element={<Experience theme={propss.theme} setTheme={propss.setTheme} />} />
                    <Route path='/projects' element={<Projects theme={propss.theme} setTheme={propss.setTheme} />} />
                    <Route path='/contact' element={<Contact theme={propss.theme} setTheme={propss.setTheme} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
