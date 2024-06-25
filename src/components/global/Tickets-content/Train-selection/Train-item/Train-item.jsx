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
    have_first_class,
    have_second_class,
    have_third_class,
    have_fourth_class,
    have_wifi,
    have_air_conditioning,
    is_express,
    min_price,
    available_seats,
    available_seats_info,
    departure,
    arrival
  } = item;

  return (
    <div className={s.trainItem}>
      <div className={s.generalInfo}>
        <img src={trainIcon} alt="" />

        <div>
          <div className={s.name}>
            Ураган - 49
          </div>

          <div className={s.from}>
            Москва
          </div>

          <div className={s.to}>
            Санкт-петербург
          </div>
        </div>
      </div>

      <div className={s.scheduleInfo}>
        <div className={s.row}>
          <div className={s.wrapper}>
            <div className={s.dateTime}>11 : 06</div>
            <div className={s.cityName}>Москва</div>
            <div className={s.stationName}>Курский вокзал</div>
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
            <div className={s.cityName}>Москва</div>
            <div className={s.stationName}>Курский вокзал</div>
          </div>
        </div>

        <div className={s.row}>
          <div className={s.wrapper}>
            <div className={s.dateTime}>11 : 06</div>
            <div className={s.cityName}>Москва</div>
            <div className={s.stationName}>Курский вокзал</div>
          </div>

          <div className={s.drivingTime}>
            <span>23 : 23</span>

            <img
              src={leftArrowIcon}
              alt=""
              className={s.arrow}
            />
          </div>

          <div className={s.wrapper}>
            <div className={s.dateTime}>11 : 06</div>
            <div className={s.cityName}>Москва</div>
            <div className={s.stationName}>Курский вокзал</div>
          </div>
        </div>
      </div>

      <div className={s.seatInfo}>
        <div className={s.row}>
          <span className={s.classSeat}>Плацкарт</span>

          <span className={s.count}>19</span>

          <div className={s.minPrice}>
            <span className={s.label}>От</span>
            <span className={s.value}>1500</span>
            <img src={rubIcon} alt="" />
          </div>
        </div>

        <div className={s.advantages}>
          <img src={wifiIcon} alt="" />
          <img src={cupIcon} alt="" />
          <img src={expressIcon} alt="" />
        </div>

        <button className={s.changeSeatBtn}>Выбрать места</button>
      </div>
    </div>
  )
}

export default TrainItem
