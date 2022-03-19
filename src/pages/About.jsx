import { Box } from "@mui/material";
import React, { useState } from "react";

function About(props) {
    const technologiesImgSrc = [
        "html.png",
        "css.png",
        "javascript.png",
        "react1.png",
        "nodejs1.png",
        "expressjs3.png",
        "Firebase1.png",
        "mongodb1.jpg",
        "materialui2.png",
        "framermotion1.png",
        "react-router1.webp",
        "git1.png",
        "heroku1.png",
        "netlify1.png",
        "bootstrap2.png",
        "tailwindcss.jpg",
        "jquery1.png",
        "npm1.png",
        "autoit1.png",
        "github2.png",
    ];

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
                    display: "flex",
                    flexDirection: "column",
                    gap: "10rem",
                }}
            >
                {/* ---------------------About Me Header------------------------ */}
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
                {/* ---------------------LANGUAGES SECTION------------------------ */}

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <h5>LANGUAGES</h5>
                    <h2 style={{ textAlign: "center" }}>
                        Some Technologies I'm fluent with
                    </h2>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr",
                            gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
                        }}
                    >
                        {technologiesImgSrc.map((img, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    aspectRatio: "2/1",
                                }}
                            >
                                <img
                                    style={{
                                        maxWidth: "80%",
                                        maxHeight: "80%",
                                    }}
                                    src={
                                        "/images/about-page/technologies/" + img
                                    }
                                    alt={img}
                                />
                            </div>
                        ))}
                    </Box>
                </div>
                {/* ---------------------ENGINEERING & DESIGN SECTION------------------------ */}

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <h5>SOFTWARE</h5>
                    <h2 style={{ textAlign: "center" }}>
                        Engineering & Design
                    </h2>
                </div>

                {/* ---------------------REFACTORING------------------------ */}
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
                    <li>EXPRESSJS</li>
                    <li>MONGO DB</li>
                    <li>MATERIAL UI</li>
                    <li>FRAMER MOTION</li>
                    <li>REACT ROUTER DOM</li>
                    <li>GIT</li>
                    <li>GITHUB</li>
                    <li>Heroku</li>
                    <li>Netlify</li>
                    <li>BOOTSTRAP</li>
                    <li>TAILWIND CSS</li>
                    <li>JQUERY</li>
                    <li>NPM</li>
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
