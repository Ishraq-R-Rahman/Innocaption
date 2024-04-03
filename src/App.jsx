import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/men" element={<h1>Men</h1>} />
                    <Route path="/women" element={<h1>Women</h1>} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
