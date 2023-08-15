import { motion, AnimatePresence } from "framer-motion";

// Framer motion animations.
const variants = {
    initial: (direction: number) => {
        return {
            translateY: direction > 0 ? "40%" : "-120%",
            translateX: "-50%",
            opacity: 0,
            transition: {
                translateY: { duration: 0.15 },
                opacity: { duration: 0.15 },
            },
        };
    },
    animate: {
        translateY: "-50%",
        translateX: "-50%",
        opacity: 1,
        transition: {
            translateY: { duration: 0.15 },
            opacity: { duration: 0.15 },
        },
    },
    exit: (direction: number) => {
        return {
            translateY: direction > 0 ? "-120%" : "40%",
            translateX: "-50%",
            opacity: 0,
            transition: {
                translateY: { duration: 0.15 },
                opacity: { duration: 0.15 },
            },
        };
    },
};

interface CounterProps {
    count: string;
    direction: number;
}

const Counter = ({ count, direction }: CounterProps) => {
    return (
        <AnimatePresence initial={false} custom={direction}>
            <motion.span
                key={count}
                style={{
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    bottom: "-.75rem",
                    backgroundColor: "white",
                    right: "7.8rem",
                }}
                variants={variants}
                animate="animate"
                initial="initial"
                exit="exit"
                custom={direction}
            >
                {count}
            </motion.span>
        </AnimatePresence>
    );
};

export default Counter;
