import { Box } from "@mui/material";
import React, { useState } from "react";
import { CallToAction, Footer } from "../components";
import Carousel from "react-elastic-carousel";

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

    const designImgSrc = [
        "autocad.jpg",
        "sketchup.png",
        "layout.png",
        "planswift.png",
        "bluebeam.jpg",
        "premiere-pro.png",
        "photoshop.png",
        "after-effects.png",
    ];

    const educationImgSrc = [
        "graduation1-arrow.png",
        "graduation2-arrow.png",
        "golden1.png",
        "golden2.png",
        "golden3.png",
    ];

    return (
        <>
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
                        maxWidth: "1500px",
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
                            My name is Ken Yokohama. I specialize in creating
                            fast, user-friendly & secure websites following best
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
                            well as put a strong emphasis on UI/UX of the
                            website
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
                                            "/images/about-page/technologies/" +
                                            img
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
                            {designImgSrc.map((img, index) => (
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
                                        src={"/images/about-page/design/" + img}
                                        alt={img}
                                    />
                                </div>
                            ))}
                        </Box>
                    </div>

                    {/* ---------------------EDUCATION------------------------ */}
                    <div>
                        <h1>Education</h1>
                        <h2 style={{ fontWeight: "100" }}>
                            Graduated from{" "}
                            <strong>De La Salle University </strong> batch
                            2014-2019
                        </h2>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Carousel>
                                {educationImgSrc.map((img, index) => (
                                    <Box
                                        sx={{
                                            padding: "3rem 3rem 0rem 3rem",
                                            width: "100%",
                                            "@media (max-width: 1000px)": {
                                                padding: "1rem 1rem 0rem 1rem",
                                            },
                                            "@media (max-width: 800px)": {
                                                padding: "1rem 0rem 0rem 0rem",
                                            },
                                        }}
                                        key={index}
                                    >
                                        <img
                                            style={{
                                                width: "100%",
                                                aspectRatio: "1.75/1",
                                            }}
                                            src={
                                                "/images/about-page/education/" +
                                                img
                                            }
                                        />
                                    </Box>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    {/* ---------------------Awards & Certifications------------------------ */}

                    <div>
                        <h1>Awards & Certifications</h1>
                        <h2 style={{ fontWeight: "100" }}>
                            The Complete 2022 Web Development Bootcamp
                        </h2>
                        <button>Link to Course</button>
                        <button>Link to Certification</button>
                        <h2 style={{ fontWeight: "100" }}>
                            Golden Thesis Awardee
                        </h2>
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
            <Footer />
        </>
    );
}

export default About;
