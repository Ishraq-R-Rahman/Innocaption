import Footer from "../../layout/Footer";
import ImagedDiv from "../../layout/ImagedDiv";
import NavBar from "../../layout/NavBar";
import SectionDiv from "../../layout/SectionDiv";
import TopBanner from "../../layout/TopBanner";
import { useParams } from "react-router-dom";

import "./Category.css";
import FilterDrawer from "../../layout/FilterDrawer";
import { useState } from "react";

function Category() {
    const { category } = useParams();
    // subCategories and brands data can be fetched or statically defined
    const subCategories = ["Shoes", "Shirts", "Pants"];
    const brands = ["Vintage Apparel", "Old Navy", "Macy's"];

    const [selectedCategories, setSelectedCategories] = useState(subCategories);
    const [selectedBrands, setSelectedBrands] = useState(brands);
    const [open, setOpen] = useState(false);

    const [sortValue, setSortValue] = useState("bestSellers");

    const handleSortChange = (event) => {
        setSortValue(event.target.value);
    };

    const scrollToSection = (target) => {
        const section = document.getElementById(target);
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    };

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
            <NavBar categories={categories} />
            <FilterDrawer
                isOpen={open}
                onClose={() => setOpen(false)}
                subCategories={subCategories}
                brands={brands}
                selectedCategories={selectedCategories}
                selectedBrands={selectedBrands}
                setSelectedCategories={setSelectedCategories}
                setSelectedBrands={setSelectedBrands}
            />
            <ImagedDiv
                image={`/src/assets/${category}.jpg`}
                text={`${category.charAt(0).toUpperCase() + category.slice(1)}`}
                buttonText={"Shop Now"}
                onClick={() => scrollToSection("items")}
            />
            <SectionDiv
                id={"items"}
                noTabs
                includeFilterSort
                setOpenFilter={setOpen}
                sortValue={sortValue}
                handleSortChange={handleSortChange}
            />
            <Footer />
        </>
    );
}

export default Category;
