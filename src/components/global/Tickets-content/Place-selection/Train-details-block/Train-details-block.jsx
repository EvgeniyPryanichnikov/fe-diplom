import React from 'react'
import s from './Train-details-block.module.scss'
import { ReactComponent as IconTrain } from '../../../../../icons/train-yellow.svg'
import { ReactComponent as IconLeftArrow } from '../../../../../icons/left-arrow.svg'
import { ReactComponent as IconLeft } from '../../../../../icons/left-arrow-yellow.svg'
import { ReactComponent as IconWatch} from '../../../../../icons/watch.svg'

const TrainDetailsBlock = () => {
  return (
    <div className={s.trainsDetailBlock}>
      <div className={s.generalInfo}>
        <IconTrain />

        <div className={s.info}>
          <span className={s.name}>
            116С-Иволга
          </span>

          <div>
            <span className={s.from}>
              Москва
            </span>

            <IconLeftArrow />
          </div>
        
          <span className={s.to}>
            Санкт-петербург
          </span>
        </div>
      </div>

      <div className={s.scheduleInfo}>
        <div className={s.wrapper}>
          <div className={s.dateTime}>11 : 06</div>
          <div className={s.cityName}>Москва</div>
          <div className={s.stationName}>Курский вокзал</div>
        </div>

        <div className={s.drivingTime}>
          <IconLeft />
        </div>

        <div className={s.wrapper}>
          <div className={s.dateTime}>11 : 06</div>
          <div className={s.cityName}>Санкт-петербург</div>
          <div className={s.stationName}>Ладожский возал</div>
        </div>
      </div>

      <div className={s.timestamp}>
        <IconWatch /> 

        3 часа<br /> 
        {/* 23 минуты Вынести в отдельный компонент scheduleInfo и сделать компонент для timestamp */}
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
