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

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const reducers = combineReducers({
  filterSlice: persistReducer(persistConfig, filterSliceReducer),
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persister = persistStore(store);
export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
