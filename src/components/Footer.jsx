import { Box } from "@mui/material";
import React, { useState } from "react";

function Footer(props) {
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
                    maxWidth: "1600px",
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
                        <h3>Contact Information</h3>
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
                        <h3>Latest Projects:</h3>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                            }}
                        >
                            <p>Temp</p>
                            <p>Temp</p>
                            <p>Temp</p>
                            <p>Temp</p>
                        </Box>
                        {/* Projects.map function */}
                    </Box>
                    <Box>
                        <h3>Social Links</h3>
                        <p>LinkedIn</p>
                        <p>Github</p>
                    </Box>
                </Box>
            </div>
            <h5 style={{ padding: "1rem" }}>Ⓒ Ken Yokohama 2022</h5>
        </div>
    );
}

export default Footer;
