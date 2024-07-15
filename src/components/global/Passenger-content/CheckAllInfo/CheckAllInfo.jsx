import React from 'react'
import s from './CheckAllInfo.module.scss'
import TrainInfo from './TrainInfo/TrainInfo'
import PassengerInfo from './PassengerInfo/PassengerInfo'
import PaymentInfo from './PaymentInfo/PaymentInfo'


const CheckAllInfo = () => {
  return (
    <div className={s.allInfo}>
      <TrainInfo />

      <PassengerInfo />

      <PaymentInfo />
    </div>
  )
}

export default CheckAllInfo