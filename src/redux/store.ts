import { filterSlice } from "./slices/filter/filterSlice";
import { booksSlice } from "./slices/books/booksSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    filter: filterSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
