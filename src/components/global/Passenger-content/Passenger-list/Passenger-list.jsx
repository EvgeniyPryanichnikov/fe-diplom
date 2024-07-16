import React, { useState } from 'react'
import { useSelector} from "react-redux"
import s from './Passenger-list.module.scss'
import PassengerItem from './Passenger-item/Passenger-item'
import PassengerAddBlock from './Passenger-add-block/Passenger-add-block'
import { useNavigate } from "react-router-dom"

const PassengerList = () => {
  const [addItem, setAddItem] = useState(false)
  const navigate = useNavigate()

  function onBtnClick() {
    navigate('payment')
  }

  function handleAddClick() {
    setAddItem(true)
    // setAddItem(false)
  }

  const adult  = useSelector(state => state.tickets.persons__count_from.adult)
  const child  = useSelector(state => state.tickets.persons__count_from.child)

  let summ = adult + child

  const passengers = Array.apply(null, Array(summ)).map(function (x, i) { return i; })
  return (
    <div className={s.passengerList}>

      {passengers.map(item => (
        <PassengerItem />
      ))}

      {addItem && <PassengerItem />}
      

      <PassengerAddBlock handleClick={handleAddClick}/>
      
      <div className={s.btnBlock}>
        <button onClick={() => onBtnClick()} className={s.btn}>Далее</button>
      </div>
    </div>
  )
}

export default PassengerList