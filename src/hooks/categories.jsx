import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { fetchCategories } from "../api/categoryQuery";

const useCategories = () => {
    const { data: categories, isSuccess } = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
        // onSuccess: Store in cookie only if not already present to avoid repetitive writes
        onSuccess: (data) => {
            if (!Cookies.get("categories")) {
                Cookies.set("categories", JSON.stringify(data), {
                    expires: 365,
                });
            }
        },
        // Initial data from cookie to avoid fetching if we already have the data
        initialData: () => {
            const storedCategories = Cookies.get("categories");
            return storedCategories ? JSON.parse(storedCategories) : undefined;
        },
        staleTime: Infinity, // Considered fresh indefinitely
        cacheTime: Infinity, // Keep data in cache indefinitely
    });

    return { categories, isSuccess };
};

export default useCategories;
