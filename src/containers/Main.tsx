import { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/Contact"));
const ProjectPage = lazy(() => import("../pages/project/project-page"));
const Menu = lazy(() => import("../pages/menu"));
const ErrorPage = lazy(() => import("../pages/404"));

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
            <Suspense>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/project/:projectName"
                        element={<ProjectPage />}
                    />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default Main;
