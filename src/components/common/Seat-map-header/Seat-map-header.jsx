import React from 'react'
import s from './Seat-map-header.module.scss'

const SeatMapHeader = () => {
  return (
    <div className={s.seatMapHeader}>
      <div className={s.numbers}>
        <span className={s.label}>Вагоны</span>

        <span className={s.number}>07</span>
      </div>

      <span className={s.info}>Нумерация вагонов начинается с головы поезда</span>
    </div>
  )
}

export default SeatMapHeader