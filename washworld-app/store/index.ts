// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './store';

// export const store = configureStore({
//   reducer: {
//     locations: locationReducer,
//     products: productReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { locationsReducer, productsReducer } from '<washworld>/reducers';
import { combineReducers, configureStore } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
  locations: locationsReducer,
  products: productsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

