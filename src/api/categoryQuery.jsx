import axios from "axios";
import { navToCategoryMapping } from "../assets/const";

export const fetchCategories = async () => {
    const { data } = await axios.get(
        "https://dummyjson.com/products/categories"
    );
    return data;
};

export const fetchProductsByCategory = async ({
    queryKey,
    gender,
    selectedCategories,
    sortValue,
}) => {
    const [, category] = queryKey;
    let subcategories = [];
    if (selectedCategories.length > 0) {
        subcategories = selectedCategories;
    } else if (category === "clothing" || category === "accessories") {
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

    let sortedProducts = allProducts;

    if (sortValue === "bestSellers") {
        sortedProducts = allProducts.sort((a, b) => a.stock - b.stock);
    } else if (sortValue === "lowestPrice") {
        sortedProducts = allProducts.sort((a, b) => a.price - b.price);
    } else {
        sortedProducts = allProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
};

export const fetchFavorites = async (category, gender) => {
    let subcategories = [];
    if (category === "clothing" || category === "accessories") {
        subcategories = navToCategoryMapping[category][gender];
    } else {
        subcategories = navToCategoryMapping[category];
    }
    const fetchSubcategoryProductsPromises = subcategories.map((subcategory) =>
        axios
            .get(
                `https://dummyjson.com/products/category/${subcategory}?limit=3&skip=1`
            )
            .then((response) => response.data.products)
    );

    const productsArrays = await axios.all(fetchSubcategoryProductsPromises);

    // Combine all products into a single array
    const allProducts = productsArrays.flat();

    return allProducts;
};
