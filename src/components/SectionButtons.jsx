import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// eslint-disable-next-line react/prop-types
const SectionButtons = ({ text, onClick }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Button
            variant="contained"
            onClick={onClick}
            sx={{
                backgroundColor: "white",
                color: "black",
                padding: isMobile ? "5px 10px" : "10px 20px",
                fontSize: isMobile ? "0.875rem" : "1rem",
                borderRadius: "10px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                    backgroundColor: "#f6f3f0",
                    transform: "scale(1.05)",
                    "@media (hover: none)": {
                        backgroundColor: "#00bfa5",
                        color: "#002e5d",
                    },
                },
                "&:active": {
                    transform: "scale(0.95)",
                },
            }}
        >
            {text}
        </Button>
    );
};

export default SectionButtons;
