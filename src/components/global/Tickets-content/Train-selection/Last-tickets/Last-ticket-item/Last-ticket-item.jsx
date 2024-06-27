import React from 'react'

import s from './Last-ticket-item.module.scss'
import wifiIcon from '../../../../../../icons/wifi.svg'
import cupIcon from '../../../../../../icons/cup.svg'
import expressIcon from '../../../../../../icons/express.svg'
import rubIcon from '../../../../../../icons/rub.svg'
import { ReactComponent as IconWifi } from '../../../../../../icons/wifi.svg'
import { ReactComponent as IconCup } from '../../../../../../icons/cup.svg'
import { ReactComponent as IconExpress } from '../../../../../../icons/express.svg'
import { ReactComponent as IconRub } from '../../../../../../icons/rub.svg'

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
          {wifi && <IconWifi className={s.icon} />}

          {express && <IconExpress className={s.icon} />}   

          <IconCup className={s.icon} />
        </div>

        <div className={s.minPrice}>
          <span className={s.label}>От</span>
          <span className={s.value}>{minPrice}</span>
          <IconRub />
        </div>
      </div>
    </div>
  )
}

export default LastTicketItem
