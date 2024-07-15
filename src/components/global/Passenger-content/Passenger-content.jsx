import React from 'react'
import { Route, Routes } from "react-router-dom"
import s from './Passenger-content.module.scss'
import TripDetails from './Trip-details.jsx/Trip-details'
import Payment from './Payment/Payment'
import PassengerList from "./Passenger-list/Passenger-list"
import CheckAllInfo from './CheckAllInfo/CheckAllInfo'

const PassengerContent = () => {
  return (
    <div className={s.passengerContent}>
      <TripDetails />

    
      <Routes>
        <Route path='payment' element={<CheckAllInfo />} />
        {/* <Route path='payment' element={<Payment />} /> */}
        <Route path='*' element={<PassengerList />}/>
      </Routes>
    </div>
  )
}

export default PassengerContent
