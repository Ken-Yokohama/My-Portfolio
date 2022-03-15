import { Box } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { About, Contact, Home, Menu } from "../pages";

function Main(props) {
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
            <Box
                sx={{
                    paddingTop: "3.6rem",
                    "@media(min-width: 700px)": {
                        paddingTop: "5.6rem",
                    },
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Box>
        </div>
    );
}

export default Main;
