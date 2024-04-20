import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/Singleproduct";
import Error from "./pages/Error";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/products/:id" element={<SingleProduct />} />
                <Route path="/kasa" element={<Navigate to="/" replace />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </ BrowserRouter>
    )
}

export default App;
