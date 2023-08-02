import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectCardProps } from "./interface";
import { projectContainerProps as containerAnimationProps } from "../../utils/animation";

const ProjectCard = ({
    title,
    technologies,
    description,
    liveSiteLink,
    githubRepoLink,
}: ProjectCardProps) => {
    const { ref, inView } = useInView({
        rootMargin: "-120px",
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            {...containerAnimationProps(inView)}
            style={{ border: "2px solid" }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "2px solid",
                    padding: "0.5rem",
                    "@media (max-width: 900px)": {
                        flexDirection: "column",
                        textAlign: "center",
                    },
                }}
            >
                <Box>
                    <h2>{title}</h2>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {technologies.map((tech, index) => (
                        <h5 key={index}>{tech}</h5>
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    padding: "0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    margin: "0.5rem 0",
                }}
            >
                <p style={{ marginBottom: "0.5rem" }}>{description}</p>
                <Box
                    sx={{
                        display: "flex",
                        flexDireciton: "row",
                        gap: "1rem",
                    }}
                >
                    <a href={liveSiteLink} target="_blank">
                        <i>Live Website</i>
                    </a>
                    <a href={githubRepoLink} target="_blank">
                        <i>Github Repository</i>
                    </a>
                </Box>
            </Box>
        </motion.div>
    );
};

export default ProjectCard;
