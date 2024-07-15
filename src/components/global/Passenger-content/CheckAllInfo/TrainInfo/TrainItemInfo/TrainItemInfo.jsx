import React from 'react'

import s from './TrainItemInfo.module.scss'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as IconTrain } from '../../../../../../icons/train.svg'
import { ReactComponent as IconRub } from '../../../../../../icons/rub.svg'
import { ReactComponent as IconWifi } from '../../../../../../icons/wifi.svg'
import { ReactComponent as IconCup } from '../../../../../../icons/cup.svg'
import { ReactComponent as IconExpress } from '../../../../../../icons/express.svg'
import { setSelectedTrainFrom, setSelectedTrainTo, setSeatInfo } from "../../../../../../store/slices/ticketsSlice"
import ScheduleInfo from '../../../../../common/Schedule-info/Schedule-info'

const TrainItemInfo = () => {
  const departure = useSelector(state => state.tickets.selectedTrain.departure)
  const arrival = useSelector(state => state.tickets.selectedTrain.arrival)

  const dispatch = useDispatch()

  const navigate = useNavigate();

 

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

            <span className={s.count}>{departure.available_seats_info.fourth}</span>

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

            <span className={s.count}>{departure.available_seats_info.third}</span>

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

            <span className={s.count}>{departure.available_seats_info.second}</span>

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

            <span className={s.count}>{departure.available_seats_info.first}</span>

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

        <div className={s.changeSeatBtn}>Изменить</div>
      </div>
    </div>
  )
}

export default TrainItemInfo
