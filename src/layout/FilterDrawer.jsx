/* eslint-disable react/prop-types */
import {
    Drawer,
    List,
    ListItem,
    Checkbox,
    FormControlLabel,
    Typography,
    IconButton,
    Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FilterDrawer = ({
    isOpen,
    onClose,
    subCategories,
    brands,
    selectedCategories,
    selectedBrands,
    setSelectedCategories,
    setSelectedBrands,
}) => {
    const handleCategoryChange = (event, category) => {
        setSelectedCategories((current) =>
            event.target.checked
                ? [...current, category]
                : current.filter((c) => c !== category)
        );
    };

    const handleBrandChange = (event, brand) => {
        setSelectedBrands((current) =>
            event.target.checked
                ? [...current, brand]
                : current.filter((b) => b !== brand)
        );
    };

    return (
        <Drawer anchor="left" open={isOpen} onClose={onClose}>
            <List
                sx={{
                    width: "250px",
                    paddingTop: 0,
                }}
            >
                <ListItem>
                    <IconButton onClick={onClose} sx={{ marginLeft: "auto" }}>
                        <CloseIcon />
                    </IconButton>
                </ListItem>
                <ListItem>
                    <Typography variant="h6">Sub-categories</Typography>
                </ListItem>
                {subCategories.map((category, index) => (
                    <ListItem key={index}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selectedCategories.includes(
                                        category
                                    )}
                                    onChange={(event) =>
                                        handleCategoryChange(event, category)
                                    }
                                />
                            }
                            label={category}
                        />
                    </ListItem>
                ))}
                <Divider />
                <ListItem>
                    <Typography variant="h6">Brands</Typography>
                </ListItem>
                {brands.map((brand, index) => (
                    <ListItem key={index}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selectedBrands.includes(brand)}
                                    onChange={(event) =>
                                        handleBrandChange(event, brand)
                                    }
                                />
                            }
                            label={brand}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default FilterDrawer;
