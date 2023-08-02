import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import { AwardsSectionProps } from "./interface";

const AwardsSection = ({
    handleOpenModal,
    setModalImgSrc,
}: AwardsSectionProps) => {
    return (
        <section className="page-container about-me-page">
            <div className="section-spacing limit-width awards-section">
                <h1>Awards & Certifications</h1>
                <Box className="awards-container">
                    <div>
                        <Divider color="black" style={{ height: "1px" }} />
                        <h3 className="award-title">
                            <b>
                                2023 Meta Front-End Developer Professional
                                Certificate
                            </b>
                        </h3>
                        <h3 className="award-description">
                            Awarded to recipients that achieved a professional
                            level of proficiency in front-end development
                            aligned with Meta's technologies and strategies.
                        </h3>
                        <h3 className="view-certificate">
                            <b
                                onClick={() => {
                                    setModalImgSrc(
                                        "/images/about-page/education/meta-cert.jpeg"
                                    );
                                    handleOpenModal();
                                }}
                            >
                                View Certificate
                            </b>
                        </h3>
                    </div>

                    <div>
                        <Divider color="black" style={{ height: "1px" }} />
                        <h3 className="award-title">
                            <b>Dr. Angela Yu 2021: Web Dev Bootcamp</b>
                        </h3>
                        <h3 className="award-description">
                            Received by successfully completing a comprehensive
                            training program covering front-end, back-end, and
                            database web development.
                        </h3>
                        <h3 className="view-certificate">
                            <b
                                onClick={() => {
                                    setModalImgSrc(
                                        "/images/about-page/education/bootcamp-cert.webp"
                                    );
                                    handleOpenModal();
                                }}
                            >
                                View Certificate
                            </b>
                        </h3>
                    </div>

                    <div>
                        <Divider color="black" style={{ height: "1px" }} />
                        <h3 className="award-title">
                            <b>DLSU 2019: Golden Thesis Awardee</b>
                        </h3>
                        <h3 className="award-description">
                            Awarded to students who received recognition for
                            their exceptional thesis or research work of their
                            chosen field at De La Salle University
                        </h3>
                        <h3 className="view-certificate">
                            <b
                                onClick={() => {
                                    setModalImgSrc(
                                        "/images/about-page/education/golden4.webp"
                                    );
                                    handleOpenModal();
                                }}
                            >
                                View Certificate
                            </b>
                        </h3>
                    </div>

                    <div>
                        <Divider color="black" style={{ height: "1px" }} />
                        <h3 className="award-title">
                            <b>Geomate Tokyo 2019: Best Paper Award</b>
                        </h3>
                        <h3 className="award-description">
                            Awarded to authors or researchers who presented the
                            most exceptional research paper at the Geomate
                            International Conference in Tokyo.
                        </h3>
                        <h3 className="view-certificate">
                            <b
                                onClick={() => {
                                    setModalImgSrc(
                                        "/images/about-page/education/golden3.webp"
                                    );
                                    handleOpenModal();
                                }}
                            >
                                View Certificate
                            </b>
                        </h3>
                    </div>
                </Box>
            </div>
        </section>
    );
};

export default AwardsSection;
