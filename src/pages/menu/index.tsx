import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "@mui/material/Tooltip";
import resumeFile from "../../files/ken_yokohama_resume.pdf";
import { MenuProps } from "./interface";

function Menu({ setShowMenu, showMenu, pageVisits }: MenuProps) {
    const handleCloseMenu = () => {
        setShowMenu(false);
        // window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); SMOOTH SCROLL
        window.scrollTo(0, 0);
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
                zIndex: "3",
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
                        onClick={() => {
                            window.open(
                                "https://github.com/Ken-Yokohama",
                                "_blank"
                            );
                        }}
                    >
                        <Box
                            sx={{
                                "@media(max-height: 500px)": {
                                    display: "none",
                                },
                            }}
                        >
                            Github
                        </Box>
                    </motion.h1>
                    <a
                        href={resumeFile}
                        style={{ textDecoration: "none" }}
                        download="ken_yokohama_resume"
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
                                          x: { delay: 0.6 },
                                          opacity: { delay: 0.6 },
                                      }
                                    : {
                                          opacity: { delay: 0 },
                                          x: { delay: 0.3 },
                                      }
                            }
                            className="nav-menu-item"
                        >
                            <Box
                                sx={{
                                    "@media(max-height: 500px)": {
                                        display: "none",
                                    },
                                }}
                            >
                                Resume
                            </Box>
                        </motion.h1>
                    </a>
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
                        Thank you for viewing my portfolio{" "}
                        <strong style={{ fontFamily: "arial" }}>
                            {pageVisits}
                        </strong>{" "}
                        times. If you'd like to know more details on how I built
                        this project or if you are just curious to see my source
                        code, feel free to check out my GitHub.
                        {/* This project was built using react and tools from the react-ecosystem namely material-ui, react-router-dom, framer-motion & axios. */}
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
                    "@media(max-height: 600px)": {
                        display: "none",
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
                        <CopyToClipboard text="kenlopezyokohama@gmail.com">
                            <Tooltip title="Copy Email to Clipboard">
                                <motion.p
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{ cursor: "pointer" }}
                                >
                                    <b>kenlopezyokohama@gmail.com</b>
                                </motion.p>
                            </Tooltip>
                        </CopyToClipboard>
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
                        <CopyToClipboard text="+639175787991">
                            <Tooltip title="Copy Phone Number to Clipboard">
                                <motion.p
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{
                                        fontFamily: "arial",
                                        cursor: "pointer",
                                    }}
                                >
                                    <b>+63 917 578 7991</b>
                                </motion.p>
                            </Tooltip>
                        </CopyToClipboard>
                    </motion.div>
                </Box>
            </Box>
        </motion.div>
    );
}

export default Menu;
