import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

function Menu({ setShowMenu, showMenu }) {
    const handleCloseMenu = () => {
        setShowMenu(false);
    };

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
                        onClick={handleCloseMenu}
                    >
                        <motion.h1
                            initial={{ x: "-40px", opacity: 0 }}
                            animate={
                                showMenu
                                    ? { x: "0", opacity: 1 }
                                    : { x: "-40px", opacity: 0 }
                            }
                            transition={
                                showMenu
                                    ? {
                                          x: { delay: 0.2 },
                                          opacity: { delay: 0.2 },
                                      }
                                    : {
                                          opacity: { delay: 0 },
                                          x: { delay: 0.3 },
                                      }
                            }
                        >
                            Home
                        </motion.h1>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "nav-menu-item-active" : "nav-menu-item"
                        }
                        onClick={handleCloseMenu}
                    >
                        <motion.h1
                            initial={{ x: "-40px", opacity: 0 }}
                            animate={
                                showMenu
                                    ? { x: "0", opacity: 1 }
                                    : { x: "-40px", opacity: 0 }
                            }
                            transition={
                                showMenu
                                    ? {
                                          x: { delay: 0.3 },
                                          opacity: { delay: 0.3 },
                                      }
                                    : {
                                          opacity: { delay: 0 },
                                          x: { delay: 0.3 },
                                      }
                            }
                        >
                            About Me
                        </motion.h1>
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "nav-menu-item-active" : "nav-menu-item"
                        }
                        onClick={handleCloseMenu}
                    >
                        <motion.h1
                            initial={{ x: "-40px", opacity: 0 }}
                            animate={
                                showMenu
                                    ? { x: "0", opacity: 1 }
                                    : { x: "-40px", opacity: 0 }
                            }
                            transition={
                                showMenu
                                    ? {
                                          x: { delay: 0.4 },
                                          opacity: { delay: 0.4 },
                                      }
                                    : {
                                          opacity: { delay: 0 },
                                          x: { delay: 0.3 },
                                      }
                            }
                        >
                            Contact Me
                        </motion.h1>
                    </NavLink>
                    <motion.h1
                        initial={{ x: "-40px", opacity: 0 }}
                        animate={
                            showMenu
                                ? { x: "0", opacity: 1 }
                                : { x: "-40px", opacity: 0 }
                        }
                        transition={
                            showMenu
                                ? { x: { delay: 0.5 }, opacity: { delay: 0.5 } }
                                : { opacity: { delay: 0 }, x: { delay: 0.3 } }
                        }
                        className="nav-menu-item"
                    >
                        Github
                    </motion.h1>
                    <motion.h1
                        initial={{ x: "-40px", opacity: 0 }}
                        animate={
                            showMenu
                                ? { x: "0", opacity: 1 }
                                : { x: "-40px", opacity: 0 }
                        }
                        transition={
                            showMenu
                                ? { x: { delay: 0.6 }, opacity: { delay: 0.6 } }
                                : { opacity: { delay: 0 }, x: { delay: 0.3 } }
                        }
                        className="nav-menu-item"
                    >
                        Resume
                    </motion.h1>
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
                    <motion.h3
                        initial={{ y: "40px", opacity: 0 }}
                        animate={
                            showMenu
                                ? { y: "0", opacity: 1 }
                                : { y: "40px", opacity: 0 }
                        }
                        transition={
                            showMenu
                                ? { y: { delay: 1 }, opacity: { delay: 1 } }
                                : { opacity: { delay: 0 }, y: { delay: 0.3 } }
                        }
                    >
                        My Portfolio
                    </motion.h3>
                    <motion.p
                        initial={{ y: "40px", opacity: 0 }}
                        animate={
                            showMenu
                                ? { y: "0", opacity: 1 }
                                : { y: "40px", opacity: 0 }
                        }
                        transition={
                            showMenu
                                ? { y: { delay: 1 }, opacity: { delay: 1 } }
                                : { opacity: { delay: 0 }, y: { delay: 0.3 } }
                        }
                    >
                        The passage experienced a surge in popularity during the
                        1960s when Letraset used it on their dry-transfer
                        sheets, and again during the 90s as desktop publishers
                        bundled the text with their software.
                    </motion.p>
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
                <motion.h3
                    initial={{ y: "40px", opacity: 0 }}
                    animate={
                        showMenu
                            ? { y: "0", opacity: 1 }
                            : { y: "40px", opacity: 0 }
                    }
                    transition={
                        showMenu
                            ? { y: { delay: 0.7 }, opacity: { delay: 0.7 } }
                            : { opacity: { delay: 0 }, y: { delay: 0.3 } }
                    }
                >
                    Quick Links:
                </motion.h3>
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
                    <motion.div
                        initial={{ y: "40px", opacity: 0 }}
                        animate={
                            showMenu
                                ? { y: "0", opacity: 1 }
                                : { y: "40px", opacity: 0 }
                        }
                        transition={
                            showMenu
                                ? { y: { delay: 0.8 }, opacity: { delay: 0.8 } }
                                : { opacity: { delay: 0 }, y: { delay: 0.3 } }
                        }
                    >
                        <p>Email:</p>
                        <p>
                            <b>kenlopezyokohama@gmail.com</b>
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ y: "40px", opacity: 0 }}
                        animate={
                            showMenu
                                ? { y: "0", opacity: 1 }
                                : { y: "40px", opacity: 0 }
                        }
                        transition={
                            showMenu
                                ? { y: { delay: 0.9 }, opacity: { delay: 0.9 } }
                                : { opacity: { delay: 0 }, y: { delay: 0.3 } }
                        }
                    >
                        <p>Contact No:</p>
                        <p style={{ fontFamily: "arial" }}>
                            <b>+63 917 578 7991</b>
                        </p>
                    </motion.div>
                </Box>
            </Box>
        </motion.div>
    );
}

export default Menu;
