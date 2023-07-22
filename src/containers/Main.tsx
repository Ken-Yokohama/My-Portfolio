import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { About, Contact, ErrorPage, Home, Menu, ProjectPage } from "../pages";

const Main = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => {
        setShowMenu((prevValue) => !prevValue);
    };

    return (
        <div>
            <Navbar
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                toggleShowMenu={toggleShowMenu}
            />
            <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project/:projectName" element={<ProjectPage />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
};

export default Main;
