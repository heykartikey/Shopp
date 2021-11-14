import './App.css'

import Header from './components/Header';
import ProductDetail from './components/ProductDetail'
import FourZeroFour from './components/404'
import ProductList from './components/ProductList';

import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<ProductList />} />
                    <Route path='product/:pid' element={<ProductDetail />} />
                    <Route path='*' element={<FourZeroFour />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
