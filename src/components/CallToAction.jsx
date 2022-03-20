import { Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CallToAction(props) {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    maxWidth: "1600px",
                    textAlign: "center",
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                }}
            >
                <Box
                    component="h1"
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
            </div>
        </div>
    );
}

export default CallToAction;
