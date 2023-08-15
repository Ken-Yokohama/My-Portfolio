import { Box } from "@mui/material";
import React, { useState } from "react";
import { CallToAction, Footer } from "../../components";
import Modal from "@mui/material/Modal";
import "./about.css";
import WorkSection from "./work-section";
import AwardsSection from "./awards-section";
import HeroSection from "./hero-section";
import TechStackSection from "./tech-stack-section";
import DeveloperToolsSection from "./developer-tools-section";
import EducationSection from "./education-section";

const About = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const [modalImgSrc, setModalImgSrc] = useState("");

    return (
        <>
            <HeroSection />
            <TechStackSection />
            <DeveloperToolsSection />
            <WorkSection />
            <EducationSection
                handleOpenModal={handleOpenModal}
                setModalImgSrc={setModalImgSrc}
            />
            <AwardsSection
                handleOpenModal={handleOpenModal}
                setModalImgSrc={setModalImgSrc}
            />
            <section className="page-container about-me-page">
                <CallToAction />
            </section>
            <Footer />
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="about-modal" sx={{ boxShadow: 24 }}>
                    <img src={modalImgSrc} alt="modal-image" />
                </Box>
            </Modal>
        </>
    );
};

export default About;
