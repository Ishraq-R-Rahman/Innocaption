import axios from "axios";
import { navToCategoryMapping } from "../assets/const";

export const fetchCategories = async () => {
    const { data } = await axios.get(
        "https://dummyjson.com/products/categories"
    );
    return data;
};

export const fetchProductsByCategory = async ({ queryKey, gender }) => {
    const [, category] = queryKey;
    let subcategories = [];
    if (category === "clothing" || category === "accessories") {
        subcategories = navToCategoryMapping[category][gender];
    } else {
        subcategories = navToCategoryMapping[category];
    }

    const fetchSubcategoryProductsPromises = subcategories.map((subcategory) =>
        axios
            .get(`https://dummyjson.com/products/category/${subcategory}`)
            .then((response) => response.data.products)
    );

    // Use axios.all to wait for all requests to complete
    const productsArrays = await axios.all(fetchSubcategoryProductsPromises);

    // Combine all products into a single array
    const allProducts = productsArrays.flat();

    const sortedProducts = allProducts.sort((a, b) => a.stock - b.stock);
    console.log(sortedProducts);
    return sortedProducts;
};
