import React from 'react'
import s from './Passenger-list.module.scss'
import PassengerItem from './Passenger-item/Passenger-item'
import PassengerAddBlock from './Passenger-add-block/Passenger-add-block'

const PassengerList = () => {
  return (
    <div className={s.passengerList}>
      <PassengerItem />

      <PassengerAddBlock />
      
      <div className={s.btnBlock}>
        <button className={s.btn}>Далее</button>
      </div>
    </div>
  )
}

export default PassengerList