import React from 'react'

import s from './Last-ticket-item.module.scss'
import wifiIcon from '../../../../../../icons/wifi.svg'
import cupIcon from '../../../../../../icons/cup.svg'
import expressIcon from '../../../../../../icons/express.svg'
import rubIcon from '../../../../../../icons/rub.svg'

const LastTicketItem = ({cityFrom, cityTo, stationNameFrom, stationNameTo, wifi, express, minPrice}) => {
  return (
    <div className={s.lasTicketItem}>
      <div className={s.scheduleRow}>
        <div className={s.wrapper}>
          <span className={s.cityName}>
            {cityFrom}
          </span>

          <span className={s.stationName}>
            {stationNameFrom}
          </span>
        </div>

        <div className={s.wrapper}>
          <span className={s.cityName}>
            {cityTo}
          </span>

          <span className={s.stationName}>
          {stationNameTo}
          </span>
        </div>
      </div>

      <div className={s.details}>
        <div className={s.advantages}>
          {wifi && 
            <img src={wifiIcon} alt=""
          />}
          
          {express &&
            <img src={expressIcon} alt=""
          />}

          <img src={cupIcon} alt="" />
        </div>

        <div className={s.minPrice}>
          <span className={s.label}>От</span>
          <span className={s.value}>{minPrice}</span>
          <img src={rubIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LastTicketItem
