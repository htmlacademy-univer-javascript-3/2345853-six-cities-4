import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, cityChange, sortTypeSelect, highlightMarker, setLoadingStatus, setCity, setAuthStatus, setAuthor } from './action';
import { AuthStatus, LoadingStatus, sortTypes } from '../components/constants/all-constants';
import { City, defaultCity } from '../types/city';
import { Offer } from '../types/offer';
import { Author } from '../types/review';

type StateType = {
  city: City;
  offers: Offer[];
  sortType: sortTypes;
  loadingStatus: LoadingStatus;
  selectedMarker: { id: string } | null;
  authStatus: AuthStatus;
  author?: Author;
};

const initialState: StateType = {
  city: defaultCity,
  offers: [],
  sortType: sortTypes.Popular,
  loadingStatus: LoadingStatus.Success,
  selectedMarker: null,
  authStatus: AuthStatus.Unknown,
  author: undefined
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, { payload }) => {
      state.city = {
        ...state.city,
        name: payload,
      };
    })
    .addCase(loadOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(setCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setLoadingStatus, (state, { payload }) => {
      state.loadingStatus = payload;
    })
    .addCase(sortTypeSelect, (state, { payload }) => {
      state.sortType = payload;
    })
    .addCase(highlightMarker, (state, { payload }) => {
      state.selectedMarker = payload;
    })
    .addCase(setAuthStatus, (state, { payload }) => {
      state.authStatus = payload;
    })
    .addCase(setAuthor, (state, { payload }) => {
      state.author = payload;
    });
});

export { reducer };