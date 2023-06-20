import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Navbar({ showMenu, setShowMenu, toggleShowMenu }: any) {
    const navigate = useNavigate();

    const [scrolledDown, setScrolledDown] = useState(false);

    const handleScrolledDown = () => {
        if (window.scrollY == 0) {
            setScrolledDown(false);
        } else {
            setScrolledDown(true);
        }
    };

    useEffect(() => {
        const unsub = window.addEventListener("scroll", handleScrolledDown);
        return unsub;
    }, []);

    return (
        <Box
            sx={{
                background: showMenu ? "none" : scrolledDown ? "white" : "none",
                position: "fixed",
                width: "100%",
                zIndex: "10",
                transition: "background 1s",
                "@media(min-width: 800px)": {
                    background: "none",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                    "@media (min-width:700px)": {
                        padding: "2rem",
                    },
                }}
            >
                <motion.h3
                    whileTap={{ color: "#A9A9A9" }}
                    initial={{ color: "#000000" }}
                    transition={{ color: { duration: 0.3 } }}
                    onClick={() => {
                        navigate("/");
                        setShowMenu(false);
                        window.scrollTo(0, 0);
                    }}
                    style={{
                        cursor: "pointer",
                    }}
                >
                    KEN YOKOHAMA
                </motion.h3>
                <motion.div
                    // whileHover={{ color: "white" }}
                    whileTap={{ color: "#A9A9A9" }}
                    initial={{ color: "#000000" }}
                    transition={{ color: { duration: 0.3 } }}
                    onClick={toggleShowMenu}
                    style={{
                        cursor: "pointer",
                        display: "flex",
                        gap: "0.25rem",
                    }}
                >
                    <h3>Menu</h3>
                    {!showMenu && <MenuIcon />}
                    {showMenu && <CloseIcon />}
                </motion.div>
            </Box>
        </Box>
    );
}

export default Navbar;
