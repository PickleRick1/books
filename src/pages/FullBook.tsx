import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBooks } from "../redux/slices/books/selectors";

export const FullBook: React.FC = () => {
  const { items } = useSelector(selectBooks);
  const navigate = useNavigate();
  let { id } = useParams();
  const onClickBack = () => {
    navigate("/books");
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const currentBook = items.find((i) => i.id === id);
  const description = currentBook?.volumeInfo.description;
  const authors = currentBook?.volumeInfo?.authors?.join(", ");
  const img =
    currentBook?.volumeInfo?.imageLinks.thumbnail ||
    "http://dummyimage.com/128x184";
  const title = currentBook?.volumeInfo?.title;
  const categories = currentBook?.volumeInfo?.categories?.join("/");
  return (
    <div className="content-book">
      <div className="content-book__column content-book__column_bg">
        <div className="content-book__img">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="content-book__column content-book__column_padding">
        <div className="content-book__categories">
          <p>{categories}</p>
        </div>
        <div className="content-book__title">
          <h3>{title}</h3>
        </div>
        <div className="content-book__authors">
          <p>{authors}</p>
        </div>
        <div
          className={`content-book__${description ? "description" : "border"}`}
        >
          <p>{description}</p>
        </div>
        <button onClick={onClickBack} className="button content-book__button">
          Back
        </button>
      </div>
    </div>
  );
};
