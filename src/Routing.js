import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./views/home/Home";
import Portfolio from "./views/portfolio/Portfolio";
import Articles from "./views/articles/Articles";


export default function Routing(propss) {
    return (
        <>
            <BrowserRouter basename="/">
                <Routes>
                    <Route path='/' element={<Home theme={propss.theme} setTheme={propss.setTheme} />} />
                    <Route path='/home' element={<Home theme={propss.theme} setTheme={propss.setTheme} />} />
                    <Route path='/portfolio' element={<Portfolio theme={propss.theme} setTheme={propss.setTheme} />} />
                    <Route path='/articles' element={<Articles theme={propss.theme} setTheme={propss.setTheme} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
