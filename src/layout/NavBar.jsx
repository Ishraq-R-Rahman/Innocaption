import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import "./NavBar.css";
import { Person, Search, ShoppingBag, Menu } from "@mui/icons-material";
import MenuButtons from "../components/MenuButtons";
import Sidebar from "./SideBar";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function NavBar({ categories }) {
    const isMobile = useMediaQuery("(max-width:964px)");
    const isExtraSmall = useMediaQuery("(max-width:480px)");

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (path) => {
        navigate(path);
    };

    // eslint-disable-next-line no-unused-vars
    const isActive = (path) => {
        return location.pathname === path;
    };

    const [open, setOpen] = useState(false);

    return (
        <>
            {isMobile && (
                <Sidebar
                    open={open}
                    onClose={() => setOpen(false)}
                    onClick={handleNavigate}
                    categories={categories}
                />
            )}
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                className="navbar"
            >
                <Toolbar style={{ padding: "6px 12px", width: "100%" }}>
                    {!isMobile && (
                        <>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        flexGrow: 1,
                                        fontSize: "32px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleNavigate("/")}
                                >
                                    Innocaption
                                </Typography>
                                <MenuButtons
                                    text={"Men"}
                                    onClick={() => handleNavigate("/men")}
                                />
                                <MenuButtons
                                    text={"Women"}
                                    onClick={() => handleNavigate("/women")}
                                />
                            </Box>

                            <Box sx={{ flexGrow: 2, textAlign: "center" }}>
                                <Typography
                                    variant="caption"
                                    component="div"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    E-Shop
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "4px",
                                    }}
                                >
                                    {
                                        // eslint-disable-next-line react/prop-types
                                        categories.map((text) => (
                                            <MenuButtons
                                                key={text}
                                                text={text}
                                                onClick={() =>
                                                    handleNavigate(
                                                        `/${text.toLowerCase()}`
                                                    )
                                                }
                                            />
                                        ))
                                    }
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <IconButton color="inherit">
                                    <Search />
                                </IconButton>
                                <IconButton color="inherit">
                                    <Person />
                                </IconButton>
                                <IconButton color="inherit">
                                    <ShoppingBag />
                                </IconButton>
                            </Box>
                        </>
                    )}
                    {isMobile && (
                        <>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <IconButton color="inherit">
                                    <Menu onClick={() => setOpen(true)} />
                                </IconButton>
                                <IconButton color="inherit">
                                    <Search />
                                </IconButton>
                            </Box>
                            <Box sx={{ flexGrow: 2, textAlign: "center" }}>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        flexGrow: 1,
                                        fontSize: isExtraSmall
                                            ? "16px"
                                            : "24px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleNavigate("/")}
                                >
                                    Innocaption
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <IconButton
                                    color="inherit"
                                    size={isMobile && "small"}
                                >
                                    <Person />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    size={isMobile && "small"}
                                >
                                    <ShoppingBag />
                                </IconButton>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;
