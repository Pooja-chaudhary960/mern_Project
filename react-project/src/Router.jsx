import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router'; 
import App from './App.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import ProductsPage from './pages/Products.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
