import { Box } from "@mui/material";
import {
    CallToAction,
    Footer,
    FeaturedProjectCard,
    ProjectCard,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredProjects, projects } from "./project-data";

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
            <div className="page-container">
                {/* -------------------------Title----------------------- */}

                <Box
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
                            // Padding for Nav
                            // paddingTop: "5.6rem",
                        },
                        "@media (max-width: 650px)": {
                            flexDirection: "column-reverse",
                            minHeight: "100%",
                            padding: "0rem",
                        },
                    }}
                >
                    <Box
                        className="title"
                        sx={{
                            zIndex: "1",
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            padding: "1rem",
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
                            FULL STACK DEVELOPER
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
                    <div className="img-div">
                        <img
                            src="/images/home-page/profile-img2.JPG"
                            alt="profile-image"
                            className="profile-img"
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
                            Featured Projects
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
                                    description={project.description}
                                    technologies={project.technologies}
                                    liveSiteLink={project.liveSiteLink}
                                    githubRepoLink={project.githubRepoLink}
                                    backgroundImg={project.backgroundImgUrl}
                                />
                            ))}
                        </Box>
                    </div>
                    {/* ------------------------- Projects ----------------------- */}
                    <div style={{ maxWidth: "1500px" }}>
                        <h5>Completed Works</h5>
                        <Box component="h1" sx={{ paddingBottom: "2rem" }}>
                            Projects List
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
                                    liveSite={projects.liveSite}
                                    githubRepo={projects.githubRepo}
                                    key={index}
                                />
                            ))}
                        </Box>
                    </div>

                    {/* ------------------------- Engineering Projects LOW PRIORITY----------------------- */}
                    {/* <div style={{ maxWidth: "1500px" }}>
                    <h5>3D Modelling</h5>
                    <Box component="h1" sx={{ paddingBottom: "2rem" }}>
                        Engineering Renders
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
                        <Project backgroundImg="https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
                        <Project backgroundImg="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" />
                        <Project backgroundImg="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" />
                    </Box>
                </div> */}
                </div>
                <CallToAction />
            </div>
            <Footer />
        </>
    );
};

export default Home;
