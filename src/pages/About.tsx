import { Box } from "@mui/material";
import React, { useState } from "react";
import { CallToAction, Footer, TextReveal } from "../components";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import Modal from "@mui/material/Modal";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { EmblaOptionsType } from "embla-carousel-react";
import EmblaCarousel from "../components/embla-carousel/embla-carousel";

// Embla Carousel
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const About = () => {
    const technologiesImgSrc = [
        "html.png",
        "css.png",
        "javascript.png",
        "typescript.png",
        "react1.png",
        "nextjs.png",
        "nodejs1.png",
        "expressjs3.png",
        "Firebase1.png",
        "mongodb1.jpg",
        "postgreSQL.png",
        "materialui2.png",
        "jest.png",
        "redux.png",
        "redux-saga.jpg",
        "sass.png",
        "tailwindcss.jpg",
        "python.png",
        // "npm1.png",
        "django-rest.png",
        "electron.png",
        // "github2.png",
    ];

    const developerToolsImgSrc = [
        "docker.png",
        "vite.jpg",
        "jira.jpg",
        "figma.png",
        "slack.png",
        "git1.png",
        "AWS_S3.jpg",
        "AWS_SES.jpg",
    ];

    const educationImgArr = [
        {
            src: "/images/about-page/education/graduation1-arrow.png",
            title: "Graduation",
        },
        {
            src: "/images/about-page/education/graduation2-arrow.png",
            title: "Batch 2019",
        },
        {
            src: "/images/about-page/education/golden1.JPG",
            title: "Golden Thesis",
        },
        {
            src: "/images/about-page/education/golden2.JPG",
            title: "DLSU",
        },
        {
            src: "/images/about-page/education/golden3.JPG",
            title: "Geomate Award",
        },
    ];

    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

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
                        <motion.h5
                            initial={{ y: "40px", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{
                                y: { delay: 0.3 },
                                opacity: { delay: 0.3 },
                            }}
                        >
                            About Me
                        </motion.h5>
                        <motion.h1
                            initial={{ y: "40px", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{
                                y: { delay: 0.4 },
                                opacity: { delay: 0.4 },
                            }}
                        >
                            My name is Ken Yokohama. I specialize in creating
                            fast, user-friendly & secure websites following best
                            practices.
                        </motion.h1>
                        <motion.h6
                            initial={{ y: "40px", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{
                                y: { delay: 0.5 },
                                opacity: { delay: 0.5 },
                            }}
                            style={{
                                fontWeight: "100",
                                maxWidth: "800px",
                            }}
                        >
                            I make sure that systems and databases are secure as
                            well as put a strong emphasis on UI/UX of the
                            website
                        </motion.h6>
                    </div>
                    {/* ---------------------LANGUAGES SECTION------------------------ */}

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <motion.h5
                            initial={{ y: "40px", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{
                                y: { delay: 0.6 },
                                opacity: { delay: 0.6 },
                            }}
                        >
                            Tech Stack
                        </motion.h5>
                        <motion.h2
                            initial={{ y: "40px", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{
                                y: { delay: 0.7 },
                                opacity: { delay: 0.7 },
                            }}
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
                        <h5>
                            <TextReveal duration={0.8} text="Development" />
                        </h5>
                        <Box
                            component="h2"
                            sx={{
                                textAlign: "center",
                                marginBottom: "3rem",
                                marginTop: "1rem",
                            }}
                        >
                            <TextReveal
                                duration={1}
                                text="More Developer Tools I've Used"
                            />
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

                    {/* ---------------------EDUCATION------------------------ */}
                    <div>
                        <h1>
                            <TextReveal duration={0.8} text="Education" />
                        </h1>
                        <h2
                            style={{
                                color: "#6E6E73",
                                // fontWeight: "100",
                                //  paddingTop: "1rem"
                            }}
                        >
                            Graduated from{" "}
                            <TextReveal
                                duration={1}
                                text="De La Salle University"
                            />
                            {/* <strong
                                style={{
                                    // color: "orange",
                                    color: "black",
                                    // fontWeight: "800",
                                    // borderBottom: "3px solid",
                                    // backgroundColor: "orange",
                                }}
                            >
                                De La Salle University
                            </strong> */}{" "}
                            batch 2014-2019
                        </h2>
                        <Box
                            component="h5"
                            sx={{
                                paddingLeft: "2.5px",
                                paddingTop: "1rem",
                                "@media (min-width: 700px)": {},
                            }}
                        >
                            Bachelor of Science in{" "}
                            <TextReveal
                                duration={0.6}
                                text="Civil Engineering"
                            />
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
                                                    "/images/about-page/education/bootcamp-cert.jpg"
                                                );
                                                handleOpenModal();
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
                                                    "/images/about-page/education/golden1.JPG"
                                                );
                                                handleOpenModal();
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
                                                    "/images/about-page/education/golden4.png"
                                                );
                                                handleOpenModal();
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
                                                    "/images/about-page/education/geomate-group.jpg"
                                                );
                                                handleOpenModal();
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
                                                    "/images/about-page/education/golden3.JPG"
                                                );
                                                handleOpenModal();
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
                <CallToAction />
            </div>
            <Footer />
        </>
    );
};

export default About;
