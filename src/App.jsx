import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <div>
              Hello World
            </div>
        </QueryClientProvider>
    );
}

export default App;
