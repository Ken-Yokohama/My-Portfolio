import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { About, Contact, Home, Menu } from "../pages";

function Main(props) {
    const [showMenu, setShowMenu] = useState("false");

    const toggleShowMenu = () => {
        setShowMenu((prevValue) => !prevValue);
    };

    return (
        <div>
            <Navbar />
            <Menu />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default Main;
