import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { NavbarProps } from "./interface";
import "./navbar.css";

const Navbar = ({ showMenu, setShowMenu, toggleShowMenu }: NavbarProps) => {
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
            className="nav-bar-container"
            sx={{
                background: showMenu ? "none" : scrolledDown ? "white" : "none",
                "@media(min-width: 800px)": {
                    background: "none",
                },
            }}
        >
            <Box className="nav-bar page-container">
                <a
                    className="home-link"
                    href="https://kenyokohama.com/"
                    onClick={(e) => {
                        if (!e.ctrlKey && !e.metaKey) {
                            e.preventDefault();
                        }
                    }}
                >
                    <motion.h3
                        whileHover={{ color: "#A9A9A9" }}
                        initial={{ color: "#000000" }}
                        transition={{ color: { duration: 0.2 } }}
                        onClick={() => {
                            navigate("/");
                            setShowMenu(false);
                            window.scrollTo(0, 0);
                        }}
                    >
                        <b>KEN YOKOHAMA</b>
                    </motion.h3>
                </a>
                <motion.div
                    className="menu"
                    // whileHover={{ color: "white" }}
                    whileHover={{ color: "#A9A9A9" }}
                    initial={{ color: "#000000" }}
                    transition={{ color: { duration: 0.2 } }}
                    onClick={toggleShowMenu}
                >
                    <h3>
                        <b>Menu</b>
                    </h3>
                    {!showMenu && <MenuIcon />}
                    {showMenu && <CloseIcon />}
                </motion.div>
            </Box>
        </Box>
    );
};

export default Navbar;
