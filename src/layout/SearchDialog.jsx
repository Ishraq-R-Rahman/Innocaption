/* eslint-disable react/prop-types */
import { useState } from "react";
import {
    Dialog,
    IconButton,
    TextField,
    DialogContent,
    Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import CardGridComponent from "../components/CardGridComponent";

const SearchDialog = ({ open, setOpen }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    /**
     * ! Make sure the search first sees whether the string matches any products, if not search based on categories
     */
    const handleSearch = () => {
        // Simulate a search operation, you might want to fetch results from an API
        const filteredResults = []; // Replace with actual search logic
        setResults(filteredResults);
    };

    return (
        <>
            <IconButton onClick={() => setOpen(true)}>
                <SearchIcon />
            </IconButton>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
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
                                handleSearch();
                                ev.preventDefault();
                            }
                        }}
                    />
                    <Grid container spacing={2} mt={2}>
                        {/* If searching yields no results, you might want to display a message or leave it blank */}
                        {results.length > 0 ? (
                            <CardGridComponent cards={results} />
                        ) : (
                            <div>No results found</div>
                        )}
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default SearchDialog;
