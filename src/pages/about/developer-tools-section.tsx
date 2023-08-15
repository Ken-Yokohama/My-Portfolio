import { developerToolsImgSrc } from "./img-src";
import { Box } from "@mui/material";

const DeveloperToolsSection = () => {
    return (
        <section className="page-container about-me-page">
            <div className="developer-tools-section section-spacing limit-width">
                <h5>Development</h5>
                <h2 className="heading">More Developer Tools I've Used</h2>

                <Box className="tech-stack-grid-container">
                    {developerToolsImgSrc.map((img, index) => (
                        <div className="tech-stack-item" key={index}>
                            <img
                                src={
                                    "/images/about-page/developer-tools/" + img
                                }
                                alt={img}
                            />
                        </div>
                    ))}
                </Box>
            </div>
        </section>
    );
};

export default DeveloperToolsSection;
