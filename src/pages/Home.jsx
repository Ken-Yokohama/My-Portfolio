import { Box } from "@mui/material";
import React, { useState } from "react";
import { CallToAction, Footer, Project, ProjectList } from "../components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home(props) {
    const navigate = useNavigate();

    const [clickViewProjects, setClickViewProjects] = useState(false);

    const handleViewProjects = () => {
        setClickViewProjects(true);
        document.getElementById("#featured-proj").scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const featuredProjects = [
        {
            year: "2022",
            month: "MAR",
            name: "Twitter Clone",
            description:
                "Twitter Clone is a full-stack social media web application similar to the popular website Twitter created using React in the front end and Firebase to handle the Database, Authentication & Security.",
            technologies: [
                "REACT",
                "FIREBASE",
                "MATERIAL UI",
                "REACT ROUTER",
                "BAD WORDS",
            ],
            liveSiteLink: "https://ken-yokohama.github.io/Twitter-Clone",
            githubRepoLink: "https://github.com/Ken-Yokohama/Twitter-Clone",
            backgroundImgUrl:
                "/images/home-page/project-backgrounds/twitter-clone.JPG",
        },
        {
            year: "2022",
            month: "FEB",
            name: "Kenterest",
            description:
                "Kenterest is a full-stack social media photo sharing web application similar to the popular website Pinterest created using React in the Frontend and Sanity.io as the CMS.",
            technologies: [
                "REACT",
                "SANITY.IO",
                "TAILWIND CSS",
                "REACT ROUTER",
                "UUID",
            ],
            liveSiteLink: "https://kenterest.netlify.app/",
            githubRepoLink: "https://github.com/Ken-Yokohama/Kenterest",
            backgroundImgUrl:
                "/images/home-page/project-backgrounds/kenterest.JPG",
        },
        {
            year: "2022",
            month: "Apr",
            name: "Bug Tracker",
            description:
                "This Bug Tracking System is a full-stack software issue management web application that allows developers to create tickets for their projects and admins to manage the progress of each project using NodeJS & Express in the back end, MongoDB as the database and React in the front end",

            technologies: [
                "MongoDB",
                "ExpressJS",
                "React",
                "NodeJS",
                "Redux",
                "Typescript",
            ],
            liveSiteLink: "https://ken-yokohama.github.io/Bug-Tracking-System",
            githubRepoLink:
                "https://github.com/Ken-Yokohama/Bug-Tracking-System",
            backgroundImgUrl:
                "/images/home-page/project-backgrounds/bug-tracker.png",
        },
        {
            year: "2022",
            month: "MAR",
            name: "Ka-Chat!",
            description:
                "Ka-Chat! is a full-stack realtime chat application created using React in the Frontend and Firebase as the CMS.",
            technologies: [
                "TYPESCRIPT",
                "REACT",
                "FIREBASE",
                "MATERIAL UI",
                "REACT ROUTER",
            ],
            liveSiteLink: "https://ken-yokohama.github.io/Ka-Chat/",
            githubRepoLink: "https://github.com/Ken-Yokohama/Ka-Chat",
            backgroundImgUrl:
                "/images/home-page/project-backgrounds/ka-chat.JPG",
        },
    ];

    const projects = [
        {
            title: "MailChimp API Newsletter Sign Up Page",
            technologies: ["nodeJS", "expressJS", "mailChimp API"],
            description:
                "This is a web application that uses the MailChimp API to subscribe users to my personal mailing list. In the Mailchimp database, we are able to organize each user and filter which content we want to send for individual users. Additionally, using the MailChimp api allows us to sync all data (subscriber, customers, orders, products) and enables marketing automation with email campaigns, automations, ads, postcards and more.",
            liveSite: "https://still-garden-96667.herokuapp.com/",
            githubRepo:
                "https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#mailchimp-api-newsletter-signup",
        },
        {
            title: "EJS Express To Do List App",
            technologies: ["nodeJS", "expressJS", "Mongo DB", "EJS"],
            description:
                "This is a simple web application that uses MongoDB as the database and EJS for templating as well as partials for components. The frontend displays the current date & month at the top. Input feilds allows users to input any tasks they have for the given day. Users can also crossout any tasks that have been completed.",
            liveSite: "https://to-do-list-using-mongodb-atlas.herokuapp.com/",
            githubRepo:
                "https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#ejstodoist-v1",
        },
        {
            title: "PSBSI",
            technologies: ["HTML", "CSS", "JS", "JQUERY", "BOOTSTRAP"],
            description:
                "This is the landing page for the company Pioneer Specialty Building Systems Inc. The website displays all completed & upcoming projects done by the company as well as details on its building systems such as Waterproofing, Eifs & Sips.",
            liveSite: "https://ken-yokohama.github.io/psbsi/",
            githubRepo: "https://github.com/Ken-Yokohama/psbsi",
        },
        {
            title: "Tindog",
            technologies: ["HTML", "CSS", "JS", "BOOTSTRAP"],
            description:
                "This is a simple static webpage used as a parody of Tinder... But for Dogs! This project was mainly used to learn basic CSS design patterns as well as responsive design using the Bootstrap grid system.",
            liveSite: "https://ken-yokohama.github.io/TinDog/",
            githubRepo: "https://github.com/Ken-Yokohama/TinDog",
        },
    ];

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
                        <h5
                            className={
                                clickViewProjects ? "padding-for-nav" : ""
                            }
                        >
                            PROJECTS AND SHOWCASE
                        </h5>
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
                                <Project
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
                                <ProjectList
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
}

export default Home;
