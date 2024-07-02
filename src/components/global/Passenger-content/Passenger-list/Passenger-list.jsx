import React from 'react'
import s from './Passenger-list.module.scss'
import PassengerItem from './Passenger-item/Passenger-item'

const PassengerList = () => {
  return (
    <div className={s.passengerList}>
      <PassengerItem />
    </div>
  )
}

export default PassengerList