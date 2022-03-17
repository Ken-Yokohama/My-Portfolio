import { Box } from "@mui/material";
import React, { useState } from "react";

function Contact(props) {
    // className="padding-for-nav"
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
                        <img
                            src="/images/contact-page/contact-img1.jpg"
                            alt="contact-page-img"
                            style={{
                                maxHeight: "calc(100vh - 5.6rem)",
                                maxWidth: "1800px",
                                width: "100%",
                                aspectRatio: "1/1",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        padding: "3rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}
                >
                    <div>
                        <h1>Socials</h1>
                        <button>Linked In</button>
                        <button>Github</button>
                    </div>
                    <div>
                        <h1>Get In Touch</h1>
                        <button>Email</button>
                        <button>Contact</button>
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
