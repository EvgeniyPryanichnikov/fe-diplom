
import { configureStore } from '@reduxjs/toolkit'
import ticketsSlice from "./slices/ticketsSlice";

export const store = configureStore({
  reducer: {
    tickets: ticketsSlice
  },
})
