import React from 'react'
import { Route, Routes } from "react-router-dom"
import s from './Passenger-content.module.scss'
import TripDetails from './Trip-details.jsx/Trip-details'
// import PassengerList from './Passenger-list/Passenger-list'
import Payment from './Payment/Payment'
import PassengerList from "./Passenger-list/Passenger-list";
import PaymentList from "./Payment/Payment-list/Payment-list";

const PassengerContent = () => {
  return (
    <div className={s.passengerContent}>
      <TripDetails />

      {/* <PassengerList />*/}
      {/*<Payment />*/}

      <Routes>
        <Route path='payment' element={<Payment />} />
        <Route path='*' element={<PassengerList />}/>
      </Routes>
    </div>
  )
}

export default PassengerContent
