import { Box } from "@mui/material";
import React, { useState } from "react";

function Footer() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#FFA500",
                padding: "3rem 3rem 0 3rem",
                gap: "2rem",
            }}
        >
            <div
                style={{
                    maxWidth: "1500px",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        "@media (max-width: 990px)": {
                            gridTemplateColumns: "1fr 1fr",
                        },
                        "@media (max-width: 700px)": {
                            gridTemplateColumns: "1fr",
                            gap: "1rem",
                        },
                    }}
                >
                    <Box
                        sx={{
                            "@media (max-width: 990px)": {
                                gridColumnStart: "span 3",
                                paddingBottom: "1rem",
                            },
                            "@media (max-width: 700px)": {
                                gridColumnStart: "span 1",
                                paddingBottom: "0",
                            },
                        }}
                    >
                        <h3>Contact Information</h3>
                        <Box
                            sx={{
                                "@media (max-width: 990px)": {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                },
                                "@media (max-width: 700px)": {
                                    gridTemplateColumns: "1fr",
                                },
                            }}
                        >
                            <p>
                                Email:{" "}
                                <strong>kenlopezyokohama@gmail.com</strong>
                            </p>
                            <p>
                                Phone Number: <strong>+63 917 578 7991</strong>
                            </p>
                        </Box>
                    </Box>

                    <Box>
                        <h3>Latest Projects:</h3>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                            }}
                        >
                            {/* Project 1 */}
                            <Box
                                sx={{
                                    cursor: "pointer",
                                    ":hover": {
                                        color: "white",
                                    },
                                }}
                                onClick={() => {
                                    window.open(
                                        "https://ken-yokohama.github.io/Twitter-Clone/",
                                        "_blank"
                                    );
                                }}
                            >
                                <p>Twitter Clone</p>
                            </Box>
                            {/* Project 2 */}
                            <Box
                                sx={{
                                    cursor: "pointer",
                                    ":hover": {
                                        color: "white",
                                    },
                                }}
                                onClick={() => {
                                    window.open(
                                        "https://kenterest.netlify.app/",
                                        "_blank"
                                    );
                                }}
                            >
                                <p>Kenterest</p>
                            </Box>
                            {/* Project 3 */}
                            <Box
                                sx={{
                                    cursor: "pointer",
                                    ":hover": {
                                        color: "white",
                                    },
                                }}
                                onClick={() => {
                                    window.open(
                                        "https://still-garden-96667.herokuapp.com/",
                                        "_blank"
                                    );
                                }}
                            >
                                <p>MailChimp API</p>
                            </Box>
                            {/* Project 4 */}
                            <Box
                                sx={{
                                    cursor: "pointer",
                                    ":hover": {
                                        color: "white",
                                    },
                                }}
                                onClick={() => {
                                    window.open(
                                        "https://to-do-list-using-mongodb-atlas.herokuapp.com/",
                                        "_blank"
                                    );
                                }}
                            >
                                <p>MongoDB To Do List</p>
                            </Box>
                        </Box>
                        {/* Projects.map function */}
                    </Box>
                    <Box>
                        <h3>Social Links</h3>
                        <Box
                            sx={{
                                cursor: "pointer",
                                ":hover": {
                                    color: "white",
                                },
                            }}
                            onClick={() => {
                                window.open(
                                    "https://ph.linkedin.com/in/ken-yokohama-bba021179",
                                    "_blank"
                                );
                            }}
                        >
                            <p>LinkedIn</p>
                        </Box>
                        <Box
                            sx={{
                                cursor: "pointer",
                                ":hover": {
                                    color: "white",
                                },
                            }}
                            onClick={() => {
                                window.open(
                                    "https://github.com/Ken-Yokohama",
                                    "_blank"
                                );
                            }}
                        >
                            <p>Github</p>
                        </Box>
                    </Box>
                </Box>
            </div>
            <h5 style={{ padding: "1rem" }}>Ⓒ Ken Yokohama 2023</h5>
        </div>
    );
}

export default Footer;
