import { QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    const queryClient = useQueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="/test" element={<div>test</div>} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
