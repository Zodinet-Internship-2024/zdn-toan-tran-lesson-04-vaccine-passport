import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Result from './components/result/Result';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="result" element={<Result />} />
            </Route>
        </Routes>
    );
}

export default App;
