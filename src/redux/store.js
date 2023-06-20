import { configureStore } from '@reduxjs/toolkit';
import {shazamCoreAPI} from "./services/shazamCore";
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
     [shazamCoreAPI.reducerPath]: shazamCoreAPI.reducer,
    player: playerReducer,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreAPI.middleware),
});
