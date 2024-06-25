import React from 'react'

import s from './Train-item.module.scss'
import trainIcon from '../../../../../icons/train.svg'
import leftArrowIcon from '../../../../../icons/left-arrow-yellow.svg'
import rightArrowIcon from '../../../../../icons/right-arrow-yellow.svg'
import rubIcon from '../../../../../icons/rub.svg'
import wifiIcon from '../../../../../icons/wifi.svg'
import cupIcon from '../../../../../icons/cup.svg'
import expressIcon from '../../../../../icons/express.svg'

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
        <img src={trainIcon} alt="" />

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

            <img
              src={leftArrowIcon}
              alt=""
              className={s.arrow}
            />
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

              <img
                src={rightArrowIcon}
                alt=""
                className={s.arrow}
              />
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
              <img src={rubIcon} alt="" />
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
              <img src={rubIcon} alt="" />
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
              <img src={rubIcon} alt="" />
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
              <img src={rubIcon} alt="" />
            </div>
          </div>
        }

        <div className={s.advantages}>
          {departure.have_wifi && <img src={wifiIcon} alt="" />}
          <img src={cupIcon} alt="" />
          {departure.is_express && <img src={expressIcon} alt="" />}
        </div>

        <button className={s.changeSeatBtn}>Выбрать места</button>
      </div>
    </div>
  )
}

export default TrainItem
