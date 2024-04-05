import { Card, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardMediaZoom = styled("div")({
    position: "relative",
    paddingTop: "56.25%", // Maintains a 16:9 ratio for the
    height: "100%",
    "&:hover img": {
        transform: "scale(1.2)",
    },

    "&:hover img + div": {
        backgroundColor: "white",
        color: "#002e5d",
    },
    "& img": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
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
});

const CardComponent = () => {
    return (
        <Card
            sx={{
                position: "relative",
                maxWidth: { xs: "100%", sm: 345 },
                cursor: "pointer",
                "&:hover": {
                    "& .MuiCardMedia-root": {
                        transform: "scale(1.05)",
                    },
                },
                height: { sm: 500 },
            }}
        >
            <CardMediaZoom>
                <img src="/src/assets/man.jpg" alt="Product Image" />
                <OverlayText>
                    <Typography variant="h6" component="div">
                        Item Name
                    </Typography>
                    <Typography variant="h6" component="span">
                        $130{" "}
                        <span
                            style={{
                                color: "grey",
                                textDecoration: "line-through",
                            }}
                        >
                            $200
                        </span>
                    </Typography>
                    <Typography variant="subtitle1">In Stock</Typography>
                </OverlayText>
            </CardMediaZoom>
        </Card>
    );
};

export default CardComponent;
