import React from 'react'
import {useSelector} from "react-redux"
import s from './PassengerInfo.module.scss'
import { PassengerItem } from './PassengerItem/PassengerItem'
import { ReactComponent as IconRub } from '../../../../../icons/rub.svg'

const PassengerInfo = () => {
  const passengers = useSelector(state => state.tickets.passengersInfo)
  const totalPrice = useSelector(state => state.tickets.totalPrice)

  return (
    <div className={s.passengerInfo}>
      <div className={s.titleBlock}>
        <span className={s.title}>Пассажиры</span>
      </div>

      <div className={s.contentBlock}>
        <div className={s.passengersContainer}>
          {passengers.map( item => (<PassengerItem  key={item.id} item={item}/>)) }
        </div>

        <div className={s.totalContainer}>
          <div className={s.priceBlock}>
            <span className={s.value}>Всего</span>

            <div>
              <span className={s.price}>{totalPrice}</span>

              <IconRub />
            </div>
          </div> 

          <div className={s.changeBtn}>Изменить</div>
        </div>
      </div> 
    </div>
  )
}

export default PassengerInfo