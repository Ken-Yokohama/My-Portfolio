import { Box } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

function Contact(props) {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                className="padding-for-nav"
                sx={{
                    flex: "1",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    "@media(max-width: 650px)": {
                        gridTemplateColumns: "1fr",
                    },
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "#83A8C5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box>
                        <Box
                            component="img"
                            src="/My-Portfolio/images/contact-page/contact-img1.jpg"
                            alt="contact-page-img"
                            sx={{
                                maxHeight: "calc(100vh - 5.6rem)",
                                maxWidth: "1800px",
                                width: "100%",
                                aspectRatio: "1/1",
                                objectFit: "cover",
                                "@media (max-width: 650px)": {
                                    aspectRatio: "auto",
                                    height: "100vh",
                                },
                            }}
                        />
                    </Box>
                </Box>
                {/* Contact Forms */}
                <Box
                    className="contact-me-page"
                    sx={{
                        padding: "3rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        "@media (max-width: 650px)": {
                            marginTop: "calc(-100vh + 4rem)",
                        },
                    }}
                >
                    <div>
                        <h1>Socials</h1>
                        <Box
                            sx={{
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
                                    fullWidth
                                    variant="contained"
                                    startIcon={<LinkedInIcon />}
                                    onClick={() => {
                                        window.open(
                                            "https://ph.linkedin.com/in/ken-yokohama-bba021179",
                                            "_blank"
                                        );
                                    }}
                                >
                                    LinkedIn
                                </Button>
                            </motion.div>{" "}
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
                                    onClick={() => {
                                        window.open(
                                            "https://github.com/Ken-Yokohama",
                                            "_blank"
                                        );
                                    }}
                                >
                                    Github
                                </Button>
                            </motion.div>
                        </Box>
                    </div>
                    <div>
                        <h1>Get In Touch</h1>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                                "@media(min-width: 1020px)": {
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "2rem",
                                },
                            }}
                        >
                            <div>
                                <p>Email:</p>
                                <CopyToClipboard text="kenlopezyokohama@gmail.com">
                                    <Tooltip title="Copy Email to Clipboard">
                                        <motion.p
                                            whileTap={{
                                                scale: 0.9,
                                            }}
                                            style={{
                                                cursor: "pointer",
                                            }}
                                        >
                                            <b>kenlopezyokohama@gmail.com</b>
                                        </motion.p>
                                    </Tooltip>
                                </CopyToClipboard>
                            </div>
                            <div>
                                <p>Contact No:</p>
                                <CopyToClipboard text="+639175787991">
                                    <Tooltip title="Copy Phone Number to Clipboard">
                                        <motion.p
                                            whileTap={{
                                                scale: 0.9,
                                            }}
                                            style={{
                                                fontFamily: "arial",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <b>+63 917 578 7991</b>
                                        </motion.p>
                                    </Tooltip>
                                </CopyToClipboard>
                            </div>
                        </Box>
                    </div>
                    <div style={{ maxWidth: "550px" }}>
                        <h1>Contact Form</h1>
                        <form
                            action="https://formspree.io/f/xgedzljj"
                            method="POST"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
                            <Box
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                }}
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Full Name"
                                    variant="outlined"
                                    type="text"
                                    name="Name"
                                    size="small"
                                    required
                                    fullWidth
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    name="Email"
                                    size="small"
                                    required
                                    fullWidth
                                />
                            </Box>
                            <TextField
                                id="outlined-basic"
                                label="Message"
                                variant="outlined"
                                type="text"
                                name="Message"
                                size="small"
                                required
                                fullWidth
                                multiline
                            />

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button
                                    type="submit"
                                    sx={{
                                        backgroundColor: "#FFA500",
                                        ":hover": {
                                            backgroundColor: "#e39505",
                                        },
                                    }}
                                    fullWidth
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                >
                                    Submit
                                </Button>
                            </motion.div>
                        </form>
                    </div>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;
