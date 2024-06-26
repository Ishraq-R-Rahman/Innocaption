/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalItemCount, setTotalItemCount] = useState(0);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex((i) => i.title === item.title);
            if (itemIndex > -1) {
                const newItems = [...prevItems];
                newItems[itemIndex].amount += 1;
                return newItems;
            } else {
                return [...prevItems, { ...item, amount: 1 }];
            }
        });

        setTotalItemCount((prevTotalItemCount) => prevTotalItemCount + 1);
    };

    const reduceFromCart = (item) => {
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex((i) => i.title === item.title);
            if (itemIndex > -1) {
                const newItems = [...prevItems];
                newItems[itemIndex].amount -= 1;
                setTotalItemCount(
                    (prevTotalItemCount) => prevTotalItemCount - 1
                );
                return newItems;
            }
        });
    };

    const removeFromCart = (itemName) => {
        console.log(cartItems.findIndex((item) => item.title === itemName));
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex(
                (item) => item.title === itemName
            );
            if (itemIndex > -1) {
                setTotalItemCount(
                    (prevTotalItemCount) =>
                        prevTotalItemCount - prevItems[itemIndex].amount
                );
                return prevItems.filter((item) => item.title !== itemName);
            }
        });
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                reduceFromCart,
                removeFromCart,
                totalItemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
