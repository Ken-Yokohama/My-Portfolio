import { Box } from "@mui/material";
import { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FeaturedProjectCardProps } from "./interface";
import { useNavigate } from "react-router-dom";

const FeaturedProjectCard = ({
    year,
    month,
    name,
    title,
    description,
    technologies,
    liveSiteLink,
    githubRepoLink,
    hasProjectPage,
    backgroundImg,
}: FeaturedProjectCardProps) => {
    const navigate = useNavigate();

    const [mouseHovering, setMouseHovering] = useState(false);

    // Intersection Observer Func
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <motion.div
            initial={{ y: "40px", opacity: 0 }}
            animate={{ y: inView ? "0" : "40px", opacity: inView ? 1 : 0 }}
            transition={{
                y: { delay: 0, duration: 0.3 },
                opacity: { delay: 0, duration: 0.8 },
            }}
            ref={ref}
            onMouseEnter={() => {
                setMouseHovering(true);
            }}
            onMouseLeave={() => {
                setMouseHovering(false);
            }}
            style={{
                // handle Background Image
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Box
                className="project-cards"
                sx={{
                    backgroundColor: mouseHovering
                        ? "rgba(35,44,48,0.95)"
                        : "rgba(35,44,48,0)",
                    transition: "background 0.3s",
                    aspectRatio: "1/1.25",
                    padding: "2rem",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                }}
            >
                <motion.h5
                    initial={{ y: "40px", opacity: 0 }}
                    animate={
                        mouseHovering
                            ? { y: "0", opacity: 1 }
                            : { y: "40px", opacity: 0 }
                    }
                    transition={
                        mouseHovering
                            ? { y: { delay: 0.0 }, opacity: { delay: 0.0 } }
                            : { opacity: { delay: 0 }, y: { delay: 0.0 } }
                    }
                >
                    {year} - {month}
                </motion.h5>
                {/* Title & Desc */}
                <motion.div
                    initial={{ y: "40px", opacity: 0 }}
                    animate={
                        mouseHovering
                            ? { y: "0", opacity: 1 }
                            : { y: "40px", opacity: 0 }
                    }
                    transition={
                        mouseHovering
                            ? { y: { delay: 0.1 }, opacity: { delay: 0.1 } }
                            : { opacity: { delay: 0 }, y: { delay: 0.0 } }
                    }
                >
                    <h1>
                        <b>{title}</b>
                    </h1>
                    <p>{description}</p>
                </motion.div>
                {/* Technologies */}
                <motion.div
                    initial={{ y: "40px", opacity: 0 }}
                    animate={
                        mouseHovering
                            ? { y: "0", opacity: 1 }
                            : { y: "40px", opacity: 0 }
                    }
                    transition={
                        mouseHovering
                            ? { y: { delay: 0.2 }, opacity: { delay: 0.2 } }
                            : { opacity: { delay: 0 }, y: { delay: 0.0 } }
                    }
                >
                    <h2>Technologies Used</h2>
                    <div
                        style={{
                            fontWeight: "100",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                        }}
                    >
                        {technologies.map((technologies, index) => (
                            <div
                                className="project-tech-stack"
                                key={index}
                                style={{ display: "flex" }}
                            >
                                <h5>-</h5>
                                <h5> {technologies}</h5>
                            </div>
                        ))}
                    </div>
                </motion.div>
                {/* Button Option 1 */}
                <motion.div
                    initial={{ y: "40px", opacity: 0 }}
                    animate={
                        mouseHovering
                            ? { y: "0", opacity: 1 }
                            : { y: "40px", opacity: 0 }
                    }
                    transition={
                        mouseHovering
                            ? { y: { delay: 0.3 }, opacity: { delay: 0.3 } }
                            : { opacity: { delay: 0 }, y: { delay: 0.0 } }
                    }
                >
                    <Box
                        className="button-container"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            // "@media (max-width: 1000px)": {
                            //     flexDirection: "column",
                            // },
                            "@media (max-width: 1000px)": {
                                flexDirection: "column",
                            },

                            // "@media (max-width: 935px)": {
                            //     flexDirection: "column",
                            // },
                            "@media (max-width: 650px)": {
                                flexDirection: "row",
                            },
                            "@media (max-width: 500px)": {
                                flexDirection: "column",
                            },
                        }}
                    >
                        {liveSiteLink && (
                            <motion.div
                                className="button-div"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button
                                    sx={{
                                        backgroundColor: "#FFA500",
                                        ":hover": {
                                            backgroundColor: "#e39505",
                                        },
                                    }}
                                    fullWidth
                                    variant="contained"
                                    startIcon={<LanguageIcon />}
                                    onClick={() => {
                                        window.open(liveSiteLink, "_blank");
                                    }}
                                >
                                    Live Site
                                </Button>
                            </motion.div>
                        )}{" "}
                        {/* Button Option 2 */}
                        {githubRepoLink && (
                            <motion.div
                                className="button-div"
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
                                    fullWidth
                                    endIcon={<GitHubIcon />}
                                    onClick={() => {
                                        window.open(githubRepoLink, "_blank");
                                    }}
                                >
                                    Github Repo
                                </Button>
                            </motion.div>
                        )}
                        {hasProjectPage && (
                            <motion.div
                                className="button-div"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button
                                    sx={{
                                        backgroundColor: "#FFA500",
                                        ":hover": {
                                            backgroundColor: "#e39505",
                                        },
                                    }}
                                    fullWidth
                                    variant="contained"
                                    startIcon={<LanguageIcon />}
                                    onClick={() => {
                                        navigate(`/project/${name}`);
                                    }}
                                >
                                    View Details
                                </Button>
                            </motion.div>
                        )}
                    </Box>
                </motion.div>
            </Box>
        </motion.div>
    );
};

export default FeaturedProjectCard;
