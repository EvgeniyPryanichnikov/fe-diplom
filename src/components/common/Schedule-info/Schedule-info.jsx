import React from 'react'
import s from './Schedule-info.module.scss'
import { ReactComponent as IconLeft } from '../../../icons/left-arrow-yellow.svg'
import { ReactComponent as IconRight } from '../../../icons/right-arrow-yellow.svg'
import { Timestamp } from '../Timestamp/Timestamp'

const ScheduleInfo = ({departure, arrival}) => {
  return (
    <div>
      <div className={s.scheduleInfo}>
        <div className={s.row}>
          <div className={s.wrapper}>
            <div className={s.dateTime}><Timestamp timestamp={departure.from.datetime}/></div>
            <div className={s.cityName}>{departure.from.city.name}</div>
            <div className={s.stationName}>{departure.from.railway_station_name}</div>
          </div>

          <div className={s.drivingTime}>
            <span><Timestamp timestamp={departure.duration} withoutMeasurement={true}/></span>

            <IconLeft className={s.arrow} />
          </div>

          <div className={s.wrapper}>
            <div className={s.dateTime}><Timestamp timestamp={departure.to.datetime}/></div>
            <div className={s.cityName}>{departure.to.city.name}</div>
            <div className={s.stationName}>{departure.to.railway_station_name}</div>
          </div>
        </div>

        {arrival &&
         <div className={s.row}>
            <div className={s.wrapper}>
              <div className={s.dateTime}><Timestamp timestamp={arrival.from.datetime}/></div>
              <div className={s.cityName}>{arrival.from.city.name}</div>
              <div className={s.stationName}>{arrival.from.railway_station_name}</div>
            </div>

            <div className={s.drivingTime}>
              <span>15 : 15</span>

              <IconRight className={s.arrow}/>
            </div>

            <div className={s.wrapper}>
              <div className={s.dateTime}><Timestamp timestamp={arrival.to.datetime}/></div>
              <div className={s.cityName}>{arrival.to.city.name}</div>
              <div className={s.stationName}>{arrival.to.railway_station_name}</div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ScheduleInfo