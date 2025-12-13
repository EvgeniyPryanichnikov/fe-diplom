import React from 'react'
import s from './Payment.module.scss'
import PaymentList from './Payment-list/Payment-list'
import {useNavigate} from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  function handleBuy() {
  //   ...
    navigate("/trains/passenger/check", {replace: true})
  }
  return (
    <div className={s.payment}>
      <PaymentList />

      <div className={s.btnBlock}>
        <button className={s.btn} onClick={handleBuy}>
          КУПИТЬ БИЛЕТЫ
        </button>
      </div>
    </div>
  )
}

export default Payment
