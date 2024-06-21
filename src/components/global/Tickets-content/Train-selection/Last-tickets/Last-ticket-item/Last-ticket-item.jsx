import React from 'react'

import s from './Last-ticket-item.module.scss'
import wifiIcon from '../../../../../../icons/wifi.svg'
import cupIcon from '../../../../../../icons/cup.svg'
import expressIcon from '../../../../../../icons/express.svg'
import rubIcon from '../../../../../../icons/rub.svg'

const LastTicketItem = () => {
  return (
    <div className={s.lasTicketItem}>
      <div className={s.scheduleRow}>
        <div className={s.wrapper}>
          <span className={s.cityName}>
            Москва
          </span>

          <span className={s.stationName}>
            Курский вокзал
          </span>
        </div>

        <div className={s.wrapper}>
          <span className={s.cityName}>
            Адлер
          </span>

          <span className={s.stationName}>
            Адлер вокзал
          </span>
        </div>
      </div>

      <div className={s.details}>
        <div className={s.advantages}>
          <img src={wifiIcon} alt="" />
          <img src={cupIcon} alt="" />
          <img src={expressIcon} alt="" />
        </div>

        <div className={s.minPrice}>
          <span className={s.label}>От</span>
          <span className={s.value}>550</span>
          <img src={rubIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LastTicketItem
