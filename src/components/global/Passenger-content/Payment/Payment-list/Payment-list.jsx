import React, {useEffect} from 'react'
import s from './Payment-list.module.scss'
import PersonalDataBlock from './Personal-data-block/Personal-data-block'
import PaymentMethodBlock from './Payment-method-block/Payment-method-block'
import {initUser} from "../../../../../store/slices/ticketsSlice";
import {useDispatch} from "react-redux";

const PaymentList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initUser());
  }, []);
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
