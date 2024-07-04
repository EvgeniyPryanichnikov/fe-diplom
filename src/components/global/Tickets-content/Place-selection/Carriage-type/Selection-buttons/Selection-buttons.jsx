import React from 'react'
import s from './Selection-buttons.module.scss'
import { ReactComponent as SedentaryIcon } from '../../../../../../icons/sedentary.svg'
import { ReactComponent as ReservedSeatIcon } from '../../../../../../icons/reserved-seat.svg'
import { ReactComponent as CoupeIcon } from '../../../../../../icons/coupe.svg'
import { ReactComponent as StarIcon } from '../../../../../../icons/star.svg'
import {useDispatch, useSelector} from "react-redux";
import {setClassType} from "../../../../../../store/slices/ticketsSlice";

const SelectionButtons = () => {
  const className = useSelector(state => state.tickets.class_type)

  const dispatch = useDispatch();

  function onBtnClick(className) {
    dispatch(setClassType(className));
  }

  return (
    <div className={s.selectionButtons}>
      <button
        onClick={() => onBtnClick("fourth")} className={s.btn + ( className === "fourth" ? ' ' + s.active : '')}>
        <SedentaryIcon />
        <span className={s.label}>Сидячий</span>
      </button>

      <button
        onClick={() => onBtnClick("third")} className={s.btn + ( className === "third" ? ' ' + s.active : '')}>
        <ReservedSeatIcon />
        <span className={s.label}>Плацкарт</span>
      </button>

      <button
        onClick={() => onBtnClick("second")} className={s.btn + (className === "second" ? ' ' + s.active : '')}>
        <CoupeIcon />
        <span className={s.label}>Купе</span>
      </button>

      <button
        onClick={() => onBtnClick("first")} className={s.btn + (className === "first" ? ' ' + s.active : '')}>
        <StarIcon />
        <span className={s.label}>Люкс</span>
      </button>
    </div>
  )
}

export default SelectionButtons
