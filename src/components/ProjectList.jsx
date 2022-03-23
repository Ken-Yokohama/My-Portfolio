import { Box } from "@mui/material";
import React, { useState } from "react";

function ProjectList(props) {
    return (
        <Box sx={{ border: "2px solid" }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "2px solid",
                    padding: "0.5rem",
                }}
            >
                <Box>
                    <h2>Project Title</h2>
                </Box>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                    <h5>HTML</h5>
                    <h5>CSS</h5>
                    <h5>JAVASCRIPT</h5>
                    <h5>REACT</h5>
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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus voluptatibus nostrum dignissimos aspernatur
                    sequi? Excepturi consequuntur expedita numquam tempora vel.
                </p>
                <Box
                    sx={{
                        display: "flex",
                        flexDireciton: "row",
                        gap: "1rem",
                    }}
                >
                    <a href="https://www.google.com/" target="_blank">
                        <strong>Link to Live Website</strong>
                    </a>
                    <a href="https://www.google.com/" target="_blank">
                        <strong>Link to Github Repository</strong>
                    </a>
                </Box>
            </Box>
        </Box>
    );
}

export default ProjectList;
