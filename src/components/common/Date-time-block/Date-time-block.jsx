import React from 'react'
import s from './Date-time-block.module.scss'
import { Timestamp } from '../../common/Timestamp/Timestamp'

const DateTimeBlock = ({direction, icon}) => {
  return (
    <div className={s.row}>
      <div className={s.wrapper}>
        <div className={s.dateTime}>
          <div className={s.time}><Timestamp className={s.time} timestamp={direction.from.datetime}/></div>
          <span className={s.date}><Timestamp className={s.time} timestamp={direction.from.datetime} onlyDate={true}/></span>
        </div>

        <div className={s.cityName}>{direction.from.city.name.charAt(0).toUpperCase() + direction.from.city.name.slice(1)}</div>
        <div className={s.stationName}>{direction.from.railway_station_name}</div>
      </div>

      <div className={s.drivingTime}>
        {/* <span><Timestamp timestamp={direction.duration} withoutMeasurement={true}/></span> */}

        {icon}
      </div>

      <div className={s.wrapper}>
        <div className={s.dateTime}>
          <div className={s.time}><Timestamp className={s.time} timestamp={direction.to.datetime}/></div>
          <span className={s.date}><Timestamp className={s.time} timestamp={direction.to.datetime} onlyDate={true}/></span>
        </div>
        
        <div className={s.cityName}>{direction.to.city.name.charAt(0).toUpperCase() + direction.to.city.name.slice(1)}</div>
        <div className={s.stationName}>{direction.to.railway_station_name}</div>
      </div>
    </div>
  )
}

export default DateTimeBlock