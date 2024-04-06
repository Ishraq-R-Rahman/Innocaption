import Footer from "../../layout/Footer";
import ImagedDiv from "../../layout/ImagedDiv";
import NavBar from "../../layout/NavBar";
import SectionDiv from "../../layout/SectionDiv";
import TopBanner from "../../layout/TopBanner";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import "./Category.css";
import FilterDrawer from "../../layout/FilterDrawer";
import { useState } from "react";
import { fetchProductsByCategory } from "../../api/categoryQuery";

function Category() {
    const { category } = useParams();
    const location = useLocation();
    const gender = location.pathname.split("/")[1];

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

    const { data, error, isLoading } = useQuery({
        queryKey: ["products", category],
        queryFn: ({ queryKey }) => {
            return fetchProductsByCategory({ queryKey, gender });
        },
        enabled: !!category, // Only run the query if the category is not null/undefined
    });

    console.log(data);

    return (
        <>
            <TopBanner />
            <NavBar />
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
                products={data}
            />
            <Footer />
        </>
    );
}

export default Category;
