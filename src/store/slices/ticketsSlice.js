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
  seatsInfoFrom: null,
  seatsInfoTo: null,
  selectedSeatsFrom: [],
  selectedSeatsTo: [],
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

  coachsFromInfo: {
    class_type: "",
    availableCoachNames: [],
    selectedCoachInfo: {
      allSeats: [],
      coach__name: "",
    }
  },

  coachsToInfo: {
    class_type: "",
    availableCoachNames: [],
    selectedCoachInfo: {
      allSeats: [],
      coach__name: "",
    }
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
    setSelectedTrainFrom: (state, action) => {
      state.selectedTrain.departure = action.payload
    },
    setSelectedTrainTo: (state, action) => {
      state.selectedTrain.arrival = action.payload
    },
    setSeatInfoFrom: (state, action) => {
      state.seatsInfoFrom = action.payload
    },
    setSeatInfoTo: (state, action) => {
      state.seatsInfoTo= action.payload
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
    setClassTypeFrom: (state, action) => {
      state.coachsFromInfo.class_type = action.payload;
      const aviableInSelectedClass = state.seatsInfoFrom.filter(el => el.coach.class_type === action.payload);
      const firstCoach = aviableInSelectedClass?.[0];
      console.log(firstCoach)
      state.coachsFromInfo.availableCoachNames = aviableInSelectedClass?.map(el => el.coach.name);
      if (firstCoach) {
        state.coachsFromInfo.selectedCoachInfo.coach__name = firstCoach.coach.name;
        state.coachsFromInfo.selectedCoachInfo.allSeats = aviableInSelectedClass.filter(el => el.coach.name === firstCoach.coach.name);
      } else {
        state.coachsFromInfo.selectedCoachInfo.coach__name = "";
        state.coachsFromInfo.selectedCoachInfo.allSeats = [];
      }

    },
    setClassTypeTo: (state, action) => {
      state.coachsToInfo.class_type = action.payload;
      const aviableInSelectedClass = state.seatsInfoTo.filter(el => el.coach.class_type === action.payload);
      const firstCoach = aviableInSelectedClass?.[0];
      state.coachsToInfo.availableCoachNames = aviableInSelectedClass?.map(el => el.coach.name);
      if (firstCoach) {
        state.coachsToInfo.selectedCoachInfo.coach__name = firstCoach.coach.name;
        state.coachsToInfo.selectedCoachInfo.allSeats = aviableInSelectedClass.filter(el => el.coach.name === firstCoach.coach.name);
      }
    },
    setCoachName: (state, action) => {
      state.selectedCoachInfo.coach__name = action.payload;
      state.selectedCoachInfo.allSeats = state.seatsInfo.filter(el => el.coach.name === action.payload); // сделать для from to
    },
    setSelectedSeatsFrom: (state, action) => {
      state.selectedSeatsFrom = action.payload
    },
    setSelectedSeatsTo: (state, action) => {
      state.selectedSeatsTo = action.payload
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
  setSelectedTrainFrom,
  setSelectedTrainTo,
  setSeatInfoFrom,
  setSeatInfoTo,
  setPersonsCount,
  // setClassType,
  setClassTypeFrom,
  setClassTypeTo,
  setCoachName,
  setSelectedSeatsFrom,
  setSelectedSeatsTo
} = ticketsSlice.actions

export default ticketsSlice.reducer


