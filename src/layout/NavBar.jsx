import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { useLocation, useNavigate } from "react-router-dom";

import "./NavBar.css";
import { Person, Search, ShoppingBag, Menu } from "@mui/icons-material";
import MenuButtons from "../components/MenuButtons";
import Sidebar from "./SideBar";
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { useCart } from "../context/CartContext";

// eslint-disable-next-line react/prop-types
function NavBar({ categories }) {
    const { totalItemCount } = useCart();

    const isMobile = useMediaQuery("(max-width:964px)");
    const isExtraSmall = useMediaQuery("(max-width:480px)");

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigateCategories = (path) => {
        const currentRoute = location.pathname.split("/");
        const gender =
            currentRoute.length == 2
                ? currentRoute[currentRoute.length - 1]
                : currentRoute[currentRoute.length - 2];
        navigate(`/${gender}${path}`);
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    // eslint-disable-next-line no-unused-vars
    const isActive = (path) => {
        return location.pathname === path;
    };

    const [open, setOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);

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
            <CartDrawer isOpen={openCart} onClose={() => setOpenCart(false)} />
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
                                                    handleNavigateCategories(
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
                                <IconButton
                                    color="inherit"
                                    onClick={() => setOpenCart(true)}
                                    disabled={totalItemCount == 0}
                                >
                                    <Badge
                                        badgeContent={totalItemCount}
                                        sx={{
                                            "& .MuiBadge-badge": {
                                                backgroundColor: "#ff6f61",
                                            },
                                        }}
                                    >
                                        <ShoppingBag color="inherit" />
                                    </Badge>
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
                                    onClick={() => setOpenCart(true)}
                                    disabled={totalItemCount == 0}
                                >
                                    <Badge
                                        badgeContent={totalItemCount}
                                        color="primary"
                                    >
                                        <ShoppingBag color="action" />
                                    </Badge>
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