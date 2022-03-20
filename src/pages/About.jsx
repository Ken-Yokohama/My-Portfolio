import { Box } from "@mui/material";
import React, { useState } from "react";
import { CallToAction } from "../components";

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
                    paddingTop: "8rem",
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
                        My name is Ken Yokohama. I specialize in creating fast,
                        user-friendly & secure websites following best
                        practices.
                    </h1>
                    <h6
                        style={{
                            textAlign: "center",
                            fontWeight: "100",
                            maxWidth: "800px",
                        }}
                    >
                        I make sure that systems and databases are secure as
                        well as put a strong emphasis on UI/UX of the website
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
                    <Box
                        component="h2"
                        sx={{
                            textAlign: "center",
                            marginBottom: "3rem",
                            marginTop: "1rem",
                        }}
                    >
                        Some Technologies I'm fluent with
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr",
                            "@media (max-width: 900px)": {
                                gridTemplateColumns: "1fr 1fr 1fr",
                            },
                            "@media (max-width: 550px)": {
                                gridTemplateColumns: "1fr 1fr ",
                            },
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
                    <Box
                        component="h2"
                        sx={{
                            textAlign: "center",
                            marginBottom: "3rem",
                            marginTop: "1rem",
                        }}
                    >
                        Engineering & Design Tools I Use
                    </Box>
                </div>

                {/* ---------------------REFACTORING------------------------ */}
                <div>
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
                    <h2 style={{ fontWeight: "100" }}>
                        Graduated from <strong>De La Salle University </strong>{" "}
                        on "INSERT DATE HERE"
                    </h2>
                    <p>
                        Maybe Make it a Carousell, Also MAbe MAke it black and
                        white
                    </p>
                    <img src="" alt="Insert Batch Photo Here" />
                </div>
                <div>
                    <h1>Awards & Certifications</h1>
                    <h2 style={{ fontWeight: "100" }}>
                        The Complete 2022 Web Development Bootcamp
                    </h2>
                    <button>Link to Course</button>
                    <button>Link to Certification</button>
                    <h2 style={{ fontWeight: "100" }}>Golden Thesis Awardee</h2>
                    <button>Link to Photo</button>
                    <button>Link to Certification</button>
                    <h2 style={{ fontWeight: "100" }}>
                        Geomate Tokyo Best Paper Award
                    </h2>
                    <button>Link to Photo</button>
                    <button>Link to Certification</button>
                </div>
            </Box>
            <CallToAction />
        </div>
    );
}

export default About;
