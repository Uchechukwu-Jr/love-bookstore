import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/searchTermSlice";
import { setSearchResults } from "../features/searchResultsSlice";
import { Link } from "react-router-dom";
import "../css/booklist.css";
import { setLoading } from "../features/loadingSlice";
import { setError } from "../features/errorSlice";
const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);
  const searchResults = useSelector((state) => state.searchResults);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const holder = {
    display: "grid",
    gridGap: "5px",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    justifyItems: "center",
    gridAutoFlow: "dense",
    justifyContent: "center",
  };
  const holderDiv = {
    minWidth: "100px",
    minHeight: "150px",
  };

  const handleSearch = async () => {
    if (searchTerm === "") {
      dispatch(setSearchResults([]));
      return;
    }

    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const response = await fetch(
        `http://localhost:3000/api/search?q=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();

      if ("message" in data) {
        dispatch(setSearchResults([]));
        dispatch(setError(data.message));
      } else {
        dispatch(setSearchResults(data));
      }
    } catch (error) {
      dispatch(setError("Error fetching search results"));
      dispatch(setSearchResults([]));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <section className="text-center">
      <Link className="font-bold" to="..">
        <ion-icon name="arrow-back-sharp"></ion-icon> Go Back
      </Link>
      <form
        className="w-full flex flex-col mx-auto rounded-md p-3"
        onSubmit={handleFormSubmit}
      >
        <input
          type="search"
          name="search"
          id="search"
          required
          placeholder="Enter Book name"
          className="searchBar text-black w-full py-[12px] px-[20px] my-[8px] mx-[0] inline-block border border-black rounded"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-red-600 text-white py-[14px] px-[30px] font-bold my-[8px] mx-0 border-none rounded cursor-pointer self-center"
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {searchResults.length > 0 && (
        <section>
          <button
            onClick={() => {
              dispatch(setSearchTerm(""));
              dispatch(setSearchResults([]));
            }}
          >
            clear results
          </button>
        </section>
      )}
      <section className="text-center">
        {error && <p>Error: {error}</p>}
      </section>
      <section className="text-center">
        {searchTerm.length === 0 && !error && <p>Search Books</p>}
      </section>
      {searchResults.length > 0 && (
        <div>
          <h2>
            Search Results{" "}
            <span className="font-bold text-2xl">{`"${searchTerm}"`}</span>
          </h2>
          <div className="container mt-5">
            {searchResults.map((result) => (
              <div key={result.id} className="my-3">
                <Link to={`/${result.id}`}>
                  <h3 className=" text-xl">
                    {result.name} by {result.author}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Search;
