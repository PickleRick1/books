import React from "react";
import { useSelector } from "react-redux";
import {
  setActiveCategory,
  setSort,
} from "../../redux/slices/filter/filterSlice";
import { selectFilter } from "../../redux/slices/filter/selectors";
import { useAppDispatch } from "../../redux/store";
import Categories from "../Categories/Categories";
import { Search } from "../Search/Search";
import Sort from "../Sort/Sort";

export const Header: React.FC = () => {
  const { activeCategory, sort } = useSelector(selectFilter);
  const dispatch = useAppDispatch();
  const onChangeCategory = (category: string) => {
    dispatch(setActiveCategory(category));
  };
  const onChangeSort = (sort: string) => {
    dispatch(setSort(sort));
  };
  return (
    <header className="header">
      <div className="header__container container">
        <h1>Search for books</h1>
        <Search />
        <div className="header__sorts">
          <Categories
            onClickCategory={onChangeCategory}
            activeCategory={activeCategory}
          />
          <Sort sort={sort} onClickSort={onChangeSort} />
        </div>
      </div>
      <div className="header__img _ibg">
        <img
          src="https://kartinkin.net/uploads/posts/2021-07/1627110658_6-kartinkin-com-p-knizhnaya-tekstura-krasivo-8.jpg"
          alt="bg-img"
        />
      </div>
    </header>
  );
};
