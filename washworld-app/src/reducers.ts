import { Action, ActionTypes, Location, Products } from "./types";

export interface LocationsState {
  status: any;
  locations: Location[];
  loading: boolean;
  error: string | null;
}

export interface ProductsState {
  products: Products[];
  loading: boolean;
  error: string | null;
}

export const initialLocationsState: LocationsState = {
  locations: [],
  loading: false,
  error: null,
};

export const initialProductsState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const locationsReducer = (
  state: LocationsState = initialLocationsState,
  action: Action
): LocationsState => {
  switch (action.type) {
    case ActionTypes.FETCH_LOCATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productsReducer = (
  state: ProductsState = initialProductsState,
  action: Action
): ProductsState => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


import { START_TIMER, STOP_TIMER, TimerState, TimerAction } from './types';

const initialState: TimerState = {
  seconds: 900,
  timerId: null,
};

export const timerReducer = (state = initialState, action: TimerAction): TimerState => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        timerId: action.timerId,
      };
    case STOP_TIMER:
      clearInterval(state.timerId!);
      return {
        ...state,
        timerId: null,
        seconds: 900,
      };
    default:
      return state;
  }
};