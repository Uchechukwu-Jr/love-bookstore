import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Genres, { loader as genresLoader } from "./pages/Genres";
import Authors, { loader as authorsLoader } from "./pages/Authors";
import Search from "./pages/Search";
import Help from "./pages/Help";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Genre from "./pages/Genre";
import Author from "./pages/Author";
import BookList, { loader as bookLstLoader } from "./components/BookList";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "./components/ErrorBoundary";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route
                index
                errorElement={<ErrorBoundary />}
                element={<Home />}
                loader={homeLoader}
            />
            <Route
                path="genres"
                errorElement={<ErrorBoundary />}
                element={<Genres />}
                loader={genresLoader}
            />
            <Route
                path="authors"
                errorElement={<ErrorBoundary />}
                element={<Authors />}
                loader={authorsLoader}
            />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
            <Route path="help" element={<Help />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route
                path="page/:page"
                loader={bookLstLoader}
                errorElement={<ErrorBoundary />}
                element={<BookList />}
            />
            <Route
                path="genres/:genre"
                loader={({ params }) => {
                    return fetch(
                        ` http://localhost:3000/api/genres/${params.genre}`
                    );
                }}
                errorElement={<ErrorBoundary />}
                element={<Genre />}
            />
            <Route
                path="authors/:author"
                errorElement={<ErrorBoundary />}
                element={<Author />}
                loader={({ params }) => {
                    return fetch(
                        ` http://localhost:3000/api/authors/${params.author}`
                    );
                }}
            />
            <Route
                path=":bookId"
                errorElement={<ErrorBoundary />}
                element={<BookDetails />}
                loader={({ params }) => {
                    return fetch(
                        `http://localhost:3000/api/books/${params.bookId}`
                    );
                }}
            />
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
