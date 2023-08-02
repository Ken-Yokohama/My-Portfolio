import { Box } from "@mui/material";
import { currentYear } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#FFA500",
                padding: "3rem 3rem 0 3rem",
                gap: "2rem",
            }}
        >
            <div
                style={{
                    maxWidth: "1500px",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        "@media (max-width: 990px)": {
                            gridTemplateColumns: "1fr 1fr",
                        },
                        "@media (max-width: 700px)": {
                            gridTemplateColumns: "1fr",
                            gap: "1rem",
                        },
                    }}
                >
                    <Box
                        sx={{
                            "@media (max-width: 990px)": {
                                gridColumnStart: "span 3",
                                paddingBottom: "1rem",
                            },
                            "@media (max-width: 700px)": {
                                gridColumnStart: "span 1",
                                paddingBottom: "0",
                            },
                        }}
                    >
                        <h3>
                            <b>Contact Information</b>
                        </h3>
                        <Box
                            sx={{
                                "@media (max-width: 990px)": {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                },
                                "@media (max-width: 700px)": {
                                    gridTemplateColumns: "1fr",
                                },
                            }}
                        >
                            <p>
                                Email:{" "}
                                <strong>kenlopezyokohama@gmail.com</strong>
                            </p>
                            <p>
                                Phone Number: <strong>+63 917 578 7991</strong>
                            </p>
                        </Box>
                    </Box>

                    <Box>
                        <h3>
                            <b>Latest Projects</b>
                        </h3>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                            }}
                        >
                            {/* Project 1 */}
                            <Box
                                sx={{
                                    cursor: "pointer",
                                    ":hover": {
                                        color: "white",
                                    },
                                }}
                                onClick={() => {
                                    window.open(
                                        "https://ken-yokohama.github.io/Bug-Tracking-System",
                                        "_blank"
                                    );
                                }}
                            >
                                <p>Bug Tracking System</p>
                            </Box>
                            {/* Project 2 */}
                            <Box
                                sx={{
                                    cursor: "pointer",
                                    ":hover": {
                                        color: "white",
                                    },
                                }}
                                onClick={() => {
                                    navigate(`/project/entrego-cash`);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <p>Entrego Cash</p>
                            </Box>
                            {/* Project 3 */}
                            <Box
                                sx={{
                                    cursor: "pointer",
                                    ":hover": {
                                        color: "white",
                                    },
                                }}
                                onClick={() => {
                                    navigate(`/project/entrego-hub`);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <p>Entrego HMS</p>
                            </Box>
                            {/* Project 4 */}
                            <Box
                                sx={{
                                    cursor: "pointer",
                                    ":hover": {
                                        color: "white",
                                    },
                                }}
                                onClick={() => {
                                    navigate(`/project/entrego-claims`);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <p>Entrego Claims</p>
                            </Box>
                        </Box>
                        {/* Projects.map function */}
                    </Box>
                    <Box>
                        <h3>
                            <b>Social Links</b>
                        </h3>
                        <Box
                            sx={{
                                cursor: "pointer",
                                ":hover": {
                                    color: "white",
                                },
                            }}
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
                            sx={{
                                cursor: "pointer",
                                ":hover": {
                                    color: "white",
                                },
                            }}
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
                </Box>
            </div>
            <h5 style={{ padding: "1rem" }}>Ⓒ Ken Yokohama {currentYear}</h5>
        </div>
    );
};

export default Footer;
