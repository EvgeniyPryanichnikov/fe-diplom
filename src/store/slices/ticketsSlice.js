import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  trains: [],
  totalCount: null,
  cities: {
    from: null,
    to: null
  },
  selectedTrain: null, //Записываю сюда данные выбранного поезда, что бы вставить их после роутинга на страницу выбора вагона и мест ??
  filters: {
    have_express: null,
    have_wifi: null,
    have_fourth_class: null,
    have_third_class: null,
    have_first_class: null,
    have_second_class: null,
    limit: '5',
    sort_title: 'времени',
    sort: 'date',
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
      state.filters.from_city_id = action.payload._id
      state.cities.from = action.payload
    },
    setCityTo: (state, action) => {
      state.filters.to_city_id = action.payload._id
      state.cities.to = action.payload
    },
    setDateFrom: (state, action) => {
      state.filters.date_start = action.payload
    },
    setDateTo: (state, action) => {
      state.filters.date_end = action.payload
    },
    setSortValue: (state, action) => {
      state.filters.sort_title = action.payload.title
      state.filters.sort = action.payload.value
    },
    setLimit: (state, action) => {
      state.filters.limit = action.payload
    },
    setSecondClass: (state, action) => {
      state.filters.have_second_class = action.payload
    },
    setFirstClass: (state, action) => {
      state.filters.have_first_class = action.payload
    },
    setThirdClass: (state, action) => {
      state.filters.have_third_class = action.payload
    },
    setFourthClass: (state, action) => {
      state.filters.have_fourth_class = action.payload
    },
    setWiFi: (state, action) => {
      state.filters.have_wifi = action.payload
    },
    setExpress: (state, action) => {
      state.filters.have_express = action.payload
    },
    setSelectedTrain: (state, action) => {
      state.selectedTrain = action.payload
    },
    updateTicketsInfo: (state, action) => {
      const {items, total_count} = action.payload
      state.trains = items
      state.totalCount = total_count
    }
  }
})

export const { 
  setCityFrom, 
  setCityTo, 
  setDateFrom, 
  setDateTo, 
  updateTicketsInfo, 
  setSortValue, 
  setLimit, 
  setSecondClass, 
  setFirstClass, 
  setThirdClass, 
  setFourthClass,
  setWiFi,
  setExpress,
  setSelectedTrain
} = ticketsSlice.actions

export default ticketsSlice.reducer


