import React from 'react'
import s from './CheckAllInfo.module.scss'
import TrainInfo from './TrainInfo/TrainInfo'
import PassengerInfo from './PassengerInfo/PassengerInfo'
import PaymentInfo from './PaymentInfo/PaymentInfo'
import {useNavigate} from "react-router-dom"


const CheckAllInfo = () => {
  const navigate = useNavigate();

  function handleOrder() {
    //   запрос на сервер /order
    navigate("/order-success", {replace: true})
  }

  return (
    <div className={s.allInfo}>
      <TrainInfo/>

      <PassengerInfo/>

      <PaymentInfo/>

      <div className={s.btnBlock}>
        <button onClick={handleOrder} className={s.btn}>Далее</button>
      </div>
    </div>
  )
}

export default CheckAllInfo
