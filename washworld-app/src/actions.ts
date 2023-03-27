import { Dispatch } from 'redux';
import axios from 'axios';
import { FETCH_LOCATIONS_FAILURE, FETCH_LOCATIONS_REQUEST, FETCH_LOCATIONS_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, Products } from './types';


// Locations actions
export const fetchLocationsRequest = () => {
  return {
    type: FETCH_LOCATIONS_REQUEST,
  };
};

export const fetchLocationsSuccess = (locations: Location[]) => {
  return {
    type: FETCH_LOCATIONS_SUCCESS,
    payload: locations,
  };
};

export const fetchLocationsFailure = (error: string) => {
  return {
    type: FETCH_LOCATIONS_FAILURE,
    payload: error,
  };
};

export const fetchLocations = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchLocationsRequest());
    axios
      .get('https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/locations')
      .then((response) => {
        const locations = response.data.response.locations;
        dispatch(fetchLocationsSuccess(locations));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchLocationsFailure(errorMsg));
      });
  };
};

// Products actions
export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products: Products[]) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error: string) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get('https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/products/:BV99123')
      .then((response) => {
        const products = response.data.response.products;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductsFailure(errorMsg));
      });
  };
};


export const startTimer = (timerId: NodeJS.Timeout): TimerAction => ({
  type: START_TIMER,
  timerId,
});

export const stopTimer = (): TimerAction => ({
  type: STOP_TIMER,
});