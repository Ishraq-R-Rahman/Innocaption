import axios  from "axios";

const fetchProduct = async ({ queryKey }) => {
    const productId = queryKey[1];
    const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
    );
    return response.data;
};


export {
    fetchProduct
}