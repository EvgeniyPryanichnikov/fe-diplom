import React from 'react'
import s from './Payment.module.scss'
import PaymentList from './Payment-list/Payment-list'

const Payment = () => {
  return (
    <div className={s.payment}>
      <PaymentList />

      <div className={s.btnBlock}>
        <button className={s.btn}>
          КУПИТЬ БИЛЕТЫ
        </button>
      </div>
    </div>
  )
}

export default Payment