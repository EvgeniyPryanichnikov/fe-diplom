import React from 'react'
import {useSelector} from "react-redux"
import s from './PaymentInfo.module.scss'

const PaymentInfo = () => {
  const payment_method = useSelector(state => state.tickets.userInfo.payment_method)
  let formattedMethod 
  if (payment_method == 'online') {
    formattedMethod = 'Онлайн'
  } else {
    formattedMethod = 'Наличными'
  }

  return (
    <div className={s.paymentInfo}>
      <div className={s.titleBlock}>
        <span className={s.title}>Способ оплаты</span>
      </div>

      <div className={s.contentBlock}>
        <span className={s.value}>{formattedMethod}</span>
        <div className={s.changeBlock}> 
          <div className={s.changeBtn}>Изменить</div>
        </div>
      </div> 
    </div>
  )
}

export default PaymentInfo