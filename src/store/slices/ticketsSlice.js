import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  trains: [],
  totalCount: null,
  cities: {
    from: null,
    to: null
  },
  // selectedTrain: null,
  selectedTrain: {
    departure: null,
    arrival: null
  },
  seatsInfo: null,
  filters: {
    have_express: null,
    have_wifi: null,
    have_fourth_class: null,
    have_third_class: null,
    have_first_class: null,
    have_second_class: null,
    limit: '5',
    sort: 'date',
    from_city_id: null,
    to_city_id: null,
    date_start: "",
    date_end: "",
  },
  persons__count: {
    adult: 0,
    child: 0,
    withoutPlace: 0
  },
  class_type: "",
  availableCoachNames: [],
  selectedCoachInfo: {
    allSeats: [],
    coach__name: "",
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
      // state.filters.sort_title = action.payload.title
      state.filters.sort = action.payload;
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
    // setSelectedTrain: (state, action) => {
    //   state.selectedTrain = action.payload
    // },
    setSelectedTrainFrom: (state, action) => {
      state.selectedTrain.departure = action.payload
    },
    setSelectedTrainTo: (state, action) => {
      state.selectedTrain.arrival = action.payload
    },
    setSeatInfo: (state, action) => {
      state.seatsInfo = action.payload
    },
    updateTicketsInfo: (state, action) => {
      const {items, total_count} = action.payload
      state.trains = items
      state.totalCount = total_count
    },
    setPersonsCount: (state, action) => {
      const {type, count} = action.payload
      state.persons__count[type] = count;
    },
    setClassType: (state, action) => {
      state.class_type = action.payload;
      const aviableInSelectedClass = state.seatsInfo.filter(el => el.coach.class_type === action.payload);
      const firstCoach = aviableInSelectedClass?.[0];
      state.availableCoachNames = aviableInSelectedClass?.map(el => el.coach.name);
      if (firstCoach) {
        state.selectedCoachInfo.coach__name = firstCoach.coach.name;
        state.selectedCoachInfo.allSeats = aviableInSelectedClass.filter(el => el.coach.name === firstCoach.coach.name);
      }
    },
    setCoachName: (state, action) => {
      state.selectedCoachInfo.coach__name = action.payload;
      state.selectedCoachInfo.allSeats = state.seatsInfo.filter(el => el.coach.name === action.payload);
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
  // setSelectedTrain,
  setSelectedTrainFrom,
  setSelectedTrainTo,
  setSeatInfo,
  setPersonsCount,
  setClassType,
  setCoachName
} = ticketsSlice.actions

export default ticketsSlice.reducer


