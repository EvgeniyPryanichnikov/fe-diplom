import React from 'react'
import s from './Train-details-block.module.scss'
import { ReactComponent as IconTrain } from '../../../../../icons/train-yellow.svg'
import { ReactComponent as IconLeftArrow } from '../../../../../icons/left-arrow.svg'
import { ReactComponent as IconLeft } from '../../../../../icons/left-arrow-yellow.svg'
import { ReactComponent as IconWatch} from '../../../../../icons/watch.svg'
import { Timestamp } from '../../../../common/Timestamp/Timestamp'

const TrainDetailsBlock = ({trainInfo}) => {
  const name = trainInfo.train.name
  const from = trainInfo.from.city.name
  const to = trainInfo.to.city.name
  const dateTimeFrom = trainInfo.from.datetime
  const dateTimeTo = trainInfo.to.datetime
  const stationNameFrom = trainInfo.from.railway_station_name
  const stationNameTo = trainInfo.to.railway_station_name
  const duration = trainInfo.duration

  return (
    <div className={s.trainsDetailBlock}>
      <div className={s.generalInfo}>
        <IconTrain />

        <div className={s.info}>
          <span className={s.name}>
            {name} 
          </span>

          <div>
            <span className={s.from}>
              {from.charAt(0).toUpperCase() + from.slice(1)}
            </span>

            <IconLeftArrow />
          </div>
        
          <span className={s.to}>
            {to.charAt(0).toUpperCase() + to.slice(1)}
          </span>
        </div>
      </div>

      <div className={s.scheduleInfo}>
        <div className={s.wrapper}>
          <div className={s.dateTimeFrom}><Timestamp timestamp={dateTimeFrom}/></div>
          <div className={s.cityNameFrom}>{from.charAt(0).toUpperCase() + from.slice(1)}</div>
          <div className={s.stationNameFrom}>{stationNameFrom}</div>
        </div>

        <div className={s.drivingTime}>
          <IconLeft />
        </div>

        <div className={s.wrapper}>
          <div className={s.dateTimeTo}><Timestamp timestamp={dateTimeTo}/></div>
          <div className={s.cityNameTo}>{to.charAt(0).toUpperCase() + to.slice(1)}</div>
          <div className={s.stationNameTo}>{stationNameTo}</div>
        </div>
      </div>

      <div className={s.timestamp}>
        <IconWatch /> 

        <Timestamp duration={true} timestamp={duration}/>
      </div>

      {/* {arrival &&
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
      } */}
    </div>
  )
}

export default TrainDetailsBlock
