import {combineReducers, configureStore} from '@reduxjs/toolkit'
import ticketsSlice from "./slices/ticketsSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['search']
};

const rootReducer = combineReducers({
  tickets: ticketsSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store);
