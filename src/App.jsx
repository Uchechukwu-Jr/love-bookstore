import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Search from "./pages/untitled";
import ProductPage from "./pages/ProductPage";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import BookComponent from "./components/untitled.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/:category" element={<Category />} />
            <Route path=":productName" element={<ProductPage />} />
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
