import React from 'react'

import s from './Train-item.module.scss'
import { Link } from "react-router-dom"
import { ReactComponent as IconTrain } from '../../../../../icons/train.svg'
import { ReactComponent as IconLeft } from '../../../../../icons/left-arrow-yellow.svg'
import { ReactComponent as IconRight } from '../../../../../icons/right-arrow-yellow.svg'
import { ReactComponent as IconRub } from '../../../../../icons/rub.svg'
import { ReactComponent as IconWifi } from '../../../../../icons/wifi.svg'
import { ReactComponent as IconCup } from '../../../../../icons/cup.svg'
import { ReactComponent as IconExpress } from '../../../../../icons/express.svg'

const TrainItem = ({item}) => {
  const {
    available_seats_info,
    departure,
    arrival
  } = item;

  // function timeObj(seconds) { 
  //   return {
  //     hours: (seconds / 3600) | 0,        // часы
  //     minutes: ((seconds / 60) | 0) % 60, // минуты
  //   } 
  // }

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

      <div className={s.scheduleInfo}>
        <div className={s.row}>
          <div className={s.wrapper}>
            <div className={s.dateTime}>11 : 06</div>
            <div className={s.cityName}>{departure.from.city.name}</div>
            <div className={s.stationName}>{departure.from.railway_station_name}</div>
          </div>

          <div className={s.drivingTime}>
            <span>15 : 15</span>

            <IconLeft className={s.arrow} />
          </div>

          <div className={s.wrapper}>
            <div className={s.dateTime}>11 : 06</div>
            <div className={s.cityName}>{departure.to.city.name}</div>
            <div className={s.stationName}>{departure.to.railway_station_name}</div>
          </div>
        </div>

        {arrival &&
         <div className={s.row}>
            <div className={s.wrapper}>
              <div className={s.dateTime}>11 : 06</div>
              <div className={s.cityName}>{arrival.from.city.name}</div>
              <div className={s.stationName}>{arrival.from.railway_station_name}</div>
            </div>

            <div className={s.drivingTime}>
              <span>15 : 15</span>

              <IconRight className={s.arrow}/>
            </div>

            <div className={s.wrapper}>
              <div className={s.dateTime}>11 : 06</div>
              <div className={s.cityName}>{arrival.to.city.name}</div>
              <div className={s.stationName}>{arrival.to.railway_station_name}</div>
            </div>
          </div>
        }
      </div>

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

        <Link to={'/place'} className={s.changeSeatBtn}>Выбрать места</Link>
      </div>
    </div>
  )
}

export default TrainItem
