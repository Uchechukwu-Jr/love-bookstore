import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ProductPage from "./pages/ProductPage";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Category from "./pages/Category";
import BookList, { loader as bookLstLoader } from "./components/BookList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="categories" element={<Categories />} />
      <Route path="search" element={<Search />} />
      <Route path="page/:page" loader={bookLstLoader} element={<BookList />} />
      <Route path="categories/:category" element={<Category />} />
      <Route path=":productName" element={<ProductPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
