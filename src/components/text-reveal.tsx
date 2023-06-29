import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TextRevealProps {
    text: string;
    duration: number;
}

const TextReveal = ({ text, duration }: TextRevealProps) => {
    const { ref, inView } = useInView({
        // rootMargin: "-120px",
        triggerOnce: true,
    });

    return (
        <motion.span
            ref={ref}
            initial={{
                color: "orange",
                mixBlendMode: "difference",
                background: "linear-gradient(to right, black 100%, #FFF 0%)",
            }}
            animate={{
                background: inView
                    ? "linear-gradient(to right, black 0%, #FFF 0%)"
                    : "linear-gradient(to right, black 100%, #FFF 0%)",
            }}
            transition={{
                background: {
                    delay: 0.5,
                    bounce: false,
                    // duration: 1,
                    duration: duration, //Random number between 0.8 & 1.1
                    // duration: 0.5 + Math.random() * 0.3, //Random number between 0.8 & 1.1
                    // ease: "circOut",
                    ease: "easeInOut",
                    // ease: "easeOut",
                },
            }}
        >
            <span
                style={{
                    color: "white",
                    mixBlendMode: "difference",
                }}
            >
                {text}
            </span>
        </motion.span>
    );
};

export default TextReveal;
