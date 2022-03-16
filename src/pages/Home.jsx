import { Box } from "@mui/material";
import React, { useState } from "react";
import Project from "../components/Project";

function Home(props) {
    return (
        <div className="page-container">
            <Box
                sx={{
                    display: "flex",
                    alignItems: " center",
                    justifyContent: "center",
                    height: "100vh",
                    padding: "1rem",
                    flexDirection: "row",
                    "@media (max-width: 900px)": {
                        minHeight: "100%",
                        padding: "0",
                        gap: "1rem",
                        // Padding for Nav
                        // paddingTop: "5.6rem",
                    },
                    "@media (max-width: 650px)": {
                        flexDirection: "column-reverse",
                        minHeight: "100%",
                        padding: "0rem",
                    },
                }}
            >
                <Box
                    className="title"
                    sx={{
                        zIndex: "1",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        padding: "1rem",
                        "@media (max-width: 900px)": {
                            width: "900px",
                            marginRight: "-100px",
                        },
                        "@media (max-width: 650px)": {
                            width: "auto",
                            marginTop: "-100px",
                            marginRight: "0",
                        },
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.25rem",
                    }}
                >
                    <h5>KEN YOKOHAMA</h5>
                    <h1>FULL STACK DEVELOPER</h1>
                    <h3 style={{ maxWidth: "600px" }}>
                        Hello! I'm a <strong>Web Developer</strong> and licensed
                        Civil Engineer with a passion for solving problems,
                        learning new things and turning ideas into reality with
                        the use of code.
                    </h3>
                    <Box
                        component="h4"
                        sx={{
                            marginTop: "1rem",
                            fontWeight: "100",
                            "@media(max-width: 510px)": {
                                marginTop: "0.5rem",
                                fontSize: "clamp(0.5rem, 3vw, 1rem)",
                            },
                        }}
                    >
                        <Box
                            component="strong"
                            sx={{
                                transition: "border 0.5s ease",
                                cursor: "pointer",
                                border: "2px solid transparent",
                                ":hover": {
                                    borderBottom: "2px solid",
                                },
                            }}
                        >
                            View Projects
                        </Box>{" "}
                        or{" "}
                        <Box
                            component="strong"
                            sx={{
                                transition: "border 0.5s ease",
                                cursor: "pointer",
                                border: "2px solid transparent",
                                ":hover": {
                                    borderBottom: "2px solid",
                                },
                            }}
                        >
                            About Me
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "300px",
                        "@media(max-width: 900px)": {
                            width: "100%",
                        },
                    }}
                >
                    <img
                        src="/images/profile-img.jpg"
                        alt=""
                        className="profile-img"
                    />
                </Box>
            </Box>
            <h5>PROJECTS AND SHOWCASE</h5>
            <h1>Selected Projects</h1>
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    );
}

export default Home;
