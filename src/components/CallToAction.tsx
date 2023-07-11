import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
    const navigate = useNavigate();

    return (
        <div className="call-to-action">
            <Box className="container">
                <Box
                    component="h1"
                    className="header"
                    onClick={() => {
                        navigate("/contact");
                    }}
                >
                    <b>Get In Touch</b>
                </Box>
                <h5>Start Your Journey Towards an Awesome Website</h5>
            </Box>
        </div>
    );
};

export default CallToAction;
