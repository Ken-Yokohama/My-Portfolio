import { Box } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

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
            // For title inside image
            // style={{
            //     width: 0,
            //     position: "absolute",
            //     bottom: "1rem",
            //     left: "6vw",
            //     textShadow: "1px 1px black",
            //     color: "white",
            // }}
            >
                <motion.div
                    animate={isHovered ? { color: "grey" } : { color: "black" }}
                >
                    <strong
                        className="embla__slide__text"
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
                    >
                        {imgArr[index].title}
                    </strong>
                </motion.div>
            </div>
        </Box>
    );
};

export default EmblaSlide;
