import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setUserInfo} from "../../../../../../store/slices/ticketsSlice"
import s from './Payment-method-block.module.scss'
import CheckboxInput from '../../../../../Ui/CheckboxInput/CheckboxInput'

const PaymentMethodBlock = () => {
  const userInfo = useSelector(state => state.tickets.userInfo)
  const {
    payment_method
  } = userInfo

  const dispatch = useDispatch()
  function handleInputChange(option, value, id) {
    dispatch(setUserInfo({value, option, id}))
  }

  return (
    <div className={s.paymentMethod}>
      <div className={s.onlineBlock}>
        <CheckboxInput label={'Онлайн'} id={'online'} option={'payment_method'} handleInputChange={handleInputChange}/>

        <div className={s.itemsPay}>
          <span className={s.item}>Банковской картой</span>
          <span className={s.item}>PayPal</span>
          <span className={s.item}>Visa QIWI Wallet</span>
        </div>
      </div>

      <div className={s.cashBlock}>
        <CheckboxInput label={'Наличными'} id={'cash'} option={'payment_method'} handleInputChange={handleInputChange}/>
      </div>
    </div>
  )
}

export default PaymentMethodBlock