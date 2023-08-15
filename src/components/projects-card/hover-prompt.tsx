import { animateUpProps } from "../../utils/animation";
import "./css/hover-prompt.css";
import { HoverPromptProps } from "./interface";
import { motion } from "framer-motion";

const HoverPrompt = ({ isDark, isVisible }: HoverPromptProps) => {
    return (
        <div style={{ position: "relative" }}>
            <motion.div
                {...animateUpProps(isVisible, 0.8)}
                className="hover-prompt"
            >
                <h5 className={`text ${isDark && "dark"}`}>
                    Hover for Details
                </h5>
                <svg className={`arrows ${isDark && "dark"}`}>
                    {/* Large */}
                    <path className="a1 lg" d="M0 0 L20 22 L40 0"></path>
                    <path className="a2 lg" d="M0 20 L20 42 L40 20"></path>
                    <path className="a3 lg" d="M0 40 L20 62 L40 40"></path>
                    {/* Medium */}
                    <path className="a1 md" d="M0 0 L20 22 L40 0"></path>
                    <path className="a2 md" d="M0 20 L20 42 L40 20"></path>
                    {/* Small */}
                    <path className="a1 sm" d="M0 0 L10 12 L20 0"></path>
                    <path className="a2 sm" d="M0 10 L10 22 L20 10"></path>
                </svg>
            </motion.div>
        </div>
    );
};

export default HoverPrompt;
