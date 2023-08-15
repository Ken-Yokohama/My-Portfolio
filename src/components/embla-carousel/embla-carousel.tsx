import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, {
    EmblaCarouselType,
    EmblaOptionsType,
} from "embla-carousel-react";
import { DotButton } from "./embla-carousel-controls";
import "./css/base.css";
import "./css/container.css";
import "./css/embla.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Counter from "./page-count";
import EmblaSlide from "./embla-carousel-slide";
import { Box } from "@mui/material";

interface ImageObject {
    src: string;
    title: string;
}

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
    imgArr: ImageObject[];
    setModalImgSrc: (value: React.SetStateAction<string>) => void;
    handleOpenModal: () => void;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options, imgArr, handleOpenModal, setModalImgSrc } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [
        ,
        // prevBtnEnabled
        setPrevBtnEnabled,
    ] = useState(false);
    const [
        ,
        // nextBtnEnabled
        setNextBtnEnabled,
    ] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [direction, setDirection] = useState<number>(0); //1 = Up, -1 = Down
    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    );
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    );
    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <section className="container__carousel embla-theme-light">
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((index) => (
                            <EmblaSlide
                                index={index}
                                imgArr={imgArr}
                                setModalImgSrc={setModalImgSrc}
                                handleOpenModal={handleOpenModal}
                            />
                        ))}
                    </div>
                </div>

                <Box className="embla__pagination">
                    <h2 className="counter">
                        <Counter
                            count={`0${selectedIndex + 1}`}
                            direction={direction}
                        />
                        {/* <span>0{selectedIndex + 1} </span> */}
                        <span style={{ color: "grey" }}>/ 05</span>
                    </h2>
                    <div className="arrows-container">
                        <ArrowBackIcon
                            onClick={() => {
                                scrollPrev();
                                setDirection(-1);
                            }}
                            className="arrow-icon"
                        />
                        <ArrowForwardIcon
                            className="arrow-icon"
                            onClick={() => {
                                scrollNext();
                                setDirection(1);
                            }}
                        />
                    </div>
                </Box>
            </div>

            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default EmblaCarousel;
