import React from 'react'
import s from './Passenger-content.module.scss'
import TripDetails from './Trip-details.jsx/Trip-details'
import PassengerList from './Passenger-list/Passenger-list'

const PassengerContent = () => {
  return (
    <div className={s.passengerContent}>
      <TripDetails />

      <PassengerList />
    </div>
  )
}

export default PassengerContent