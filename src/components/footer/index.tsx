import { Box } from "@mui/material";
import { currentYear } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { latestProjects } from "./latest-projects";
import "./footer.css";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="footer">
            <div className="container">
                <div className="footer-layout">
                    <div className="contact-information">
                        <h3>
                            <b>Contact Information</b>
                        </h3>
                        <div className="body">
                            <p>
                                Email:{" "}
                                <strong>kenlopezyokohama@gmail.com</strong>
                            </p>
                            <p>
                                Phone Number: <strong>+63 917 578 7991</strong>
                            </p>
                        </div>
                    </div>

                    <div className="latest-projects">
                        <h3>
                            <b>Latest Projects</b>
                        </h3>
                        <Box className="projects-container">
                            {latestProjects.map((project) => (
                                <div
                                    className="footer-option"
                                    onClick={() => {
                                        if (project.link) {
                                            window.open(project.link, "_blank");
                                        }
                                        if (project.path) {
                                            navigate(project.path);
                                            window.scrollTo(0, 0);
                                        }
                                    }}
                                >
                                    <p>{project.name}</p>
                                </div>
                            ))}
                        </Box>
                    </div>
                    <Box>
                        <h3>
                            <b>Social Links</b>
                        </h3>
                        <Box
                            className="footer-option"
                            onClick={() => {
                                window.open(
                                    "https://ph.linkedin.com/in/ken-yokohama-bba021179",
                                    "_blank"
                                );
                            }}
                        >
                            <p>LinkedIn</p>
                        </Box>
                        <Box
                            className="footer-option"
                            onClick={() => {
                                window.open(
                                    "https://github.com/Ken-Yokohama",
                                    "_blank"
                                );
                            }}
                        >
                            <p>Github</p>
                        </Box>
                    </Box>
                </div>
            </div>
            <h5 style={{ padding: "1rem" }}>Ⓒ Ken Yokohama {currentYear}</h5>
        </div>
    );
};

export default Footer;
