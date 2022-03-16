import { Box } from "@mui/material";
import React, { useState } from "react";

function Home(props) {
    return (
        <div className="page-container">
            Home
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
                        padding: "3rem",
                        justifyContent: "space-between",
                        padding: "0rem",
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
                        "@media (max-width: 650px)": {
                            marginTop: "-100px",
                            // transform: "translate(0, -100px)",
                        },
                    }}
                >
                    <h5>KEN YOKOHAMA</h5>
                    <h1>FULL STACK DEVELOPER</h1>
                    <h3>
                        Hello! I'm a <b>Web Developer</b> and licensed Civil
                        Engineer with a passion for solving problems, learning
                        new things and turning ideas into reality with the use
                        of code.
                    </h3>
                </Box>
                <Box
                    sx={{
                        width: "600px",
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
