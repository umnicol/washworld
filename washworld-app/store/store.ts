import { timerReducer } from '<washworld>/reducers';
import { Products } from '<washworld>/types';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux';


export interface AppState {
  locations: Location[];
  products: Products[];
}

const initialState: AppState = {
  locations: [],
  products: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<Location[]>) => {
      state.locations = action.payload;
    },
    setProducts: (state, action: PayloadAction<Products[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setLocations, setProducts } = appSlice.actions;

export const store = configureStore({
  reducer: appSlice.reducer,
});

const rootReducer = combineReducers({
  timer: timerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;


// import { Products } from '<washworld>/types';
// import { configureStore, createSlice } from '@reduxjs/toolkit';


// interface RootState {
//   locations: Location[];
//   products: Products[];
// }

// const initialState: RootState = {
//   locations: [],
//   products: [],
// };

// const locationsSlice = createSlice({
//   name: 'locations',
//   initialState: [] as Location[],
//   reducers: {
//     setLocations: (_, action) => action.payload,
//   },
// });

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: [] as Products[],
//   reducers: {
//     setProducts: (_, action) => action.payload,
//   },
// });

// export const { setLocations } = locationsSlice.actions;
// export const { setProducts } = productsSlice.actions;

// export default configureStore({
//   reducer: {
//     locations: locationsSlice.reducer,
//     products: productsSlice.reducer,
//   },
// });
