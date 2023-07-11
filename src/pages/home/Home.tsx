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

const Home = () => {
    const navigate = useNavigate();

    const handleViewProjects = () => {
        const buffer = window.innerWidth > 700 ? 100 : 60;

        const element = document.getElementById("#featured-proj")?.offsetTop;

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

                <Box
                    className="hero-section"
                    sx={{
                        display: "flex",
                        alignItems: " center",
                        justifyContent: "center",
                        height: "100vh",
                        padding: "1rem",
                        flexDirection: "row",
                        "@media (max-width: 900px)": {
                            minHeight: "100%",
                            padding: "0",
                            gap: "1rem",
                        },
                        "@media (max-width: 650px)": {
                            flexDirection: "column-reverse",
                            minHeight: "100%",
                            padding: "0rem",
                        },
                    }}
                >
                    <Box
                        className="hero-txt-container"
                        sx={{
                            zIndex: "1",
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            padding: "1rem",
                            "@media (max-width: 1200px)": {
                                width: "55vw",
                                maxWidth: "600px",
                                marginRight: "-100px",
                            },
                            "@media (max-width: 900px)": {
                                width: "900px",
                                marginRight: "-100px",
                            },
                            "@media (max-width: 650px)": {
                                width: "auto",
                                marginTop: "-100px",
                                marginRight: "0",
                            },
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem",
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
                            KEN YOKOHAMA
                        </motion.h5>
                        <motion.h1
                            initial={{ y: "40px", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{
                                y: { delay: 0.4 },
                                opacity: { delay: 0.4 },
                            }}
                        >
                            <b>FULL STACK DEVELOPER</b>
                        </motion.h1>
                        <motion.h3
                            initial={{ y: "40px", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{
                                y: { delay: 0.5 },
                                opacity: { delay: 0.5 },
                            }}
                            style={{ maxWidth: "600px" }}
                        >
                            Hello! I'm a <strong>Web Developer</strong> and
                            licensed Civil Engineer with a passion for solving
                            problems, learning new things and turning ideas into
                            reality with the use of code.
                        </motion.h3>
                        <motion.div
                            initial={{ y: "40px", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{
                                y: { delay: 0.6 },
                                opacity: { delay: 0.6 },
                            }}
                        >
                            <Box
                                component="h4"
                                sx={{
                                    marginTop: "1rem",
                                    fontWeight: "100",
                                    "@media(max-width: 510px)": {
                                        marginTop: "0.5rem",
                                        fontSize: "clamp(0.5rem, 3vw, 1rem)",
                                    },
                                }}
                            >
                                <Box
                                    component="strong"
                                    sx={{
                                        transition: "border 0.5s ease",
                                        cursor: "pointer",
                                        border: "2px solid transparent",
                                        ":hover": {
                                            borderBottom: "2px solid",
                                        },
                                    }}
                                    onClick={handleViewProjects}
                                >
                                    View Projects
                                </Box>{" "}
                                or{" "}
                                <Box
                                    component="strong"
                                    sx={{
                                        transition: "border 0.5s ease",
                                        cursor: "pointer",
                                        border: "2px solid transparent",
                                        ":hover": {
                                            borderBottom: "2px solid",
                                        },
                                    }}
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
                            src="/images/home-page/profile-img2.JPG"
                            alt="profile-image"
                            style={{ filter: "grayscale(100%)" }}
                        />
                    </div>
                </Box>
                {/* Projects Container */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "5rem",
                    }}
                >
                    {/* ------------------------- Web Projects----------------------- */}
                    <div style={{ maxWidth: "1500px" }} id="#featured-proj">
                        <h5>PROJECTS AND SHOWCASE</h5>
                        <Box component="h1" sx={{ paddingBottom: "2rem" }}>
                            <b>Featured Projects</b>
                        </Box>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gap: "2rem",
                                "@media(min-width: 650px)": {
                                    gridTemplateColumns: "1fr 1fr",
                                },
                                "@media(min-width: 1300px)": {
                                    gap: "4rem",
                                },
                            }}
                        >
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
                    {/* ------------------------- Projects ----------------------- */}
                    <div style={{ maxWidth: "1500px" }}>
                        <h5>Expanded Collection</h5>
                        <Box component="h1" sx={{ paddingBottom: "2rem" }}>
                            <b>Projects List</b>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
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
