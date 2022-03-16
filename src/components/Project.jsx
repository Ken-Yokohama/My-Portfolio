import { Box } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

function Project({ backgroundImg }) {
    const [mouseHovering, setMouseHovering] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                setMouseHovering(true);
            }}
            onMouseLeave={() => {
                setMouseHovering(false);
            }}
            style={{
                // handle Background Image
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
            }}
        >
            <div
                style={{
                    backgroundColor: mouseHovering
                        ? "rgba(35,44,48,0.95)"
                        : "rgba(35,44,48,0)",
                    transition: "background 0.3s",
                    aspectRatio: "1/1.25",
                    padding: "2rem",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                }}
            >
                <motion.h5
                    initial={{ y: "40px", opacity: 0 }}
                    animate={
                        mouseHovering
                            ? { y: "0", opacity: 1 }
                            : { y: "40px", opacity: 0 }
                    }
                    transition={
                        mouseHovering
                            ? { y: { delay: 0.0 }, opacity: { delay: 0.0 } }
                            : { opacity: { delay: 0 }, y: { delay: 0.0 } }
                    }
                >
                    2021 - Aug
                </motion.h5>
                {/* Title & Desc */}
                <motion.div
                    initial={{ y: "40px", opacity: 0 }}
                    animate={
                        mouseHovering
                            ? { y: "0", opacity: 1 }
                            : { y: "40px", opacity: 0 }
                    }
                    transition={
                        mouseHovering
                            ? { y: { delay: 0.1 }, opacity: { delay: 0.1 } }
                            : { opacity: { delay: 0 }, y: { delay: 0.0 } }
                    }
                >
                    <h1>Project Name 1</h1>
                    <p>
                        A simple site that uses... Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. A, ipsam consectetur
                        ratione numquam ipsum praesentium aliquam deserunt
                        perferendis illo officia!
                    </p>
                </motion.div>
                {/* Technologies */}
                <motion.div
                    initial={{ y: "40px", opacity: 0 }}
                    animate={
                        mouseHovering
                            ? { y: "0", opacity: 1 }
                            : { y: "40px", opacity: 0 }
                    }
                    transition={
                        mouseHovering
                            ? { y: { delay: 0.2 }, opacity: { delay: 0.2 } }
                            : { opacity: { delay: 0 }, y: { delay: 0.0 } }
                    }
                >
                    <h2>Technologies Used</h2>
                    <h3
                        style={{
                            fontWeight: "100",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                        }}
                    >
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>FIREBASE</li>
                    </h3>
                </motion.div>
                {/* Button Option 1 */}
                <motion.div
                    initial={{ y: "40px", opacity: 0 }}
                    animate={
                        mouseHovering
                            ? { y: "0", opacity: 1 }
                            : { y: "40px", opacity: 0 }
                    }
                    transition={
                        mouseHovering
                            ? { y: { delay: 0.3 }, opacity: { delay: 0.3 } }
                            : { opacity: { delay: 0 }, y: { delay: 0.0 } }
                    }
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button
                            sx={{
                                backgroundColor: "#FFA500",
                                ":hover": {
                                    backgroundColor: "#e39505",
                                },
                            }}
                            variant="contained"
                            startIcon={<LanguageIcon />}
                        >
                            Live Site
                        </Button>
                    </motion.div>{" "}
                    <h5>or</h5>{" "}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button
                            sx={{
                                color: "#FFA500",
                                borderColor: "#FFA500",
                                ":hover": {
                                    borderColor: "#e39505",
                                    color: "#e39505",
                                },
                            }}
                            variant="outlined"
                            endIcon={<GitHubIcon />}
                        >
                            Github Repo
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Project;
