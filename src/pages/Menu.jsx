import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

function Menu({ setShowMenu, showMenu }) {
    return (
        <motion.div
            initial={{ y: "-100vh" }}
            // animate={{ y: showMenu ? "0" : ["-100vh"] }}
            animate={{
                y: showMenu ? ["100vh", "0vh"] : [null, "-100vh"],
            }}
            transition={{ duration: 0.3 }}
            style={{
                position: "fixed",
                display: "flex",
                backgroundColor: "orange",
                flexDirection: "column",
                justifyContent: "center",
                height: "100vh",
                width: "100vw",
                gap: "3rem",
            }}
        >
            <Box
                sx={{
                    paddingLeft: "6vw",
                    "@media(max-width: 700px)": {
                        paddingTop: "90px",
                    },
                    "@media(min-width: 700px)": {
                        display: "flex",
                        justifyContent: "space-between",

                        paddingRight: "7vw",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        padding: "1rem 1rem 1rem 0",
                        fontSize: "1.5rem",
                        // "@media (min-width: 600px)": {
                        //     marginLeft: "6rem",
                        //     marginRight: "6rem",
                        //     backgroundColor: "blue",
                        // },
                    }}
                >
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-menu-item-active" : "nav-menu-item"
                        }
                    >
                        <h1>Home</h1>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "nav-menu-item-active" : "nav-menu-item"
                        }
                    >
                        <h1>About Me</h1>
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "nav-menu-item-active" : "nav-menu-item"
                        }
                    >
                        <h1>Contact Me</h1>
                    </NavLink>
                    <h1 className="nav-menu-item">Github</h1>
                    <h1 className="nav-menu-item">Resume</h1>
                </Box>
                <Box
                    sx={{
                        display: "none",
                        "@media(min-width: 800px)": {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "400px",
                        },
                    }}
                >
                    <h3>Our Promise</h3>
                    <p>
                        The passage experienced a surge in popularity during the
                        1960s when Letraset used it on their dry-transfer
                        sheets, and again during the 90s as desktop publishers
                        bundled the text with their software.
                    </p>
                </Box>
            </Box>
            <Box
                sx={{
                    padding: "1rem",
                    paddingLeft: "6vw",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    "@media(min-width: 700px)": {
                        display: "flex",
                        flexDirection: "row",
                        gap: "2rem",
                    },
                }}
            >
                <h3>Quick Links:</h3>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        "@media(min-width: 700px)": {
                            display: "flex",
                            flexDirection: "row",
                            gap: "2rem",
                        },
                    }}
                >
                    <div>
                        <p>Email:</p>
                        <p>
                            <b>kenlopezyokohama@gmail.com</b>
                        </p>
                    </div>
                    <div>
                        <p>Contact No:</p>
                        <p style={{ fontFamily: "arial" }}>
                            <b>+63 917 578 7991</b>
                        </p>
                    </div>
                </Box>
            </Box>
        </motion.div>
    );
}

export default Menu;
