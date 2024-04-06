import axios from "axios";

const fetchProduct = async ({ queryKey }) => {
    const productId = queryKey[1];
    const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
    );
    return response.data;
};

const fetchSearchedProducts = async ({ queryKey, categories }) => {
    const [, searchTerm] = queryKey; // Destructure to get the searchTerm

    const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchTerm}`
    );
    // console.log(response.data);
    if (response.data.products && response.data.products.length > 0)
        return response.data.products;

    const matchedCategory = categories.find((category) =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchedCategory) {
        const categoryResponse = await axios.get(
            `https://dummyjson.com/products/category/${matchedCategory}`
        );
        if (
            categoryResponse.data.products &&
            categoryResponse.data.products.length > 0
        ) {
            return categoryResponse.data.products;
        } else {
            // No products found in the matched category either.
            return [];
        }
    }

    return [];
};

const fetchBestSellerProducts = async (limit) => {
    const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}`
    );
    return response.data.products;
};

export { fetchProduct, fetchSearchedProducts, fetchBestSellerProducts };
