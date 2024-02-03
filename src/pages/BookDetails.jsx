import { useLoaderData, Link, ScrollRestoration } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  return (
    <div className="container">
      <ScrollRestoration />
      <nav
        aria-label="breadcrumb"
        className="bg-[aliceblue] px-4 py-2 mb-4 flex items-center flex-wrap"
      >
        <ul className="flex items-center">
          <li className="inline-flex items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-500">
              <svg
                className="hover:text-blue-500 w-5 h-auto fill-current mx-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
              </svg>
            </Link>

            <svg
              className="w-5 h-auto fill-current mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>

          <li className="inline-flex items-center">
            <Link
              to={`/authors/${book.author}`}
              className="text-gray-600 hover:text-blue-500"
            >
              {book.author}
            </Link>

            <svg
              className="w-5 h-auto fill-current mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>

          <li
            aria-current="page"
            className="inline-flex underline items-center"
          >
            <p className="text-gray-600 cursor-default">{book.name}</p>
          </li>
        </ul>
      </nav>
      <div className="container">
        <h1 className="text-center font-bold text-2xl">
          {book.name} <span className=" italic">by</span> {book.author}
        </h1>
        <div className="mt-10">
          <article>{book.description}</article>
        </div>
        <div className="mt-5 flex flex-col gap-5 md:flex-row w-full items-center">
          <div>
            <img src={book.imageUrl} className="w-full" alt={book.name} />
          </div>
          <div className="md:self-start w-full">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "10px",
              }}
              className=" border-t-2 border-b-2 p-2"
            >
              <tbody className="w-full">
                <tr className="border-b-2">
                  <td className=" border-l-2">Author:</td>
                  <td className=" border-l-2">{book.author}</td>
                </tr>
                {book.series && (
                  <tr className="border-b-2">
                    <td className=" border-l-2">Series:</td>
                    <td className=" border-l-2">{`${book.series.seriesTitle} - Book ${book.series.numberInSeries}`}</td>
                  </tr>
                )}

                <tr className="border-b-2">
                  <td className=" border-l-2">Release Date:</td>
                  <td className=" border-l-2">{`${book.releaseInfo.month} ${book.releaseInfo.day}, ${book.releaseInfo.year}`}</td>
                </tr>
                <tr className="border-b-2">
                  <td className=" border-l-2">Genre:</td>
                  <td className=" border-l-2">{book.genre.join(", ")}</td>
                </tr>
                <tr className="border-b-2">
                  <td className=" border-l-2">ISBN:</td>
                  <td className=" border-l-2">{book.ISBN}</td>
                </tr>
                <tr className="border-b-2">
                  <td className=" border-l-2">ASIN:</td>
                  <td className=" border-l-2">{book.ASIN}</td>
                </tr>
                <tr className="border-b-2">
                  <td className="border-l-2 pr-2">Edition Language:</td>
                  <td className=" border-l-2">{book.editionLanguage}</td>
                </tr>
                <tr className="border-b-2">
                  <td className=" border-l-2">Price:</td>
                  <td className=" border-l-2">${book.price.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className=" border-l-2">Status:</td>
                  <td className=" border-l-2">{book.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-grid gap-2 my-5">
          <button className="btn btn-primary">Get This Book</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
