import Footer from "../../layout/Footer";
import ImagedDiv from "../../layout/ImagedDiv";
import NavBar from "../../layout/NavBar";
import SectionDiv from "../../layout/SectionDiv";
import TopBanner from "../../layout/TopBanner";
import { useQuery } from "@tanstack/react-query";

import "./Main.css";
import { fetchBestSellerProducts } from "../../api/productQuery";

function Main() {
    const scrollToSection = (target) => {
        const section = document.getElementById(target);
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ["all-products"],
        queryFn: () => {
            return fetchBestSellerProducts(12);
        },
    });

    return (
        <>
            <TopBanner />
            <NavBar />
            <ImagedDiv
                image={"/src/assets/bg.jpg"}
                text={"Featured Collection"}
                buttonText={"Shop Now"}
                onClick={() => scrollToSection("favorites")}
            />
            <SectionDiv
                title={"Our Favorites"}
                titlePosition={"center"}
                id="favorites"
            />
            <ImagedDiv image={"/src/assets/lifestyle.jpg"} noButton />
            <SectionDiv
                title={"Best Sellers"}
                titlePosition={"left"}
                products={data}
                noTabs
            />
            <Footer />
        </>
    );
}

export default Main;
