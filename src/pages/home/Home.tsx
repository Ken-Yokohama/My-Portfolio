import { Box } from "@mui/material";
import {
    CallToAction,
    Footer,
    FeaturedProjectCard,
    ProjectCard,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredProjects, projects } from "../project/project-data";
import { animateUpProps } from "../../utils/animation";

const Home = () => {
    const navigate = useNavigate();

    const handleViewProjects = () => {
        const buffer = window.innerWidth > 700 ? 100 : 60;

        const element = document.getElementById("featured-proj")?.offsetTop;

        if (element) {
            window.scrollTo({
                top: element - buffer,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className="page-container home-page">
                {/* -------------------------Hero Section----------------------- */}
                <Box className="hero-section">
                    <Box className="hero-txt-container">
                        <motion.h5 {...animateUpProps(true, 0.3)}>
                            KEN YOKOHAMA
                        </motion.h5>
                        <motion.h1 {...animateUpProps(true, 0.4)}>
                            <b>FULL STACK DEVELOPER</b>
                        </motion.h1>
                        <motion.h3
                            {...animateUpProps(true, 0.5)}
                            style={{ maxWidth: "600px" }}
                        >
                            Hello! I'm a <strong>Web Developer</strong> and
                            licensed Civil Engineer with a passion for solving
                            problems, learning new things and turning ideas into
                            reality with the use of code.
                        </motion.h3>
                        <motion.div {...animateUpProps(true, 0.6)}>
                            <Box component="h4" className="actions">
                                <Box
                                    component="strong"
                                    onClick={handleViewProjects}
                                >
                                    View Projects
                                </Box>{" "}
                                or{" "}
                                <Box
                                    component="strong"
                                    onClick={() => {
                                        navigate("/about");
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    About Me
                                </Box>
                            </Box>
                        </motion.div>
                    </Box>
                    <div className="hero-img-container">
                        <img
                            src="/images/home-page/profile-img2.webp"
                            alt="profile-image"
                        />
                    </div>
                </Box>
                {/* Projects Container */}
                <div className="projects-section">
                    {/* ------------------------- Featured Projects----------------------- */}
                    <div id="featured-proj">
                        <h5>PROJECTS AND SHOWCASE</h5>
                        <Box component="h1" sx={{ paddingBottom: "2rem" }}>
                            <b>Featured Projects</b>
                        </Box>
                        <Box className="featured-proj-container">
                            {featuredProjects.map((project, index) => (
                                <FeaturedProjectCard
                                    key={index}
                                    year={project.year}
                                    month={project.month}
                                    name={project.name}
                                    title={project.title}
                                    description={project.description}
                                    technologies={project.technologies}
                                    liveSiteLink={project.liveSiteLink}
                                    githubRepoLink={project.githubRepoLink}
                                    hasProjectPage={project.hasProjectPage}
                                    backgroundImg={project.backgroundImgUrl}
                                />
                            ))}
                        </Box>
                    </div>
                    {/* ------------------------- Projects List ----------------------- */}
                    <div id="projects-list">
                        <h5>Expanded Collection</h5>
                        <Box component="h1" sx={{ paddingBottom: "2rem" }}>
                            <b>Projects List</b>
                        </Box>
                        <Box className="projects-list-container">
                            {projects.map((projects, index) => (
                                <ProjectCard
                                    title={projects.title}
                                    technologies={projects.technologies}
                                    description={projects.description}
                                    liveSiteLink={projects.liveSiteLink}
                                    githubRepoLink={projects.githubRepoLink}
                                    key={index}
                                />
                            ))}
                        </Box>
                    </div>
                </div>
                <CallToAction />
            </div>
            <Footer />
        </>
    );
};

export default Home;
