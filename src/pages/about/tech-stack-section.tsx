import { Box } from "@mui/material";
import { animateUpProps } from "../../utils/animation";
import { motion } from "framer-motion";
import { technologiesImgSrc } from "./img-src";

const TechStackSection = () => {
    return (
        <section className="page-container about-me-page">
            <div className="tech-stack-section section-spacing limit-width">
                <motion.h5 {...animateUpProps(true, 0.6)}>Tech Stack</motion.h5>
                <motion.h2 {...animateUpProps(true, 0.7)} className="heading">
                    Exploring My Technology Toolkit
                </motion.h2>
                <Box className="tech-stack-grid-container">
                    {technologiesImgSrc.map((img, index) => (
                        <div className="tech-stack-item" key={index}>
                            <img
                                src={"/images/about-page/technologies/" + img}
                                alt={img}
                            />
                        </div>
                    ))}
                </Box>
            </div>
        </section>
    );
};

export default TechStackSection;
