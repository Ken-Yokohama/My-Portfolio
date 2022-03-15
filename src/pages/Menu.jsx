import React, { useState } from "react";
import { motion } from "framer-motion";

function Menu(props) {
    return (
        <div
            style={{
                position: "fixed",
                display: "flex",
                backgroundColor: "green",
                flexDirection: "column",
                justifyContent: "center",
                height: "100vh",
                width: "100vw",
                gap: "3rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    padding: "1rem",
                    fontSize: "1.5rem",
                }}
            >
                <h1>Home</h1>
                <h1>About Me</h1>
                <h1>Contact Me</h1>
                <h1>Github</h1>
                <h1>Resume</h1>
            </div>
            <div style={{ padding: "1rem" }}>
                <p>Quick Links:</p>
                <div className="scroll" style={{ display: "flex" }}>
                    <h3>
                        Email: <span>kenlopezyokohama@gmail.com</span> -
                        Contact:{" "}
                        <span style={{ fontFamily: "arial" }}>
                            +63 917 578 7991
                        </span>{" "}
                        -{" "}
                    </h3>
                    <h3>
                        Email: <span>kenlopezyokohama@gmail.com</span> -
                        Contact:{" "}
                        <span style={{ fontFamily: "arial" }}>
                            +63 917 578 7991
                        </span>{" "}
                        -{" "}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Menu;
