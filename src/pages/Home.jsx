import { Box } from "@mui/material";
import React, { useState } from "react";

function Home(props) {
    return (
        <div className="page-container">
            <Box
                sx={{
                    display: "flex",
                    alignItems: " center",
                    justifyContent: "center",
                    minHeight: "80vh",
                    padding: "1rem",
                    flexDirection: "row",
                    "@media (max-width: 900px)": {
                        minHeight: "100%",
                        padding: "0",
                        gap: "1rem",
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
                            padding: "0rem",
                        },
                        "@media (max-width: 650px)": {
                            width: "auto",
                            marginTop: "-100px",
                            padding: "1rem",
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
                    <h4 style={{ marginTop: "1rem", fontWeight: "100" }}>
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
                    </h4>
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
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
        </div>
    );
}

export default Home;
