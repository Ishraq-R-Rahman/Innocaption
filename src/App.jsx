import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import { CartProvider } from "./context/CartContext.jsx";
import Category from "./pages/Category/Category.jsx";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/men" element={<Main />} />
                        <Route path="/women" element={<Main />} />
                        <Route path="/men/:category" element={<Category />} />
                        <Route path="/women/:category" element={<Category />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </QueryClientProvider>
    );
}

export default App;
