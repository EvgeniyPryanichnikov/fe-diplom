import React from 'react'
import s from './Seat-map-header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCoachName} from "../../../store/slices/ticketsSlice";

const SeatMapHeader = () => {
  const selectedCoach = useSelector(state => state.tickets.selectedCoachInfo.coach__name);
  const availableCoachNames = useSelector(state => state.tickets.availableCoachNames);
  const dispatch = useDispatch();

  function onChangeCoach(coachFullName) {
    dispatch(setCoachName(coachFullName))
  }

  return (
    <div className={s.seatMapHeader}>
      <div className={s.numbers}>
        <span className={s.label}>Вагоны</span>
        {
          availableCoachNames.map(el => <span key={el} className={s.number + " " + (el === selectedCoach ? s.active : "")} onClick={() => onChangeCoach(el)}>{el.split("-")[1]}</span>)
        }
      </div>

      <span className={s.info}>Нумерация вагонов начинается с головы поезда</span>
    </div>
  )
}

export default SeatMapHeader
