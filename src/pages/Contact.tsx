import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { animateUpProps } from "../utils/animation";

const Contact = () => {
    return (
        <Box
            className="contact-me-page"
            sx={{
                height: "100svh",
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
                    "@media(max-width: 700px)": {
                        maxHeight: "calc(100svh - 3.6rem)",
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
                        "@media(max-width: 700px)": {
                            maxHeight: "calc(100svh - 3.6rem)",
                        },
                    }}
                >
                    <div>
                        <Box
                            component="img"
                            src="/images/contact-page/contact-img1.jpg"
                            alt="contact-page-img"
                            sx={{
                                display: "block",
                                height: "calc(100vh - 5.6rem)",
                                minHeight: "550px",
                                maxWidth: "1800px",
                                width: "100%",
                                // aspectRatio: "1/1",
                                objectFit: "cover",
                                "@media (max-width: 700px)": {
                                    aspectRatio: "auto",
                                    height: "calc(100svh - 3.6rem)",
                                    minHeight: "0px",
                                },
                            }}
                        />
                    </div>
                </Box>
                {/* Contact Forms */}
                <Box
                    className="contact-forms"
                    sx={{
                        padding: "3rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        "@media (max-width: 700px)": {
                            marginTop: "calc(-100svh + 3.6rem)",
                        },
                    }}
                >
                    <div>
                        <motion.h1 {...animateUpProps(true, 0.3)}>
                            Socials
                        </motion.h1>
                        <motion.div
                            {...animateUpProps(true, 0.4)}
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
                        </motion.div>
                    </div>
                    <div>
                        <motion.h1 {...animateUpProps(true, 0.5)}>
                            Get In Touch
                        </motion.h1>
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
                            <motion.div {...animateUpProps(true, 0.6)}>
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
                            </motion.div>
                            <motion.div {...animateUpProps(true, 0.7)}>
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
                            </motion.div>
                        </Box>
                    </div>
                    <div style={{ maxWidth: "550px" }}>
                        <motion.h1 {...animateUpProps(true, 0.8)}>
                            Contact Form
                        </motion.h1>
                        <form
                            action="https://formspree.io/f/xgedzljj"
                            method="POST"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
                            <motion.div
                                {...animateUpProps(true, 0.9)}
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
                            </motion.div>
                            <motion.div {...animateUpProps(true, 1)}>
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
                            </motion.div>

                            <motion.div {...animateUpProps(true, 1.1)}>
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
                            </motion.div>
                        </form>
                    </div>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
