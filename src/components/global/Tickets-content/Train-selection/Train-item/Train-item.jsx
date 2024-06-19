import React from 'react'

import s from './Train-item.module.scss'
import trainIcon from '../../../../../icons/train.svg'
import leftArrowIcon from '../../../../../icons/left-arrow-yellow.svg'
import rightArrowIcon from '../../../../../icons/right-arrow-yellow.svg'

const TrainItem = () => {
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
        <div className={s.seatRow}>
          <span className={s.classSeat}>Плацкарт</span>

          <span className={s.count}>19</span>

          <div className={s.minPrice}>
            {/* <span></span> остановился на последнем разделе билета, продолжать от сюда */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default TrainItem
