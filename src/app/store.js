import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/products/productSlice"
import blogReducer from  "../features/blogs/blogSlice"
export const store = configureStore({
  reducer: {
    product: productReducer,
    blog : blogReducer,
  },
});
