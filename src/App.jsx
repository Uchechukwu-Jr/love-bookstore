import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ProductPage from "./pages/ProductPage";
import Genres, { loader as genresLoader } from "./pages/Genres";
import Authors, { loader as authorsLoader } from "./pages/Authors";
import Search from "./pages/Search";
import Help from "./pages/Help";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Genre, { loader as genreLoader } from "./pages/Genre";
import Author, { loader as authorLoader } from "./pages/Author";
import BookList, { loader as bookLstLoader } from "./components/BookList";
import Try, { loader as tryLoader } from "./pages/Try";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} loader={homeLoader} />
            <Route path="genres" element={<Genres />} loader={genresLoader} />
            <Route
                path="authors"
                element={<Authors />}
                loader={authorsLoader}
            />
            <Route path="search" element={<Search />} />
            <Route path="help" element={<Help />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route
                path="page/:page"
                loader={bookLstLoader}
                element={<BookList />}
            />
            <Route path="play" loader={tryLoader} element={<Try />} />
            <Route
                path="genres/:genre"
                loader={genreLoader}
                element={<Genre />}
            />
            <Route
                path="authors/:author"
                loader={authorLoader}
                element={<Author />}
            />
            <Route path=":productName" element={<ProductPage />} />
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
