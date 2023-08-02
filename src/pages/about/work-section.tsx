import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { workImgArr } from "./img-src";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";

const WorkSection = () => {
    const navigate = useNavigate();

    return (
        <div className="about-me-page work-section-container">
            <Box className="work-section">
                <Box className="text-container">
                    <h1>Over 3 Years of Experience</h1>
                    <h3>
                        Over the past 3 years I've had the pleasure to work with
                        clients from various sectors on many interesting
                        projects.
                    </h3>
                    <motion.div
                        className="button-container"
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button
                            className="button"
                            fullWidth
                            variant="outlined"
                            onClick={() => {
                                navigate("/");
                                window.scrollTo({
                                    top: window.innerHeight - 50,
                                    behavior: "auto",
                                });
                            }}
                        >
                            View Projects
                        </Button>
                    </motion.div>
                </Box>
                <Box className="img-container">
                    {/* Masonry Images */}
                    {/* <Box
                        sx={{
                            overflowY: "hidden",
                            height: "100%",
                        }}
                    >
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {workImgArr.map((item, index) => (
                                <ImageListItem key={index}>
                                    <img
                                        src={`${item.src}?w=161&fit=crop&auto=format`}
                                        srcSet={`${item.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                        alt={"Test Alt"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box> */}
                    <img
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            // filter: "grayscale(100%)",
                        }}
                        src="/images/about-page/work-experience/tech-townhall.jpg"
                        alt="profile-image"
                    />
                </Box>
            </Box>
        </div>
    );
};

export default WorkSection;
