import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "@mui/material/Tooltip";
import resumeFile from "../../files/ken_yokohama_resume.pdf";
import { MenuProps } from "./interface";
import "./menu.css";

const Menu = ({ setShowMenu, showMenu, pageVisits }: MenuProps) => {
    const handleCloseMenu = () => {
        setShowMenu(false);
        // window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); SMOOTH SCROLL
        window.scrollTo(0, 0);
    };

    return (
        <motion.div
            className="menu-page"
            initial={{ y: "-100vh" }}
            animate={{
                y: showMenu ? ["100vh", "0vh"] : [null, "-100vh"],
            }}
            transition={{ duration: 0.3 }}
        >
            <Box className="menu-body">
                <Box className="nav-container">
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
                        <Box className="nav-github">Github</Box>
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
                            <Box className="nav-resume">Resume</Box>
                        </motion.h1>
                    </a>
                </Box>
                <Box className="side-note-container">
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
                        <b>My Portfolio</b>
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
                        Thank you for viewing my portfolio
                        {pageVisits !== 0 && (
                            <span>
                                <strong style={{ fontFamily: "arial" }}>
                                    {" "}
                                    {pageVisits + 1}{" "}
                                </strong>
                                times
                            </span>
                        )}
                        . If you'd like to know more details on how I built this
                        project or if you are just curious to see my code, feel
                        free to check out my{" "}
                        <strong
                            style={{
                                borderBottom: "2px solid",
                            }}
                            className="nav-menu-item"
                            onClick={() => {
                                window.open(
                                    "https://github.com/Ken-Yokohama",
                                    "_blank"
                                );
                            }}
                        >
                            GitHub
                        </strong>
                        .
                        {/* This project was built using react and tools from the react-ecosystem namely material-ui, react-router-dom, framer-motion & axios. */}
                    </motion.p>
                </Box>
            </Box>
            <Box className="menu-footer">
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
                    <b>Quick Links:</b>
                </motion.h3>
                <Box className="quick-links">
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
};

export default Menu;
