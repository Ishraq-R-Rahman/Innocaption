import axios from "axios";

export const fetchCategories = async () => {
    const { data } = await axios.get(
        "https://dummyjson.com/products/categories"
    );
    return data;
};
