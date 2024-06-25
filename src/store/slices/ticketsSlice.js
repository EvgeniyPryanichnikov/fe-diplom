import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tickets: [],
  totalCount: null,
  cities: {
    from: null,
    to: null
  },
  filters: {
    from_city_id: null,
    to_city_id: null,
    date_start: "",
    date_end: "",
  }
}

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setCityFrom: (state, action) => {
      state.filters.from_city_id = action.payload._id;
      state.cities.from = action.payload;
    },
    setCityTo: (state, action) => {
      state.filters.to_city_id = action.payload._id;
      state.cities.to = action.payload;
    },
    setDateFrom: (state, action) => {
      state.filters.date_start = action.payload;
    },
    setDateTo: (state, action) => {
      state.filters.date_end = action.payload;
    },
    updateTicketsInfo: (state, action) => {
      const {items, total_count} = action.payload;
      state.tickets = items;
      state.totalCount = total_count;
    }
  },
})

export const { setCityFrom, setCityTo, setDateFrom, setDateTo, updateTicketsInfo} = ticketsSlice.actions

export default ticketsSlice.reducer


