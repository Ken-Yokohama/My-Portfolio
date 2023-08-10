import { EmblaOptionsType } from "embla-carousel-react";
import { educationImgArr } from "./img-src";
import EmblaCarousel from "../../components/embla-carousel/embla-carousel";
import { EducationSectionProps } from "./interface";

// Embla Carousel
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const EducationSection = ({
    handleOpenModal,
    setModalImgSrc,
}: EducationSectionProps) => {
    return (
        <section className="page-container about-me-page">
            <div className="education-section section-spacing limit-width">
                <h5 className="sub-heading">Education</h5>
                <h1 className="heading">
                    <b>My Academic Pursuits</b>
                </h1>

                <div className="body">
                    <h3>
                        I Graduated from <strong>De La Salle University</strong>{" "}
                        in 2019 attaining a Bachelor of Science in Civil
                        Engineering. During my time at DLSU, I was immersed in a
                        comprehensive and challenging curriculum that provided
                        me with a strong foundation in engineering principles
                        and practices.
                        {/* , empowering me to excel in various
                                technical aspects of software development. */}
                    </h3>
                </div>
                <EmblaCarousel
                    slides={SLIDES}
                    options={OPTIONS}
                    imgArr={educationImgArr}
                    setModalImgSrc={setModalImgSrc}
                    handleOpenModal={handleOpenModal}
                />
            </div>
        </section>
    );
};

export default EducationSection;
