/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/${book.id}`}>
      <img
        width={100}
        className="book-list-img"
        src={book.imageUrl}
        alt={book.imageUrl}
      />
      <h3 className="h5">{book.name}</h3>
      <p>
        <i>{book.author}</i>
      </p>
    </Link>
  );
};

export default BookCard;
