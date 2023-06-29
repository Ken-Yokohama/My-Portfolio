import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { About, Contact, Home, Menu } from "../pages";
import { getPageVisitCount } from "../utils/api";
import { ProjectPage } from "../pages/project";

const Main = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => {
        setShowMenu((prevValue) => !prevValue);
    };

    const [pageVisits, setPageVisits] = useState(0);

    useEffect(() => {
        const getPageVisits = async () => {
            const count = await getPageVisitCount();
            setPageVisits(count);
        };
        getPageVisits();
    }, []);

    return (
        <div>
            <Navbar
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                toggleShowMenu={toggleShowMenu}
            />
            <Menu
                setShowMenu={setShowMenu}
                showMenu={showMenu}
                pageVisits={pageVisits}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project/:projectName" element={<ProjectPage />} />
            </Routes>
        </div>
    );
};

export default Main;
