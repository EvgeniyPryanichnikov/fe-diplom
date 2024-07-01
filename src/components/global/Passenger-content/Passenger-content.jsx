import React from 'react'
import s from './Passenger-content.module.scss'
import TripDetails from './Trip-details.jsx/Trip-details'

const PassengerContent = () => {
  return (
    <div className={s.passengerContent}>
      <TripDetails />
    </div>
  )
}

export default PassengerContent