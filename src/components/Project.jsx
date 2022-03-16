import { Box } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project(props) {
    return (
        <div
            style={{
                backgroundColor: "#232c30",
                aspectRatio: "1/1.25",
                padding: "2rem",
                color: "white",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
            }}
        >
            <h5>2021 - Aug</h5>
            {/* Title & Desc */}
            <div>
                <h1>Project Name 1</h1>
                <p>
                    A simple site that uses... Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. A, ipsam consectetur ratione
                    numquam ipsum praesentium aliquam deserunt perferendis illo
                    officia!
                </p>
            </div>
            {/* Technologies */}
            <div>
                <h2>Technologies Used</h2>
                <h3
                    style={{
                        fontWeight: "100",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                    }}
                >
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>FIREBASE</li>
                </h3>
            </div>
            {/* Button Option 1 */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div>
                    <Button
                        sx={{
                            backgroundColor: "#FFA500",
                            ":hover": {
                                backgroundColor: "#e39505",
                            },
                        }}
                        variant="contained"
                        startIcon={<LanguageIcon />}
                    >
                        Live Site
                    </Button>
                </div>{" "}
                <h5>or</h5>{" "}
                <div>
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
                        endIcon={<GitHubIcon />}
                    >
                        Github Repo
                    </Button>
                </div>
            </Box>
        </div>
    );
}

export default Project;
