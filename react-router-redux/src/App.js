import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import AuthContextProvider from "./context/AuthContextProvider";
import UserLayout from "./layout/UserLayout";
import Dashboard from "./pages/account/Dashboard";
import Profile from "./pages/account/Profile";
import Setting from "./pages/account/Setting";
import AuthRequired from "./context/AuthRequired";
// import ProductList from "./pages/ProductList";
import React, { Suspense } from "react";
import Product from "./pages/Product";
const ProductList = React.lazy(() => import("./pages/ProductList"));

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="article" element={<Blog />} />
            <Route path="services" element={<Services />} />
            <Route
              path="products"
              element={
                <Suspense fallback="product list page loading... ">
                  <ProductList />
                </Suspense>
              }
            />
            <Route
              path="product/:category/:id/:productname"
              element={<Product />}
            />
            <Route path="login" element={<Signin />} />
            <Route path="create-account" element={<Signup />} />
            <Route
              path="user"
              element={
                <AuthRequired>
                  <UserLayout />
                </AuthRequired>
              }
            >
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="setting" element={<Setting />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
