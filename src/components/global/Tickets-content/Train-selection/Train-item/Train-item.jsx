import React from 'react'

import s from './Train-item.module.scss'
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"
import { ReactComponent as IconTrain } from '../../../../../icons/train.svg'
import { ReactComponent as IconRub } from '../../../../../icons/rub.svg'
import { ReactComponent as IconWifi } from '../../../../../icons/wifi.svg'
import { ReactComponent as IconCup } from '../../../../../icons/cup.svg'
import { ReactComponent as IconExpress } from '../../../../../icons/express.svg'
import { searchSeats } from '../../../../../api/seats'
import { setSelectedTrainFrom, setSelectedTrainTo, setSeatInfo } from "../../../../../store/slices/ticketsSlice"
import ScheduleInfo from '../../../../common/Schedule-info/Schedule-info'

const TrainItem = ({trains}) => {
  const {
    available_seats_info,
    departure,
    arrival
  } = trains

  const dispatch = useDispatch()

  const navigate = useNavigate();

  function showSeats() { // после клика просиходит роутинг, выполняется запрос на сервер и записываются данные выбранного поезда в стэйт ?? arrival ??
    dispatch(setSelectedTrainFrom(departure))
    dispatch(setSelectedTrainTo(arrival))
    navigate("/trains/place")                // нужно перенести метод с запросом по местам отсюда на страницу с кнопками вагонов и там передавать айдишники конкретного поезда
    // searchSeats(trainInfo._id)
    //   .then(res => dispatch(setSeatInfo(res)))
    //   .then(() => navigate("/trains/place"))
  }

  return (
    <div className={s.trainItem}>
      <div className={s.generalInfo}>
        <IconTrain />

        <div>
          <div className={s.name}>
            {departure.train.name}
          </div>

          <div className={s.from}>
            {departure.from.city.name}
          </div>

          <div className={s.to}>
            {departure.to.city.name}
          </div>
        </div>
      </div>

      <ScheduleInfo departure={departure} arrival={arrival}/>

      <div className={s.seatInfo}>
        {departure.have_fourth_class &&
          <div className={s.row}>
            <span className={s.classSeat}>Сидячий</span>

            <span className={s.count}>{available_seats_info.fourth}</span>

            <div className={s.minPrice}>
              <span className={s.label}>От</span>
              <span className={s.value}>{departure.price_info.fourth.bottom_price}</span>

              <IconRub />
            </div>
          </div>
        }

        {departure.have_third_class &&
          <div className={s.row}>
            <span className={s.classSeat}>Плацкарт</span>

            <span className={s.count}>{available_seats_info.third}</span>

            <div className={s.minPrice}>
              <span className={s.label}>От</span>
              <span className={s.value}>{departure.price_info.third.bottom_price}</span>

              <IconRub />
            </div>
          </div>
        }

        {departure.have_second_class &&
          <div className={s.row}>
            <span className={s.classSeat}>Купе</span>

            <span className={s.count}>{available_seats_info.second}</span>

            <div className={s.minPrice}>
              <span className={s.label}>От</span>
              <span className={s.value}>{departure.price_info.second.bottom_price}</span>

              <IconRub />
            </div>
          </div>
        }

        {departure.have_first_class &&
          <div className={s.row}>
            <span className={s.classSeat}>Люкс</span>

            <span className={s.count}>{available_seats_info.first}</span>

            <div className={s.minPrice}>
              <span className={s.label}>От</span>
              <span className={s.value}>{departure.price_info.first.bottom_price}</span>

              <IconRub />
            </div>
          </div>
        }

        <div className={s.advantages}>
          {departure.have_wifi && <IconWifi className={s.icon}/>}
          <IconCup className={s.icon}/>

          {departure.is_express && <IconExpress className={s.icon}/>}
        </div>

        <button className={s.changeSeatBtn} onClick={() => showSeats(departure)}>Выбрать места</button>
      </div>
    </div>
  )
}

export default TrainItem
