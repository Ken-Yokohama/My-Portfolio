export const animateRightProps = (isVisible: boolean, delay: number) => ({
    initial: { x: "-40px", opacity: 0 },
    animate: isVisible ? { x: "0", opacity: 1 } : { x: "-40px", opacity: 0 },
    transition: isVisible
        ? { x: { delay }, opacity: { delay } }
        : { opacity: { delay: 0 }, x: { delay: 0.3 } },
});

export const animateUpProps = (isVisible: boolean, delay: number) => ({
    initial: { y: "40px", opacity: 0 },
    animate: isVisible ? { y: "0", opacity: 1 } : { y: "40px", opacity: 0 },
    transition: isVisible
        ? { y: { delay }, opacity: { delay } }
        : { opacity: { delay: 0 }, y: { delay: 0.3 } },
});

export const featuredProjectContainerProps = (isVisible: boolean) => ({
    initial: { y: "40px", opacity: 0 },
    animate: isVisible ? { y: "0", opacity: 1 } : { y: "40px", opacity: 0 },
    transition: {
        y: { delay: 0, duration: 0.3 },
        opacity: { delay: 0, duration: 0.8 },
    },
});

export const featuredProjectHoverProps = (
    isVisible: boolean,
    delay: number
) => ({
    initial: { y: "40px", opacity: 0 },
    animate: isVisible ? { y: "0", opacity: 1 } : { y: "40px", opacity: 0 },
    transition: isVisible
        ? { y: { delay }, opacity: { delay } }
        : { opacity: { delay: 0 }, y: { delay: 0.0 } },
});

export const projectContainerProps = (isVisible: boolean) => ({
    initial: { x: "-100px", opacity: 0 },
    animate: isVisible ? { x: "0", opacity: 1 } : { x: "-100px", opacity: 0 },
    transition: {
        x: { delay: 0.0 },
        opacity: { delay: 0.0 },
    },
});
