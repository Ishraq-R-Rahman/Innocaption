import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";
import ProductLayout from "../../layout/ProductLayout";
import TopBanner from "../../layout/TopBanner";

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
        <>
            <TopBanner />
            <NavBar categories={categories} alwaysHovered />
            <ProductLayout />
            <Footer />
        </>
    );
}

export default Product;
