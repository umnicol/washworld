import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from 'axios';
import { Location } from '<washworld>/types';

export const fetchLocations = createAsyncThunk('locations/fetchLocations', async () => {
  const response = await axios.get('https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn');
  return response.data as Location[];
});

interface LocationsState {
  locations: Location[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: LocationsState = {
  locations: [],
  status: 'idle',
  error: null,
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.locations = action.payload;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export const selectAllLocations = (state: RootState) => state.locations.locations;

export const selectLocationById = (state: RootState, locationId: number) =>
  state.locations.locations.find((locations) => locations.id === locationId);

export const selectLocationsStatus = (state: RootState) => state.locations.status;

export const selectLocationsError = (state: RootState) => state.locations.error;

export default locationsSlice.reducer;
