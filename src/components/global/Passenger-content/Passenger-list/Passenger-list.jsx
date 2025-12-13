import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import s from './Passenger-list.module.scss'
import PassengerItem from './Passenger-item/Passenger-item'
import PassengerAddBlock from './Passenger-add-block/Passenger-add-block'
import { useNavigate } from "react-router-dom"
import {addNewPassenger, initPassengers} from "../../../../store/slices/ticketsSlice"

const PassengerList = () => {
  const navigate = useNavigate()

  function onBtnClick() {
    navigate('payment')
  }

  const dispatch = useDispatch();

  function handleAddClick() {
    dispatch(addNewPassenger());
  }

  useEffect(() => {
    dispatch(initPassengers());
  }, []);

  const passengers = useSelector(state => state.tickets.passengersInfo);

  return (
    <div className={s.passengerList}>

      {passengers.map((item, index) => (
        <PassengerItem key={index} data={item} index={index}/>
      ))}

      <PassengerAddBlock handleClick={handleAddClick}/>

      <div className={s.btnBlock}>
        <button onClick={() => onBtnClick()} className={s.btn}>Далее</button>
      </div>
    </div>
  )
}

export default PassengerList
