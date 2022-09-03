import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ProductsState {
  products: Array<any>;
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state: ProductsState, action: PayloadAction<Array<any>>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
