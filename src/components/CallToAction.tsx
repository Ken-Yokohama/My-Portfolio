import { Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CallToAction() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1500px",
                    textAlign: "center",
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    "@media(min-width: 650px)": {
                        paddingTop: "10rem",
                        paddingBottom: "10rem",
                    },
                }}
            >
                <Box
                    component="h1"
                    id="call-to-action-h1"
                    sx={{
                        transition: "color 0.5s ease",
                        cursor: "pointer",
                        ":hover": {
                            color: "#808080",
                        },
                    }}
                    onClick={() => {
                        navigate("/contact");
                    }}
                >
                    Get In Touch
                </Box>
                <h5>Start Your Journey Towards an Awesome Website</h5>
            </Box>
        </div>
    );
}

export default CallToAction;
