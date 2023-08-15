import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./error-page.css";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            <h1>404 Page Not Found</h1>
            <motion.div
                className="button-container"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Button
                    className="button"
                    fullWidth
                    variant="outlined"
                    onClick={() => {
                        navigate(`/`);
                    }}
                >
                    Return Home
                </Button>
            </motion.div>
            <div className="socials">
                <LinkedInIcon
                    className="icons"
                    onClick={() => {
                        window.open(
                            "https://ph.linkedin.com/in/ken-yokohama-bba021179",
                            "_blank"
                        );
                    }}
                />
                <GitHubIcon
                    className="icons"
                    onClick={() => {
                        window.open(
                            "https://github.com/Ken-Yokohama",
                            "_blank"
                        );
                    }}
                />
                <TwitterIcon
                    className="icons"
                    onClick={() => {
                        window.open(
                            "https://twitter.com/yokohamster",
                            "_blank"
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default ErrorPage;
