import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  activeCategory: "",
  search: "",
  sort: "relevance",
  currentPage: '0',
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setActiveCategory, setSort, setCurrentPage, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
