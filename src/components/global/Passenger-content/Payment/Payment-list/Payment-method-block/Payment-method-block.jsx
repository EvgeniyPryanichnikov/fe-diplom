import React from 'react'
import s from './Payment-method-block.module.scss'
import CheckboxInput from '../../../../../Ui/CheckboxInput/CheckboxInput'

const PaymentMethodBlock = () => {
  return (
    <div className={s.paymentMethod}>
      <div className={s.onlineBlock}>
        <CheckboxInput label={'Онлайн'}/>

        <div className={s.itemsPay}>
          <span className={s.item}>Банковской картой</span>
          <span className={s.item}>PayPal</span>
          <span className={s.item}>Visa QIWI Wallet</span>
        </div>
      </div>

      <div className={s.cashBlock}>
        <CheckboxInput label={'Наличными'}/>
      </div>
    </div>
  )
}

export default PaymentMethodBlock