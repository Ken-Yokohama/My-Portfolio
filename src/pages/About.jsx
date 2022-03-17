import { Box } from "@mui/material";
import React, { useState } from "react";

function About(props) {
    return (
        <div
            className="page-container padding-for-nav"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1600px",
                    paddingTop: "2rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2rem",
                    }}
                >
                    <h5>About Me</h5>
                    <h1 style={{ textAlign: "center" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi obcaecati nemo officiis, autem placeat aut
                        exercitationem laudantium atque quis fuga?
                    </h1>
                    <h6
                        style={{
                            textAlign: "center",
                            fontWeight: "100",
                            maxWidth: "800px",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugiat corrupti cumque, voluptate laudantium rerum
                        vero sunt tempore? Voluptates, doloribus totam.
                    </h6>
                </div>
                <div>
                    <h1>Technical Skills</h1>
                    {/*  */}
                    <h2>Programming Technologies</h2>
                    {/*  */}
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>FIREBASE</li>
                    <li>NODE JS</li>
                    <li>EXPRESS</li>
                    <li>MONGO DB</li>
                    <li>MATERIAL UI</li>
                    <li>FRAMER MOTION</li>
                    <li>REACT ROUTER DOM</li>
                    <li>GIT</li>
                    <li>GITHUB</li>
                    <li>BOOTSTRAP</li>
                    <li>JQUERY</li>
                    <li>AUTOIT</li>
                    <li>STACK OVERFLOW</li>
                    {/*  */}
                    <h2>Engineering & Design</h2>
                    {/*  */}
                    <li>AUTOCAD</li>
                    <li>SKETCHUP</li>
                    <li>LAYOUT</li>
                    <li>PLANSWIFT</li>
                    <li>BLUEBEAM</li>
                    <li>ADOBE PREMEIRE PRO</li>
                    <li>ADOBE PHOTOSHOP</li>
                    <li>ADOBE AFTER EFFECTS</li>
                </div>
                <div>
                    <h1>Education</h1>
                </div>
            </Box>
        </div>
    );
}

export default About;
