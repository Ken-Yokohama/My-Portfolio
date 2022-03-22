import { Box } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "@mui/material/Tooltip";

function Contact(props) {
    const [email, setEmail] = useState("kenlopezyokohama@gmail.com");
    const [contactNo, setContactNo] = useState("+63 917 578 7991");

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
                    <Box
                        sx={{
                            "@media(min-width: 1300px)": {
                                width: "400px",
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/contact-page/contact-img1.jpg"
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

                        {/* <img
                            src="/images/contact-page/contact-img1.jpg"
                            alt="contact-page-img"
                            style={{
                                maxHeight: "calc(100vh - 5.6rem)",
                                maxWidth: "1800px",
                                width: "100%",
                                aspectRatio: "1/1",
                                objectFit: "cover",
                            }}
                        /> */}
                    </Box>
                </Box>
                {/* Contact Forms */}
                <Box
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
                                                scale:
                                                    email ==
                                                    "Copied to Clipboard!"
                                                        ? 1
                                                        : 0.9,
                                            }}
                                            style={{
                                                cursor:
                                                    email ==
                                                    "Copied to Clipboard!"
                                                        ? "auto"
                                                        : "pointer",
                                            }}
                                            onClick={() => {
                                                setEmail(
                                                    "Copied to Clipboard!"
                                                );
                                                setTimeout(() => {
                                                    setEmail(
                                                        "kenlopezyokohama@gmail.com"
                                                    );
                                                }, 3000);
                                            }}
                                        >
                                            <b>{email}</b>
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
                                                scale:
                                                    contactNo ==
                                                    "Copied to Clipboard!"
                                                        ? 1
                                                        : 0.9,
                                            }}
                                            style={{
                                                fontFamily: "arial",
                                                cursor:
                                                    contactNo ==
                                                    "Copied to Clipboard!"
                                                        ? "auto"
                                                        : "pointer",
                                            }}
                                            onClick={() => {
                                                setContactNo(
                                                    "Copied to Clipboard!"
                                                );
                                                setTimeout(() => {
                                                    setContactNo(
                                                        "+63 917 578 7991"
                                                    );
                                                }, 3000);
                                            }}
                                        >
                                            <b>{contactNo}</b>
                                        </motion.p>
                                    </Tooltip>
                                </CopyToClipboard>
                            </div>
                        </Box>
                    </div>
                    <div>
                        <h1>Contact Form</h1>
                        <form
                            action="https://formspree.io/f/xgedzljj"
                            method="POST"
                        >
                            <input
                                type="text"
                                name="Name"
                                placeholder="Full Name"
                                required
                            />
                            <br />
                            <input
                                type="email"
                                name="Email"
                                placeholder="Email"
                                required
                            />
                            <br />
                            <textarea
                                type="text"
                                name="Message"
                                placeholder="Message"
                                required
                            />
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;
