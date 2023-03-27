export interface Location {
  id: number;
  name: string;
  status: string;
}

export interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  program: number;
  location: string;
}

export interface Camera {
  id: number;
  status: string;
  location: string;
}

export const ActionTypes = {
  FETCH_LOCATIONS_REQUEST: 'FETCH_LOCATIONS_REQUEST',
  FETCH_LOCATIONS_SUCCESS: 'FETCH_LOCATIONS_SUCCESS',
  FETCH_LOCATIONS_FAILURE: 'FETCH_LOCATIONS_FAILURE',
  FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',
};

export type AppState = {
  locations: Location[];
  products: Products[];
};

export const FETCH_LOCATIONS_REQUEST = 'FETCH_LOCATIONS_REQUEST';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export type Action =
  | { type: typeof ActionTypes.FETCH_LOCATIONS_REQUEST }
  | { type: typeof ActionTypes.FETCH_LOCATIONS_SUCCESS; payload: Location[] }
  | { type: typeof ActionTypes.FETCH_LOCATIONS_FAILURE; payload: string }
  | { type: typeof ActionTypes.FETCH_PRODUCTS_REQUEST }
  | { type: typeof ActionTypes.FETCH_PRODUCTS_SUCCESS; payload: Products[] }
  | { type: typeof ActionTypes.FETCH_PRODUCTS_FAILURE; payload: string };


export default {
  ActionTypes,
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
};


export type CarWash = {
  locationId: string;
  productId: string;
};

export type CarWashState = {
  activeWashes: CarWash[];
};

export const START_WASH = "START_WASH";
export const STOP_WASH = "STOP_WASH";

export interface StartWashAction {
  type: typeof START_WASH;
}

export interface StopWashAction {
  type: typeof STOP_WASH;
  payload: string;
}

export type CarWashActionTypes = StartWashAction | StopWashAction;