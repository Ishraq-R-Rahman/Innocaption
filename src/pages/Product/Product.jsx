import { useParams } from "react-router-dom";
import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";
import ProductLayout from "../../layout/ProductLayout";
import TopBanner from "../../layout/TopBanner";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../api/productQuery";

function Product() {
    const { productId } = useParams();

    const categories = [
        "Clothing",
        "Gadgets",
        "Accessories",
        "Decor",
        "Vehicles",
        "Groceries",
    ];

    const { data, error, isLoading } = useQuery({
        queryKey: ["product", productId],
        queryFn: fetchProduct,
        options: {
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
    });

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
            <ProductLayout product={data} />
            <Footer />
        </Box>
    );
}

export default Product;
