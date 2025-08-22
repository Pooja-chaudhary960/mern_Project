
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'; 
import App from './App.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import ProductsPage from './pages/Products.jsx';
import MainLayout from './layout/MainLayout.jsx';
import ProductDetailspage from './pages/ProductDetails.jsx';
import LoginPage from './pages/Login.jsx';
import RegisterPage from './pages/Register.jsx';
import AuthLayout from './layout/AuthLayout.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Products route with nested route for product details */}
          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<ProductDetailspage />} />
          </Route>

            <Route path='auth' element={
               <AuthLayout />
            }>
                <Route path='login' element={<LoginPage/>} />
                <Route path='register' element={<RegisterPage/>} />
            </Route>

        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
