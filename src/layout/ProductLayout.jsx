import {
    Grid,
    Box,
    Typography,
    Button,
    List,
    ListItem,
    Divider,
    Rating,
    useMediaQuery,
    Tooltip,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const ProductLayout = (prop) => {
    const { addToCart } = useCart();
    const isMobile = useMediaQuery("(max-width:1000px)");
    const isSmallMobile = useMediaQuery("(max-width:500px)");
    const [activeImageIndex, setActiveImageIndex] = useState(0); // State to keep track of the active image index

    if (!prop.product) return;

    // Making sure the product doesn't get updated unknowingly
    const currentProduct = JSON.parse(JSON.stringify(prop.product));

    const images =
        currentProduct.images.length != 0 ? currentProduct.images : [];

    const maxHeight = "500px";

    const price = currentProduct.discountPercentage
        ? (
              currentProduct.price *
              (1 + currentProduct.discountPercentage / 100)
          ).toFixed(2)
        : currentProduct.price;

    const handleAddToCart = () => {
        const item = currentProduct;
        item.price = price;
        addToCart(item);
    };

    return (
        <>
            <Grid
                container
                spacing={2}
                pt={20}
                sx={{ backgroundColor: "white" }}
                justifyContent={isMobile && "center"}
            >
                {!isMobile && (
                    <Grid
                        item
                        xs={12}
                        sx={{ overflowY: "auto", maxHeight }}
                        md={4}
                        lg={2}
                    >
                        <List>
                            {images.map((src, index) => {
                                // Making sure only 4 images are shown
                                if (index >= 4) return <></>;
                                return (
                                    <ListItem
                                        key={index}
                                        sx={{ padding: "8px" }}
                                    >
                                        <img
                                            src={src}
                                            alt={`Thumbnail ${index + 1}`}
                                            style={{
                                                width: "100%",
                                                objectFit: "cover",
                                                border:
                                                    activeImageIndex === index
                                                        ? `3px solid #ccc`
                                                        : "none",
                                                maxWidth: "150px",
                                                cursor: "pointer",
                                            }}
                                            onClick={() =>
                                                setActiveImageIndex(index)
                                            }
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                )}

                <Grid
                    item
                    xs={12}
                    sx={{
                        maxWidth: 500,
                        height: "100%",
                        overflowY: "auto",
                        cursor: "pointer",
                    }}
                    md={4}
                    lg={6}
                >
                    <Carousel
                        autoPlay
                        interval={3000}
                        activeStep={(newIndex) => setActiveImageIndex(newIndex)}
                        index={activeImageIndex}
                        onChange={(newIndex) => setActiveImageIndex(newIndex)}
                        indicatorContainerProps={{
                            style: {
                                marginTop: "20px",
                            },
                        }}
                        indicatorIconButtonProps={{
                            style: {
                                padding: "5px",
                                color: "#ccc",
                            },
                        }}
                        activeIndicatorIconButtonProps={{
                            style: {
                                color: "#002e5d",
                            },
                        }}
                    >
                        {images.map((src, index) => (
                            <Box
                                key={index}
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`Product ${index + 1}`}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>
                        ))}
                    </Carousel>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sx={{ overflowY: "auto", maxHeight: "100vh" }}
                    md={4}
                    lg={4}
                >
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            textAlign={isMobile ? "center" : "left"}
                            mb={2}
                        >
                            {`/Home/${
                                currentProduct.category[0].toUpperCase() +
                                currentProduct.category.slice(1)
                            }`}
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterBottom
                            textAlign={isMobile ? "center" : "left"}
                        >
                            {currentProduct.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            textAlign={isMobile ? "center" : "left"}
                            sx={{ color: "#7B7B7B" }}
                        >
                            {currentProduct.brand}
                        </Typography>
                        <Box
                            sx={{
                                marginBottom: 2,
                                display: "flex",
                                justifyContent: isMobile ? "center" : "left",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <Typography
                                variant={isSmallMobile ? "h6" : "h4"}
                                sx={{ fontWeight: "bold", marginBottom: 2 }}
                            >
                                {price}
                            </Typography>
                            {currentProduct.discountPercentage && (
                                <Typography
                                    variant={isSmallMobile ? "body1" : "h6"}
                                    color="text.secondary"
                                    sx={{
                                        textDecoration: "line-through",
                                        marginBottom: 2,
                                    }}
                                >
                                    {currentProduct.price}
                                </Typography>
                            )}
                            <Button
                                variant="outlined"
                                disabled
                                sx={{
                                    marginLeft: "20px",
                                    marginBottom: 2,
                                    "&.Mui-disabled": {
                                        color: "#00123c",
                                        borderColor: "#00123c",
                                    },
                                }}
                            >
                                {currentProduct.stock} left in Stock
                            </Button>
                        </Box>
                        <Typography
                            color="primary"
                            textAlign={isMobile ? "center" : "left"}
                        >
                            <Tooltip
                                title={`Rating: ${currentProduct.rating}`}
                                placement="right"
                            >
                                <div style={{ width: "max-content" }}>
                                    <Rating
                                        name="read-only"
                                        value={currentProduct.rating}
                                        precision={0.5}
                                        readOnly
                                        textAlign={isMobile ? "center" : "left"}
                                        sx={{
                                            color: "#00123c",
                                        }}
                                    />
                                </div>
                            </Tooltip>
                        </Typography>
                        <Divider />
                    </Box>
                    <Box
                        sx={{
                            maxWidth: "30rem",
                            marginLeft: isSmallMobile && "auto",
                            marginRight: "auto",
                            textAlign: isMobile ? "center" : "left",
                        }}
                    >
                        <Typography paragraph>
                            {currentProduct.description}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                width: "90%",
                                mt: 2,
                                backgroundColor: "#00123c",
                                transition: "all 0.5s ease-in-out",
                                marginBottom: isMobile && "10px",

                                "&:hover": {
                                    backgroundColor: "white",
                                    color: "black",
                                },
                            }}
                            onClick={() => handleAddToCart()}
                        >
                            Add to Cart - ${price}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default ProductLayout;
