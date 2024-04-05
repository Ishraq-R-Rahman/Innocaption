import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";
import ProductLayout from "../../layout/ProductLayout";
import TopBanner from "../../layout/TopBanner";
import { Box } from "@mui/material";

function Product() {
    const categories = [
        "Clothing",
        "Gadgets",
        "Accessories",
        "Decor",
        "Vehicles",
        "Groceries",
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh", 
            }}
        >
            <TopBanner />
            <NavBar categories={categories} alwaysHovered />
            <ProductLayout />
            <Footer />
        </Box>
    );
}

export default Product;
