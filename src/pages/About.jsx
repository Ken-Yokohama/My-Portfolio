import { Box } from "@mui/material";
import React, { useState } from "react";
import { CallToAction, Footer } from "../components";
import Carousel from "react-elastic-carousel";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import Modal from "@mui/material/Modal";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [modalImgSrc, setModalImgSrc] = useState("");

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
                        "@media (max-width: 900px)": {
                            paddingTop: "4rem",
                            gap: "6rem",
                        },
                        "@media (max-width: 600px)": {
                            paddingTop: "2rem",
                            gap: "2rem",
                        },
                    }}
                >
                    {/* ---------------------About Me Header------------------------ */}
                    <div
                        className="about-title"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2rem",
                        }}
                    >
                        <h5>About Me</h5>
                        <h1>
                            My name is Ken Yokohama. I specialize in creating
                            fast, user-friendly & secure websites following best
                            practices.
                        </h1>
                        <h6
                            style={{
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
                                            "/My-Portfolio/images/about-page/technologies/" +
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
                                        src={
                                            "/My-Portfolio/images/about-page/design/" +
                                            img
                                        }
                                        alt={img}
                                    />
                                </div>
                            ))}
                        </Box>
                    </div>

                    {/* ---------------------EDUCATION------------------------ */}
                    <div>
                        <h1>Education</h1>
                        <h2 style={{ fontWeight: "100", paddingTop: "1rem" }}>
                            Graduated from{" "}
                            <strong>De La Salle University </strong> batch
                            2014-2019
                        </h2>
                        <Box
                            component="h5"
                            sx={{
                                paddingLeft: "2.5px",
                                paddingTop: "1rem",
                                "@media (min-width: 700px)": {},
                            }}
                        >
                            Bachelor of Science in Civil Engineering
                        </Box>

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
                                                "/My-Portfolio/images/about-page/education/" +
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
                        <h1 style={{ fontSize: "clamp(1rem,14vw,3.5rem)" }}>
                            Awards & Certifications
                        </h1>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                paddingTop: "1rem",
                            }}
                        >
                            <div>
                                <h2 style={{ fontWeight: "100" }}>
                                    The Complete 2021 Web Development Bootcamp
                                </h2>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        paddingTop: "0.5rem",
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Button
                                            sx={{
                                                backgroundColor: "#FFA500",
                                                ":hover": {
                                                    backgroundColor: "#e39505",
                                                },
                                                width: "120px",
                                            }}
                                            fullWidth
                                            variant="contained"
                                            startIcon={<HistoryEduIcon />}
                                            onClick={() => {
                                                window.open(
                                                    "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
                                                    "_blank"
                                                );
                                            }}
                                        >
                                            Course
                                        </Button>
                                    </motion.div>{" "}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Button
                                            sx={{
                                                color: "#FFA500",
                                                borderColor: "#FFA500",
                                                ":hover": {
                                                    borderColor: "#e39505",
                                                    color: "#e39505",
                                                },
                                            }}
                                            variant="outlined"
                                            endIcon={<WorkspacePremiumIcon />}
                                            onClick={() => {
                                                setModalImgSrc(
                                                    "/My-Portfolio/images/about-page/education/bootcamp-cert.jpg"
                                                );
                                                handleOpen();
                                            }}
                                        >
                                            Certification
                                        </Button>
                                    </motion.div>
                                </Box>
                            </div>
                            <div>
                                <h2 style={{ fontWeight: "100" }}>
                                    Golden Thesis Awardee
                                </h2>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        paddingTop: "0.5rem",
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Button
                                            sx={{
                                                backgroundColor: "#FFA500",
                                                ":hover": {
                                                    backgroundColor: "#e39505",
                                                },
                                                width: "120px",
                                            }}
                                            fullWidth
                                            variant="contained"
                                            startIcon={<PhotoCameraIcon />}
                                            onClick={() => {
                                                setModalImgSrc(
                                                    "/My-Portfolio/images/about-page/education/golden1.jpg"
                                                );
                                                handleOpen();
                                            }}
                                        >
                                            Photo
                                        </Button>
                                    </motion.div>{" "}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Button
                                            sx={{
                                                color: "#FFA500",
                                                borderColor: "#FFA500",
                                                ":hover": {
                                                    borderColor: "#e39505",
                                                    color: "#e39505",
                                                },
                                            }}
                                            variant="outlined"
                                            endIcon={<WorkspacePremiumIcon />}
                                            onClick={() => {
                                                setModalImgSrc(
                                                    "/My-Portfolio/images/about-page/education/golden4.png"
                                                );
                                                handleOpen();
                                            }}
                                        >
                                            Certification
                                        </Button>
                                    </motion.div>
                                </Box>
                            </div>
                            <div>
                                <h2 style={{ fontWeight: "100" }}>
                                    Geomate Tokyo Best Paper Award
                                </h2>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        paddingTop: "0.5rem",
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Button
                                            sx={{
                                                backgroundColor: "#FFA500",
                                                ":hover": {
                                                    backgroundColor: "#e39505",
                                                },
                                                width: "120px",
                                            }}
                                            fullWidth
                                            variant="contained"
                                            startIcon={<PhotoCameraIcon />}
                                            onClick={() => {
                                                setModalImgSrc(
                                                    "/My-Portfolio/images/about-page/education/geomate-group.jpg"
                                                );
                                                handleOpen();
                                            }}
                                        >
                                            Photo
                                        </Button>
                                    </motion.div>{" "}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Button
                                            sx={{
                                                color: "#FFA500",
                                                borderColor: "#FFA500",
                                                ":hover": {
                                                    borderColor: "#e39505",
                                                    color: "#e39505",
                                                },
                                            }}
                                            variant="outlined"
                                            endIcon={<WorkspacePremiumIcon />}
                                            onClick={() => {
                                                setModalImgSrc(
                                                    "/My-Portfolio/images/about-page/education/golden3.jpg"
                                                );
                                                handleOpen();
                                            }}
                                        >
                                            Certification
                                        </Button>
                                    </motion.div>
                                </Box>
                            </div>
                        </Box>
                    </div>
                </Box>
                {/* -------------Awards and Cert Modal------------------ */}
                <Modal
                    open={open}
                    onClose={handleClose}
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
                <CallToAction />
            </div>
            <Footer />
        </>
    );
}

export default About;
