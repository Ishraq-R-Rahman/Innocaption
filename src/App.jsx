import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/men" element={<Main />} />
                    <Route path="/women" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
