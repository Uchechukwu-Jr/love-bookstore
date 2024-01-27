import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Search from "./pages/Search";
import ProductPage from "./pages/ProductPage";
import Categories from "./pages/Categories";
import Category from "./pages/Category";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:category" element={<Category />} />
          <Route
            path="search"
            element={
              <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
              />
            }
          />
          <Route path=":productName" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
