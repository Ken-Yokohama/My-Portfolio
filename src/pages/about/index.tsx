import { Box } from "@mui/material";
import React, { useState } from "react";
import { CallToAction, Footer } from "../../components";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import Modal from "@mui/material/Modal";
import { EmblaOptionsType } from "embla-carousel-react";
import EmblaCarousel from "../../components/embla-carousel/embla-carousel";
import { animateUpProps } from "../../utils/animation";
import {
    developerToolsImgSrc,
    educationImgArr,
    technologiesImgSrc,
} from "./img-src";
import "./about.css";
import WorkSection from "./work-section";
import AwardsSection from "./awards-section";

// Embla Carousel
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const About = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const [modalImgSrc, setModalImgSrc] = useState("");

    return (
        <>
            {/* ---------------------Hero Section------------------------ */}
            <div className="page-container padding-for-nav about-me-page">
                <div
                    className="hero-section limit-width"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2rem",
                    }}
                >
                    <motion.h5 {...animateUpProps(true, 0.3)}>
                        About Me
                    </motion.h5>
                    <motion.h1 {...animateUpProps(true, 0.4)}>
                        <b>
                            My name is Ken Yokohama. I specialize in creating
                            fast, user-friendly & secure websites following best
                            practices.
                        </b>
                    </motion.h1>
                    <motion.h6
                        {...animateUpProps(true, 0.5)}
                        style={{
                            fontWeight: "100",
                            maxWidth: "800px",
                        }}
                    >
                        {/* I make sure that systems and databases are secure as
                            well as put a strong emphasis on UI/UX of the
                            website */}
                        I also put a strong emphasis on UI/UX and maintain a
                        clean and efficient codebase for optimal functionality.
                    </motion.h6>
                    <motion.div {...animateUpProps(true, 0.6)}>
                        <motion.div
                            className="button-container"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button
                                className="button"
                                fullWidth
                                variant="outlined"
                                href="https://pagespeed.web.dev/analysis/https-kenyokohama-com/ikfoebx9kz?form_factor=desktop"
                                target="_blank"
                            >
                                View Performance
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            {/* ---------------------LANGUAGES SECTION------------------------ */}
            <div className="page-container about-me-page">
                <div
                    className="section-spacing limit-width"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <motion.h5 {...animateUpProps(true, 0.6)}>
                        Tech Stack
                    </motion.h5>
                    <motion.h2
                        {...animateUpProps(true, 0.7)}
                        style={{
                            textAlign: "center",
                            marginBottom: "3rem",
                            marginTop: "1rem",
                        }}
                    >
                        Exploring My Technology Toolkit
                    </motion.h2>

                    <Box
                        sx={{
                            display: "grid",
                            width: "100%",
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
            </div>
            {/* ---------------------ENGINEERING & DESIGN SECTION------------------------ */}
            <div className="page-container about-me-page">
                <div
                    className="section-spacing limit-width"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: "4rem",
                    }}
                >
                    <h5>Development</h5>
                    <Box
                        component="h2"
                        sx={{
                            textAlign: "center",
                            marginBottom: "3rem",
                            marginTop: "1rem",
                        }}
                    >
                        More Developer Tools I've Used
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            width: "100%",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr",
                            "@media (max-width: 900px)": {
                                gridTemplateColumns: "1fr 1fr 1fr",
                            },
                            "@media (max-width: 550px)": {
                                gridTemplateColumns: "1fr 1fr ",
                            },
                        }}
                    >
                        {developerToolsImgSrc.map((img, index) => (
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
                                        objectFit: "cover",
                                        width: "100%",
                                        maxWidth: "80%",
                                        maxHeight: "80%",
                                    }}
                                    src={
                                        "/images/about-page/developer-tools/" +
                                        img
                                    }
                                    alt={img}
                                />
                            </div>
                        ))}
                    </Box>
                </div>
            </div>
            {/* ---------------------WORK SECTION------------------------ */}
            <WorkSection />
            {/* ---------------------EDUCATION------------------------ */}
            <div className="page-container about-me-page">
                <div className="section-spacing limit-width">
                    <Box
                        component="h5"
                        sx={{
                            textAlign: "center",
                            paddingLeft: "2.5px",
                            paddingTop: "1rem",
                            "@media (min-width: 700px)": {},
                        }}
                    >
                        Education
                    </Box>
                    <Box
                        component="h1"
                        sx={{
                            textAlign: "center",
                            marginTop: "1rem",
                        }}
                    >
                        <b>My Academic Pursuits</b>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            component="h3"
                            sx={{
                                maxWidth: "1000px",
                                textAlign: "center",
                                color: "#6E6E73",
                                marginTop: "2rem",
                                marginBottom: "3rem",
                                fontSize: "1.4rem",
                                fontWeight: "600",
                                "@media (max-width: 700px)": {
                                    marginBottom: "1rem",
                                    textAlign: "left",
                                },
                            }}
                        >
                            I Graduated from{" "}
                            <strong
                                style={{
                                    color: "black",
                                    fontWeight: "600",
                                }}
                            >
                                De La Salle University
                            </strong>{" "}
                            in 2019 attaining a Bachelor of Science in Civil
                            Engineering. During my time at DLSU, I was immersed
                            in a comprehensive and challenging curriculum that
                            provided me with a strong foundation in engineering
                            principles and practices.
                            {/* , empowering me to excel in various
                                technical aspects of software development. */}
                        </Box>
                    </Box>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <EmblaCarousel
                            slides={SLIDES}
                            options={OPTIONS}
                            imgArr={educationImgArr}
                            setModalImgSrc={setModalImgSrc}
                            handleOpenModal={handleOpenModal}
                        />
                    </div>
                </div>
            </div>
            {/* ---------------------Awards & Certifications------------------------ */}
            <AwardsSection
                handleOpenModal={handleOpenModal}
                setModalImgSrc={setModalImgSrc}
            />
            {/* ---------------------Call To Action Section------------------------ */}
            <div className="page-container about-me-page">
                <CallToAction />
            </div>
            <Footer />
            {/* -------------Awards and Cert Modal------------------ */}
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 0.5,
                        width: "70vw",
                        maxWidth: "800px",
                    }}
                >
                    <img
                        style={{
                            width: "100%",
                            maxHeight: "90vh",
                            objectFit: "cover",
                        }}
                        src={modalImgSrc}
                        alt="modal-image"
                    />
                </Box>
            </Modal>
        </>
    );
};

export default About;
