import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../components";
import { About, Contact, Home, Menu } from "../pages";

function Main() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => {
        setShowMenu((prevValue) => !prevValue);
    };

    const [pageVisits, setPageVisits] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const getIp = await axios.get("https://api.db-ip.com/v2/free/self");
            const getPageVisitCount = await axios.get(
                "https://api.countapi.xyz/hit/kenyokohama/" +
                    getIp.data.ipAddress
            );
            setPageVisits(getPageVisitCount.data.value);
        };
        fetchData();
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
            </Routes>
        </div>
    );
}

export default Main;
