import React, { useState } from "react";

function About(props) {
    return (
        <div
            className="page-container padding-for-nav"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div style={{ maxWidth: "1600px" }}>
                <h1>About</h1>
                <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi obcaecati nemo officiis, autem placeat aut
                    exercitationem laudantium atque quis fuga?
                </h2>
            </div>
        </div>
    );
}

export default About;
