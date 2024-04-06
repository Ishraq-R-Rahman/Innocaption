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
    selectedCategories,
    setSelectedCategories,
}) => {
    const handleCategoryChange = (event, category) => {
        setSelectedCategories((current) =>
            event.target.checked
                ? [...current, category]
                : current.filter((c) => c !== category)
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
                {subCategories.map((category, index) => {
                    return (
                        <ListItem key={index}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={selectedCategories.includes(
                                            category
                                        )}
                                        onChange={(event) =>
                                            handleCategoryChange(
                                                event,
                                                category
                                            )
                                        }
                                    />
                                }
                                label={
                                    category[0].toUpperCase() +
                                    category.slice(1)
                                }
                            />
                        </ListItem>
                    );
                })}
                <Divider />
            </List>
        </Drawer>
    );
};

export default FilterDrawer;
