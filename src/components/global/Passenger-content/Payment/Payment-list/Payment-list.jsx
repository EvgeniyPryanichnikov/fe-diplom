import React from 'react'
import s from './Payment-list.module.scss'
import PersonalDataBlock from './Personal-data-block/Personal-data-block'
import PaymentMethodBlock from './Payment-method-block/Payment-method-block'

const PaymentList = () => {
  return (
    <div className={s.paymentList}>
      <div className={s.header}>
        Персональные данные
      </div>

      <PersonalDataBlock />

      <div className={s.header}>
        Способ оплаты
      </div>

      <PaymentMethodBlock />
    </div>
  )
}

export default PaymentList