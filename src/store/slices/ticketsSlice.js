import {createSlice} from '@reduxjs/toolkit'
import {useSelector} from "react-redux";

const initialState = {
  trains: [],
  totalCount: null,
  cities: {
    from: null,
    to: null
  },
  selectedTrain: {
    departure: null,
    arrival: null
  },
  seatsInfoFrom: null,
  seatsInfoTo: null,
  selectedSeatsFrom: [],
  selectedSeatsTo: [],
  selectedOptionsFrom: [],
  selectedOptionsTo: [],
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
  persons__count_from: {
    adult: 0,
    child: 0,
    withoutPlace: 0
  },
  persons__count_to: {
    adult: 0,
    child: 0,
    withoutPlace: 0
  },

  passengersInfo: [],

  userInfo: {
    first_name: "",
    last_name: "",
    patronymic: "",
    phone: "",
    email: "",
    payment_method: "", 
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
  },
  totalPrice: 0
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
      state.seatsInfoTo = action.payload
    },
    updateTicketsInfo: (state, action) => {
      const {items, total_count} = action.payload
      state.trains = items
      state.totalCount = total_count
    },
    setPersonsCountFrom: (state, action) => {
      const {type, count} = action.payload
      state.persons__count_from[type] = +count;
    },
    setPersonsCountTo: (state, action) => {
      const {type, count} = action.payload
      state.persons__count_to[type] = count;
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
      const {direction, coachFullName} = action.payload;
      if (direction === 'departure') {
        state.coachsFromInfo.selectedCoachInfo.coach__name = coachFullName;
        state.coachsFromInfo.selectedCoachInfo.allSeats = state.seatsInfoFrom.filter(el => el.coach.name === coachFullName);
        state.selectedSeatsFrom = [];
      } else {
        state.coachsToInfo.selectedCoachInfo.coach__name = coachFullName;
        state.coachsToInfo.selectedCoachInfo.allSeats = state.seatsInfoTo.filter(el => el.coach.name === coachFullName);
        state.selectedSeatsTo = [];
      }
    },
    setSelectedSeatsFrom: (state, action) => {
      const selectedClass = state.coachsFromInfo.selectedCoachInfo.allSeats[0]?.coach.class_type;

      let price;

      switch (selectedClass) {
        case 'first':
          price = state.coachsFromInfo.selectedCoachInfo.allSeats[0]?.coach.price;
          break;
          case 'second':
          price = state.coachsFromInfo.selectedCoachInfo.allSeats[0]?.coach[action.payload % 2 === 0 ? 'top_price' : 'bottom_price'];
          break;
          case 'third':
            const ind = action.payload;
            if (ind > 32) {
              price = state.coachsFromInfo.selectedCoachInfo.allSeats[0]?.coach.side_price;
            } else {
              price = state.coachsFromInfo.selectedCoachInfo.allSeats[0]?.coach[action.payload % 2 === 0 ? 'top_price' : 'bottom_price'];
            }
          break;
          case 'fourth':
            price = state.coachsFromInfo.selectedCoachInfo.allSeats[0]?.coach[action.payload % 2 === 0 ? 'top_price' : 'bottom_price'];
          break;
      }
      let seat = {
        seat: action.payload,
        price
      }
      const isAlreadySelected = !!state.selectedSeatsFrom.find(el => el.seat === action.payload);

      if (isAlreadySelected) {
        state.selectedSeatsFrom = state.selectedSeatsFrom.filter(el => el.seat !== action.payload)
      } else {
        state.selectedSeatsFrom.push(seat);
      }

      state.totalPrice = state.selectedSeatsFrom.map(el => el.price).reduce((a, b) => a + +b, 0) + state.selectedOptionsFrom.map(el => el.price).reduce((a, b) => a + +b, 0)

    },
    setSelectedSeatsTo: (state, action) => {
      const selectedClass = state.coachsToInfo.selectedCoachInfo.allSeats[0]?.coach.class_type;

      let price;

      switch (selectedClass) {
        case 'first':
          price = state.coachsToInfo.selectedCoachInfo.allSeats[0]?.coach.price;
          break;
        case 'second':
          price = state.coachsToInfo.selectedCoachInfo.allSeats[0]?.coach[action.payload % 2 === 0 ? 'top_price' : 'bottom_price'];
          break;
        case 'third':
          const ind = action.payload;
          if (ind > 32) {
            price = state.coachsToInfo.selectedCoachInfo.allSeats[0]?.coach.side_price;
          } else {
            price = state.coachsToInfo.selectedCoachInfo.allSeats[0]?.coach[action.payload % 2 === 0 ? 'top_price' : 'bottom_price'];
          }
          break;
        case 'fourth':
          price = state.coachsToInfo.selectedCoachInfo.allSeats[0]?.coach[action.payload % 2 === 0 ? 'top_price' : 'bottom_price'];
          break;
      }
      let seat = {
        seat: action.payload,
        price
      }
      const isAlreadySelected = !!state.selectedSeatsTo.find(el => el.seat === action.payload);

      if (isAlreadySelected) {
        state.selectedSeatsTo = state.selectedSeatsTo.filter(el => el.seat !== action.payload)
      } else {
        state.selectedSeatsTo.push(seat);
      }
    },
    toggleOptions: (state, action) => {
      const {direction, optionName} = action.payload;
      if (!optionName) return;
      if (direction === 'departure') {
        const isAlreadySelected = !!state.selectedOptionsFrom.map(el => el.name).find(el => el === optionName);
        if (isAlreadySelected) {
          state.selectedOptionsFrom = state.selectedOptionsFrom.filter(el => el.name !== optionName)
        } else {
          let price = 0;

          switch (optionName) {
            case 'linens':
              price = state.coachsFromInfo.selectedCoachInfo.allSeats[0]?.coach.linens_price || 0;
              break;
            case 'wifi':
              price = state.coachsFromInfo.selectedCoachInfo.allSeats[0]?.coach.wifi_price || 0;
              break;
          }

          const option = {
            name: optionName,
            price
          }
          state.selectedOptionsFrom = [...state.selectedOptionsFrom, option]


          state.totalPrice = state.selectedSeatsFrom.map(el => el.price).reduce((a, b) => a + +b, 0) + state.selectedOptionsFrom.map(el => el.price).reduce((a, b) => a + +b, 0)

        }
      } else {
        const isAlreadySelected = !!state.selectedOptionsTo.map(el => el.name).find(el => el === optionName);
        if (isAlreadySelected) {
          state.selectedOptionsTo = state.selectedOptionsTo.filter(el => el.name !== optionName)
        } else {
          let price = 0;

          switch (optionName) {
            case 'linens':
              price = state.coachsToInfo.selectedCoachInfo.allSeats[0]?.coach.linens_price || 0;
              break;
            case 'wifi':
              price = state.coachsToInfo.selectedCoachInfo.allSeats[0]?.coach.wifi_price || 0;
              break;
          }

          const option = {
            name: optionName,
            price
          }
          state.selectedOptionsTo = [...state.selectedOptionsTo, option]
        }
      }
    },
    initPassengers: (state) => {
      if (state.passengersInfo.length) return

      const adult = state.persons__count_from.adult
      const child = state.persons__count_from.child

      const passengersAdult = Array.apply(null, Array(adult)).map((x, i) => (
        {
          age: 'Взрослый',
          firstname: '',
          lastname: '',
          patronymic: '',
          gender: true,
          birthdate: '',
          limitedMobility: null,
          document_type: 'паспорт',
          document_data: {
            series: '',
            number: '',
          },
        }
      ))

      const passengersChild = Array.apply(null, Array(child)).map((x, i) => (
        {
          age: 'Детский',
          firstname: '',
          lastname: '',
          patronymic: '',
          gender: true,
          birthdate: '',
          limitedMobility: null,
          document_type: 'свидетельство о рождении',
          document_data: {
            number: '',
          },
        }
      ))

      state.passengersInfo = [...passengersAdult, ...passengersChild]
    },
    addNewPassenger(state) {
      state.passengersInfo.push({
        age: 'Взрослый',
        firstname: '',
        lastname: '',
        patronymic: '',
        gender: true,
        birthdate: '',
        limitedMobility: null,
        document_type: 'паспорт',
        document_data: {
          series: '',
          number: '',
        },
      })
    },

    initUser: (state) => {
      if (state.userInfo.first_name || state.userInfo.last_name || state.userInfo.patronymic) return;
      const firstPassenger = state.passengersInfo[0];

        state.userInfo.first_name = firstPassenger.firstname;
        state.userInfo.last_name = firstPassenger.lastname;
        state.userInfo.patronymic = firstPassenger.patronymic;
    },
    setUserInfo(state, action) {
      const {value, option, id} = action.payload;
      if (option === 'payment_method') {
        state.userInfo.payment_method = id
      } else {
        state.userInfo[option] = value
      }
    },

    setPassengerInfo: (state, action) => {
      const {value, option, index} = action.payload;

      const passenger = state.passengersInfo[index];

      if (!passenger) return;

      switch (option) {
        case 'age':
          state.passengersInfo[index].age = value;
          break;
        case 'firstName':
          state.passengersInfo[index].firstname = value;
          break;
        case 'lastName':
          state.passengersInfo[index].lastname = value;
          break;
        case 'patronymic':
          state.passengersInfo[index].patronymic = value;
          break;
        case 'gender':
          state.passengersInfo[index].gender = value;
          break;
        case 'birthdate':
          state.passengersInfo[index].birthdate = value;
          break;
        case 'limitedMobility':
          state.passengersInfo[index].limitedMobility = value;
          break;
        case 'document_type':
          state.passengersInfo[index].document_type = value;
          break;
        case 'number':
          state.passengersInfo[index].document_data.number = value;
          break;
        case 'series':
          state.passengersInfo[index].document_data.series = value;
          break;
        default:
          break;
      }
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
  // setClassType,
  setClassTypeFrom,
  setClassTypeTo,
  setCoachName,
  setSelectedSeatsFrom,
  setSelectedSeatsTo,
  setPersonsCountFrom,
  setPersonsCountTo,
  toggleOptions,
  setPassengerInfo,
  initPassengers,
  addNewPassenger,
  initUser,
  setUserInfo
} = ticketsSlice.actions

export default ticketsSlice.reducer


