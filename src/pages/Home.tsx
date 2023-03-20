import React from "react";
import { useSelector } from "react-redux";
import { Book } from "../componets/Book/Book";
import { Skeleton } from "../componets/Book/Skeleton";
import { MAX_RESULTS } from "../constants/constants";
import { fetchBooks, fetchMoreBooks } from "../redux/slices/books/booksSlice";
import { selectBooks } from "../redux/slices/books/selectors";
import { setCurrentPage } from "../redux/slices/filter/filterSlice";
import { selectFilter } from "../redux/slices/filter/selectors";
import { useAppDispatch } from "../redux/store";

export const Home: React.FC = () => {
  const { items, status, totalItems } = useSelector(selectBooks);
  const { search, activeCategory, sort, currentPage } =
    useSelector(selectFilter);
  const [loading, setLoading] = React.useState(false);
  const nextPage = Number(currentPage) + 1;
  const amount = nextPage * MAX_RESULTS;
  const dispatch = useAppDispatch();
  const getBooks = () => {
    dispatch(fetchBooks({ search, activeCategory, sort, currentPage }));
  };
  const onClickLoadMore = () => {
    dispatch(setCurrentPage(String(nextPage)));
    setLoading(true);
  };
  const getMoreBooks = () => {
    dispatch(fetchMoreBooks({ search, activeCategory, sort, currentPage }));
  };

  React.useEffect(() => {
    if (loading && totalItems >= amount) {
      getMoreBooks();
    }
    setLoading(false);
  }, [search, activeCategory, sort, nextPage]);
  React.useEffect(() => {
    getBooks();
    dispatch(setCurrentPage("0"));
  }, [search, activeCategory, sort]);
  if (items === undefined) {
    return (
      <div className="content__error">
        <h2>По вашему запросу ничего не найдено</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="content">
        <div className="content__top"> Found {totalItems} results</div>
        {status === "error" ? (
          <div className="content__error">
            <h2>Произошла ошибка</h2>
            <p>
              Вероятней всего, произошла ошибка на сервере
              <br />
              Пожалуйста, попробуйте позже.
            </p>
          </div>
        ) : (
          <div className="content__items">
            {status === "loading"
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : items.map((b) => <Book key={b.id} {...b} />)}
          </div>
        )}
        <div className="content__button">
          <button
            onClick={onClickLoadMore}
            className="button"
            disabled={totalItems <= amount}
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};
