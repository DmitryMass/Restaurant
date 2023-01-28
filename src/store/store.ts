import { bookATableApi } from './api/bookATableApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterSliceReducer } from './slices/filterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const reducers = combineReducers({
  filterSlice: persistReducer(persistConfig, filterSliceReducer),
  [bookATableApi.reducerPath]: bookATableApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(bookATableApi.middleware),
});

setupListeners(store.dispatch);
export const persister = persistStore(store);
export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
