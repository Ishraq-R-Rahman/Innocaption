/* eslint-disable react/prop-types */
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    Dialog,
    IconButton,
    TextField,
    DialogContent,
    CircularProgress,
    Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import CardGridComponent from "../components/CardGridComponent";
import { fetchSearchedProducts } from "../api/productQuery";
import useCategories from "../hooks/categories";

const SearchDialog = ({ open, setOpen }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const { categories } = useCategories();

    const showOnlyTopResults = 6;

    const { data: results, isLoading } = useQuery({
        queryKey: ["searchProducts", searchTerm],
        queryFn: ({ queryKey }) =>
            fetchSearchedProducts({ queryKey, categories }),
        enabled: searchTerm.length >= 3,
        select: (data) => data ?? [],
    });

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <IconButton onClick={() => setOpen(true)}>
                <SearchIcon />
            </IconButton>

            <Dialog
                open={open}
                onClose={() => {
                    setOpen(false);
                    setSearchTerm("");
                }}
                fullWidth
                maxWidth="md"
            >
                <DialogContent>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search for a product..."
                        onChange={handleSearchChange}
                        value={searchTerm}
                        onKeyPress={(ev) => {
                            if (ev.key === "Enter") {
                                // Prevent form submission or any default action
                                ev.preventDefault();
                            }
                        }}
                    />
                    {isLoading ? (
                        <CircularProgress />
                    ) : (
                        <Grid container spacing={2} mt={2}>
                            {results && results.length > 0 ? (
                                <CardGridComponent
                                    cards={results.slice(0, showOnlyTopResults)}
                                />
                            ) : (
                                <div>No results found</div>
                            )}
                        </Grid>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default SearchDialog;
