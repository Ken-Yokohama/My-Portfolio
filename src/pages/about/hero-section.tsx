import { animateUpProps } from "../../utils/animation";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="page-container padding-for-nav about-me-page">
            <div className="hero-section limit-width">
                <motion.h5 {...animateUpProps(true, 0.3)}>About Me</motion.h5>
                <motion.h1 {...animateUpProps(true, 0.4)}>
                    <b>
                        My name is Ken Yokohama. I specialize in creating fast,
                        user-friendly & secure websites following best
                        practices.
                    </b>
                </motion.h1>
                <motion.h6 {...animateUpProps(true, 0.5)}>
                    {/* I make sure that systems and databases are secure as
                    well as put a strong emphasis on UI/UX of the
                    website */}
                    I also put a strong emphasis on UI/UX and maintain a clean
                    and efficient codebase for optimal functionality.
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
        </section>
    );
};

export default HeroSection;
