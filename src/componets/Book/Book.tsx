import React from "react";
import { Link } from "react-router-dom";
import { BookType } from "../../redux/slices/books/types";

export const Book: React.FC<BookType> = ({ volumeInfo, id }) => {
  const authors = volumeInfo.authors?.join(", ");
  const img =
    volumeInfo?.imageLinks?.thumbnail || "http://dummyimage.com/128x184";
  const title = volumeInfo?.title;
  const category = volumeInfo.categories?.[0];
  return (
    <div className="book-block">
      <div className="book-block__column">
        <div className="book-block__img">
          <Link to={`/book/${id}`}>
            <img src={img} alt="img-book" />
          </Link>
        </div>

        <div className="book-block__categories">{category}</div>
        <Link to={`/book/${id}`}>
          <h3 className="book-block__title">{title}</h3>
        </Link>
        <div className="book-block__authors">{authors}</div>
      </div>
    </div>
  );
};
