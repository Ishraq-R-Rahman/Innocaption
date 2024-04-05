import { Card, Typography, CardActionArea, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const CardMediaZoom = styled("div")({
    position: "relative",
    overflow: "hidden",
    "&:hover img": {
        transform: "scale(1.2)",
    },
    "&:hover img + div": {
        backgroundColor: "white",
        color: "#002e5d",
    },
    "& img": {
        width: "100%",
        height: "auto",
        transition: "transform 0.5s ease-in-out",
    },
    "& img + div": {
        transition: "all 0.3s ease-in-out",
    },
});

const OverlayText = styled(Box)({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
});

const CardComponent = () => {
    const navigate = useNavigate();
    const handleNavigate = (itemId) => {
        navigate(`/${itemId}`);
    };

    return (
        <Card
            sx={{
                position: "relative",
                maxWidth: 450,
                cursor: "pointer",
                "&:hover": {
                    "& .MuiCardMedia-root": {
                        transform: "scale(1.05)",
                    },
                },
            }}
        >
            <CardActionArea onClick={() => handleNavigate(1)}>
                <CardMediaZoom>
                    <img src="/src/assets/thumbnail.jpg" alt="Product Image" />
                    <OverlayText>
                        <Typography variant="h6" component="div">
                            Item Name
                        </Typography>
                        <Typography variant="h6" component="span">
                            $130{" "}
                            <span
                                style={{
                                    color: "#ddd",
                                    textDecoration: "line-through",
                                }}
                            >
                                $200
                            </span>
                        </Typography>
                        <Typography variant="subtitle1">In Stock</Typography>
                    </OverlayText>
                </CardMediaZoom>
            </CardActionArea>
        </Card>
    );
};

export default CardComponent;
