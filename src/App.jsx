import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="genres" element={<Genres />} loader={genresLoader} />
      <Route path="authors" element={<Authors />} loader={authorsLoader} />
      <Route path="search" element={<Search />} />
      <Route path="help" element={<Help />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="page/:page" loader={bookLstLoader} element={<BookList />} />
      <Route
        path="genres/:genre"
        loader={({ params }) => {
          return fetch(
            `https://bookstore-o32m.onrender.com/api/genres/${params.genre}`
          );
        }}
        element={<Genre />}
      />
      <Route
        path="authors/:author"
        element={<Author />}
        loader={({ params }) => {
          return fetch(
            `https://bookstore-o32m.onrender.com/api/authors/${params.author}`
          );
        }}
      />
      <Route
        path=":bookId"
        element={<BookDetails />}
        loader={({ params }) => {
          return fetch(
            `https://bookstore-o32m.onrender.com/api/books/${params.bookId}`
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
