/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({
  searchTerm,
  setSearchTerm,
  searchResults,
  setSearchResults,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `http://localhost:3000/search?q=${searchTerm}`
      );
      const data = await response.json();

      if ("message" in data) {
        // If the response contains a message, it means no results were found
        setError(data.message);
        setSearchResults([]); // Clear previous search results
      } else {
        setSearchResults(data);
      }
    } catch (error) {
      setError("Error fetching search results");
      setSearchResults([]); // Clear previous search results
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <form
        className="w-full flex flex-col mx-auto rounded-md p-3"
        onSubmit={handleSearch}
      >
        <label
          htmlFor="search"
          style={{ position: "absolute", left: "-9999px" }}
        >
          Search
        </label>
        <input
          type="search"
          name="search"
          id="search"
          required
          placeholder="Enter Book name"
          className="searchBar text-black w-full py-[12px] px-[20px] my-[8px] mx-[0] inline-block border border-black rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
            {searchResults.map((result) => (
              <div key={result.id} style={holderDiv} className=" text-left">
                <Link to={`/${result.id}`}>
                  <div
                    style={{
                      minWidth: "100px",
                      minHeight: "100px",
                      backgroundImage: `url('${result.imageUrl}')`,
                    }}
                  ></div>
                  <h1 className=" text-base font-bold">{result.name}</h1>
                  <p className=" text-xm">{result.category}</p>
                  <p className=" text-xm">{result.status}</p>
                  <p className=" text-xm">{result.size}</p>
                  <p className=" text-xm font-bold">{result.price}</p>
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
