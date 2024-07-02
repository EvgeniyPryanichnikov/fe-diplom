import React from 'react'
import s from './Date-time-block.module.scss'
import { Timestamp } from '../../common/Timestamp/Timestamp'
import { ReactComponent as IconLeft } from '../../../icons/left-arrow-yellow.svg'
import { ReactComponent as IconRight } from '../../../icons/right-arrow-yellow.svg'

const DateTimeBlock = ({direction}) => {
  return (
    <div className={s.row}>
      <div className={s.wrapper}>
        {/* <div className={s.dateTime}><Timestamp timestamp={departure.from.datetime}/></div> */}
        <div className={s.dateTime}>
          <span className={s.time}>12:15</span>
          <span className={s.date}>02.07.2024</span>
        </div>

        <div className={s.cityName}>Самара</div>
        <div className={s.stationName}>Куйбышевский</div>
      </div>

      <div className={s.drivingTime}>
        {/* <span><Timestamp timestamp={departure.duration} withoutMeasurement={true}/></span> */}
        <span>03:15</span>

        <IconLeft className={s.arrow} />
      </div>

      <div className={s.wrapper}>
        {/* <div className={s.dateTime}><Timestamp timestamp={departure.to.datetime}/></div> */}
        <div className={s.dateTime}>
          <span className={s.time}>12:15</span>
          <span className={s.date}>02.07.2024</span>
        </div>
        
        <div className={s.cityName}>Москва</div>
        <div className={s.stationName}>Казанский</div>
      </div>
    </div>
  )
}

export default DateTimeBlock