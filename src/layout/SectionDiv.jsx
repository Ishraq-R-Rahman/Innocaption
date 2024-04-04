/* eslint-disable react/prop-types */
import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import TabsComponent from "../components/TabsComponent";

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
    categories,
    id,
    noTabs,
}) {
    const [value, setValue] = React.useState(0);
    const isMobile = useMediaQuery("(max-width:768px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                        {/* Content for each category */}
                        {`Content for ${category}`}
                    </TabPanel>
                ))}
        </Box>
    );
}
