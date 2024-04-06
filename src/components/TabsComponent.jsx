import { Tab, Tabs } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function TabsComponent({value, handleChange, isMobile, categories}) {
    return (
        <Tabs
            value={value}
            onChange={handleChange}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "on" : "off"}
            centered
        >
            {
                // eslint-disable-next-line react/prop-types
                categories.map((category, index) => (
                    <Tab
                        label={category}
                        id={`simple-tab-${index}`}
                        aria-controls={`simple-tabpanel-${index}`}
                        key={category}
                    />
                ))
            }
        </Tabs>
    );
}
