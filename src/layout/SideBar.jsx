import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Fragment } from "react";
import { Box } from "@mui/material";

const drawerWidth = 240;

// eslint-disable-next-line react/prop-types
const Sidebar = ({ open, onClose, onClick, categories }) => {
    const clickCategory = (category) => {
        onClose();
        console.log(category);

        // Use onclick to go to category page
    };
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    backgroundColor: "#fff", // Your desired background color
                    color: "#000", // Your desired text color
                },
            }}
        >
            <IconButton
                onClick={onClose}
                sx={{ marginLeft: "auto", padding: "10px" }}
            >
                <CloseIcon />
            </IconButton>
            <Box display="flex" justifyContent="space-between" paddingX={1}>
                <ListItem button onClick={() => onClick("/men")}>
                    <ListItemText primary="Men" />
                </ListItem>
                <Divider orientation="vertical" variant="middle" flexItem />
                <ListItem button onClick={() => onClick("/women")}>
                    <ListItemText primary="Women" />
                </ListItem>
            </Box>
            <Divider />
            <List>
                {
                    // eslint-disable-next-line react/prop-types
                    categories.map((text) => (
                        <Fragment key={text}>
                            <ListItem
                                button
                                onClick={() => clickCategory(text)}
                            >
                                <ListItemText primary={text} />
                            </ListItem>
                            <Divider />
                        </Fragment>
                    ))
                }
            </List>
        </Drawer>
    );
};

export default Sidebar;
