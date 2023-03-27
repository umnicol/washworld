import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '<washworld>/types';

type ProductsState = {
  products: Products[] | undefined;
  status: 'idle' | 'loading' | 'failed';
  error: string | undefined;
};

const initialState: ProductsState = {
  products: undefined,
  status: 'idle',
  error: undefined,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<Products[]>) => {
      state.products = action.payload;
      state.status = 'idle';
      state.error = undefined;
    },
    setProductLoading: (state) => {
      state.status = 'loading';
    },
    setProductFailed: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setProductData, setProductLoading, setProductFailed } = productSlice.actions;

export default productSlice.reducer;
