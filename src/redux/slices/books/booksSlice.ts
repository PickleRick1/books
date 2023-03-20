import { BookType } from "./types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { booksAPI } from "../../../api/api";
import { BookSliceState, Status } from "./types";
const initialState: BookSliceState = {
  kind: "",
  items: [],
  status: Status.LOADING,
  totalItems: 0,
};
export const fetchBooks = createAsyncThunk<
  BookSliceState,
  Record<string, string>,
  { rejectValue: string }
>("books/fetchBooks", async (data, thunkAPI) => {
  const { search, activeCategory, sort, currentPage } = data;
  try {
    const res = await booksAPI.getBooks(
      search,
      activeCategory,
      sort,
      currentPage
    );
    return res.data;
  } catch (e) {
    const errors = thunkAPI.rejectWithValue;
    return errors;
  }
});
export const fetchMoreBooks = createAsyncThunk<
  BookSliceState,
  Record<string, string>,
  { rejectValue: string }
>("books/fetchMoreBooks", async (data, thunkAPI) => {
  const { search, activeCategory, sort, currentPage } = data;
  try {
    const res = await booksAPI.getBooks(
      search,
      activeCategory,
      sort,
      currentPage
    );
    return res.data;
  } catch (e) {
    const errors = thunkAPI.rejectWithValue;
    return errors;
  }
});
export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<BookSliceState>) {
      state.items = action.payload.items;
    },
    setMoreItems(state, action: PayloadAction<BookType[]>) {
      state.items = [...state.items, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.kind = action.payload.kind;
      state.totalItems = action.payload.totalItems;
      state.items = action.payload.items;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
    builder.addCase(fetchMoreBooks.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchMoreBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.kind = action.payload.kind;
      state.totalItems = state.totalItems;
      state.items = [...state.items, ...action.payload.items];
    });
    builder.addCase(fetchMoreBooks.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems, setMoreItems } = booksSlice.actions;

export default booksSlice.reducer;
