import { Box } from "@mui/material";
import { useState } from "react";

interface ImageObject {
    src: string;
    title: string;
}

interface EmblaSlideProps {
    index: number;
    imgArr: ImageObject[];
    setModalImgSrc: (value: React.SetStateAction<string>) => void;
    handleOpenModal: () => void;
}

const EmblaSlide = ({
    index,
    imgArr,
    setModalImgSrc,
    handleOpenModal,
}: EmblaSlideProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <Box
            className="embla__slide"
            key={index}
            // For title outside image
            // style={{
            //     display: "flex",
            //     flexDirection: "column",
            // }}
        >
            <img
                className="embla__slide__img"
                src={imgArr[index].src}
                alt="Your alt text"
                style={{ cursor: "pointer" }}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}
                onClick={() => {
                    setModalImgSrc(imgArr[index].src);
                    handleOpenModal();
                }}
            />
            <div
                style={{
                    width: 0,
                    // For title inside image
                    position: "absolute",
                    bottom: "1rem",
                    left: "6vw",
                    textShadow: "1px 1px black",
                    color: "white",
                }}
            >
                <Box
                    component="strong"
                    className="hover-underline-animation"
                    sx={{
                        marginTop: "0.3rem",
                        // width: 0,
                        display: "inline-block",
                        fontSize: "1.3rem",
                        whiteSpace: "nowrap",
                        textTransform: "uppercase",
                        borderBottom: "3px solid",
                        boxShadow: "0 2px 2px -2px gray",
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                        color: isHovered ? "orange" : "white",
                        ":hover": {
                            color: "orange",
                        },
                    }}
                    onClick={() => {
                        setModalImgSrc(imgArr[index].src);
                        handleOpenModal();
                    }}
                >
                    {imgArr[index].title}
                </Box>
            </div>
        </Box>
    );
};

export default EmblaSlide;
