import React from 'react'
import s from './PassengerInfo.module.scss'
import { PassengerItem } from './PassengerItem/PassengerItem'
import { ReactComponent as IconRub } from '../../../../../icons/rub.svg'

const PassengerInfo = () => {
  return (
    <div className={s.passengerInfo}>
      <div className={s.titleBlock}>
        <span className={s.title}>Пассажиры</span>
      </div>

      <div className={s.contentBlock}>
        <div className={s.passengersContainer}>
          <PassengerItem />
        </div>

        <div className={s.totalContainer}>
          <div className={s.priceBlock}>
            <span className={s.value}>Всего</span>

            <div>
              <span className={s.price}>7000</span>

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