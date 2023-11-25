import React from 'react'
import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Projects from "../pages/projects/Projects"
import Clients from "../pages/clients/Clients"
import Partners from "../pages/partners/Partners"
import Future from "../pages/future/Future"
import Contact from "../pages/contact/Contact"

function AnimatedRoutes() {

    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/retro-memories/" element={<Home props={{delay:5}}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/future" element={<Future />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
