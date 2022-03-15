import { Box } from "@mui/material";
import React, { useState } from "react";

function Navbar(props) {
    return (
        <div
            style={{
                background: "red",
                opacity: "0.5",
                position: "fixed",
                width: "100%",
                zIndex: "1",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                }}
            >
                <h3>Ken Yokohama</h3>
                <h3>Menu</h3>
            </Box>
        </div>
    );
}

export default Navbar;
