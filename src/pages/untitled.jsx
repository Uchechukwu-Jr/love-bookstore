import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSearchTerm } from "../features/searchTermSlice";
import { setSearchResults } from "../features/searchResultsSlice";
import { Link } from "react-router-dom";

import { setLoading } from "../features/loadingSlice";
import { setError } from "../features/errorSlice";
const Search = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.searchTerm);
    const searchResults = useSelector(state => state.searchResults);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    const holder = {
        display: "grid",
        gridGap: "5px",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        justifyItems: "center",
        gridAutoFlow: "dense",
        justifyContent: "center"
    };
    const holderDiv = {
        minWidth: "100px",
        minHeight: "150px"
    };

    useEffect(() => {
        const handleSearch = async () => {
            if (searchTerm === "") {
                dispatch(setSearchResults([])); // Clear previous search results
                return;
            }

            try {
                dispatch(setLoading(true));
                dispatch(setError(null));

                const response = await fetch(
                    `http://localhost:3000/search?q=${searchTerm}`
                );
                const data = await response.json();

                if ("message" in data) {
                    dispatch(setSearchResults([])); // Clear previous search results
                    dispatch(setError(data.message));
                } else {
                    dispatch(setSearchResults(data));
                }
            } catch (error) {
                dispatch(setError("Error fetching search results"));
                dispatch(setSearchResults([])); // Clear previous search results
            } finally {
                dispatch(setLoading(false));
            }
        };

        handleSearch();
    }, [searchTerm, dispatch]);

    const handleInputChange = e => {
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <section>
            <form
                className="w-full flex flex-col mx-auto rounded-md p-3"
                onSubmit={e => {
                    e.preventDefault();
                    // You can dispatch an action here if needed
                }}
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
                            setSearchTerm("");
                            setSearchResults([]);
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
                <section className="text-center">
                    {searchTerm && searchResults.length === 0 && !error && (
                        <p>No results found for {searchTerm}</p>
                    )}
                </section>
                {searchTerm.length === 0 && !error && <p>Search Books</p>}
            </section>
            {/* Display search results */}
            {searchResults.length > 0 && (
                <div>
                    <h2>Search Results</h2>
                    <div style={holder}>
                        {searchResults.map(result => (
                            <div
                                key={result.id}
                                style={holderDiv}
                                className=" text-left"
                            >
                                <Link to={`/${result.id}`}>
                                    <div
                                        style={{
                                            minWidth: "100px",
                                            minHeight: "100px",
                                            backgroundImage: `url('${result.imageUrl}')`
                                        }}
                                    ></div>
                                    <h1 className=" text-base font-bold">
                                        {result.name}
                                    </h1>
                                    <p className=" text-xm">
                                        {result.category}
                                    </p>
                                    <p className=" text-xm">{result.status}</p>
                                    <p className=" text-xm">{result.size}</p>
                                    <p className=" text-xm font-bold">
                                        {result.price}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Rest of your component code */}
        </section>
    );
};

export default Search;
