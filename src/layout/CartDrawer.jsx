/* eslint-disable react/prop-types */
import {
    Drawer,
    Box,
    List,
    ListItem,
    IconButton,
    Typography,
    Button,
    Divider,
    ListItemText,
    ListItemAvatar,
    Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useCart } from "../context/CartContext.jsx";

import "./CartDrawer.css";

const CartDrawer = ({ isOpen, onClose }) => {
    const { cartItems, addToCart, reduceFromCart, removeFromCart } = useCart();
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.amount,
        0
    );
    const shipping = "Free"; 
    // const shipping = subtotal > 50 ? "Free" : 5; // Free shipping for orders over $50

    return (
        <Drawer anchor="right" open={isOpen} onClose={onClose}>
            <Box
                sx={{
                    width: 280,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Divider />
                <List
                    sx={{
                        overflowY: "auto",
                        flexGrow: 1,
                        padding: 0,
                    }}
                    className="custom-scrollbar"
                >
                    {cartItems.map((item, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    alignItems: "center",
                                }}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        variant="square"
                                        src={item.image}
                                        alt={item.name}
                                        sx={{
                                            width: 56,
                                            height: 56,
                                            marginRight: 2,
                                        }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.name}
                                    secondary={item.brand}
                                    primaryTypographyProps={{
                                        fontWeight: "fontWeightBold",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        marginLeft: "auto",
                                        fontWeight: "bold",
                                    }}
                                >
                                    ${item.price * item.amount}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: 1,
                                }}
                            >
                                <IconButton
                                    size="small"
                                    disabled={item.amount == 1}
                                    onClick={() => reduceFromCart(item)}
                                >
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <Typography>{item.amount}</Typography>
                                <IconButton
                                    size="small"
                                    onClick={() => addToCart(item)}
                                >
                                    <AddCircleOutlineIcon />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    sx={{ marginLeft: "auto" }}
                                    onClick={() => removeFromCart(item.name)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                            <Divider sx={{ width: "100%", my: 1 }} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <Box sx={{ p: 2 }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>Shipping</span>
                        <span>
                            {typeof shipping === "number"
                                ? `$${shipping.toFixed(2)}`
                                : shipping}
                        </span>
                    </Typography>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            borderRadius: 0,
                            padding: "10px",
                            backgroundColor: "#002e5d",
                            fontSize: "18px",
                        }}
                    >
                        Pay - ${subtotal.toFixed(2)}
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default CartDrawer;
