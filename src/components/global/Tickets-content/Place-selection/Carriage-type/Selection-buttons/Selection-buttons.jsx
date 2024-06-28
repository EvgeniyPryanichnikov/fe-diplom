import React from 'react'
import s from './Selection-buttons.module.scss'
import { ReactComponent as SedentaryIcon } from '../../../../../../icons/sedentary.svg'
import { ReactComponent as ReservedSeatIcon } from '../../../../../../icons/reserved-seat.svg'
import { ReactComponent as CoupeIcon } from '../../../../../../icons/coupe.svg'
import { ReactComponent as StarIcon } from '../../../../../../icons/star.svg'

export const SelectionButtons = () => {
  return (
    <div className={s.selectionButtons}>
      <button className={s.btn}>
        <SedentaryIcon />
        <span className={s.label}>Сидячий</span>
      </button>

      <button className={s.btn}>
        <ReservedSeatIcon />
        <span className={s.label}>Плацкарт</span>
      </button>

      <button className={s.btn}>
        <CoupeIcon />
        <span className={s.label}>Купе</span>
      </button>

      <button className={s.btn}>
        <StarIcon />
        <span className={s.label}>Люкс</span>
      </button>
    </div>
  )
}
