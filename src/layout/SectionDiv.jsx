/* eslint-disable react/prop-types */
import React from "react";
import {
    Typography,
    Box,
    useMediaQuery,
    Button,
    Select,
    MenuItem,
    FormControl,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TabsComponent from "../components/TabsComponent";
import CardGridComponent from "../components/CardGridComponent";
import { navToCategoryMapping } from "../assets/const";
import { fetchFavorites } from "../api/categoryQuery";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const TabPanel = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

export default function SectionDiv({
    title,
    titlePosition,
    id,
    noTabs,
    includeFilterSort,
    setOpenFilter,
    sortValue,
    handleSortChange,
    products,
}) {
    const location = useLocation();
    const gender = location.pathname.split("/")[1];

    const categories = Object.keys(navToCategoryMapping);
    const [value, setValue] = React.useState(0);
    const isMobile = useMediaQuery("(max-width:768px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ["favorites", categories[value]],
        queryFn: () => {
            return fetchFavorites(categories[value], gender);
        },
        enabled: !noTabs && !!categories[value], // Only run the query if the category is not null/undefined
    });

    return (
        <Box sx={{ width: "100%", background: "white" }} p={8} id={id}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Typography
                    variant="h4"
                    textAlign={titlePosition}
                    sx={{
                        marginBottom: 3,
                    }}
                >
                    {title}
                </Typography>
                {includeFilterSort && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button
                            startIcon={<FilterListIcon />}
                            onClick={() => setOpenFilter(true)}
                            sx={{
                                color: "black",
                                fontSize: "16px",
                                textTransform: "capitalize",
                                fontWeight: "normal",
                            }}
                        >
                            {!isMobile && "Filter"}
                        </Button>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                                variant="subtitle1"
                                component="span"
                                sx={{ marginRight: 1 }}
                            >
                                Sort by
                            </Typography>
                            <FormControl
                                variant="standard"
                                sx={{ minWidth: 120 }}
                            >
                                <Select
                                    value={sortValue}
                                    onChange={handleSortChange}
                                    IconComponent={ArrowDropDownIcon}
                                    displayEmpty
                                    inputProps={{
                                        "aria-label": "Without label",
                                    }}
                                >
                                    <MenuItem value="bestSellers">
                                        Best Sellers
                                    </MenuItem>
                                    <MenuItem value="lowestPrice">
                                        Lowest Price
                                    </MenuItem>
                                    <MenuItem value="highestPrice">
                                        Highest Price
                                    </MenuItem>
                                    {/* Add more sorting options here */}
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                )}
                {!noTabs && (
                    <TabsComponent
                        value={value}
                        handleChange={handleChange}
                        isMobile={isMobile}
                        categories={categories}
                    />
                )}
            </Box>
            {!noTabs &&
                // eslint-disable-next-line react/prop-types
                categories.map((category, index) => (
                    <TabPanel value={value} index={index} key={category}>
                        <CardGridComponent cards={data} />
                    </TabPanel>
                ))}
            {noTabs && <CardGridComponent cards={products} />}
        </Box>
    );
}
