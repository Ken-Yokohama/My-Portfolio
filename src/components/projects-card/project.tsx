import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectCardProps } from "./interface";

const ProjectCard = ({
    title,
    technologies,
    description,
    liveSite,
    githubRepo,
}: ProjectCardProps) => {
    // Intersection Observer Func
    const [ref, inView] = useInView({
        rootMargin: "-120px",
    });

    return (
        <motion.div
            ref={ref}
            initial={{ x: "-100px", opacity: 0 }}
            animate={{ x: inView ? "0" : "-100px", opacity: inView ? 1 : 0 }}
            transition={{
                x: { delay: 0.0 },
                opacity: { delay: 0.0 },
            }}
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
                }}
            >
                <h3>Description</h3>
                <p>{description}</p>
                <Box
                    sx={{
                        display: "flex",
                        flexDireciton: "row",
                        gap: "1rem",
                    }}
                >
                    <a href={liveSite} target="_blank">
                        <i>Link to Live Website</i>
                    </a>
                    <a href={githubRepo} target="_blank">
                        <i>Link to Github Repository</i>
                    </a>
                </Box>
            </Box>
        </motion.div>
    );
};

export default ProjectCard;
