import Footer from "../../layout/Footer";
import ImagedDiv from "../../layout/ImagedDiv";
import NavBar from "../../layout/NavBar";
import SectionDiv from "../../layout/SectionDiv";
import TopBanner from "../../layout/TopBanner";

import "./Main.css";

function Main() {
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
            <ImagedDiv
                image={"/src/assets/bg.jpg"}
                text={"Featured Collection"}
                buttonText={"Shop Now"}
                onClick={() => scrollToSection("favorites")}
            />
            <SectionDiv
                title={"Our Favorites"}
                titlePosition={"center"}
                categories={categories}
                id="favorites"
            />
            <ImagedDiv image={"/src/assets/lifestyle.jpg"} noButton />
            <SectionDiv title={"Best Sellers"} titlePosition={"left"} noTabs />
            <Footer />
        </>
    );
}

export default Main;
