import React from 'react'
import s from './Seat-map-header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCoachName} from "../../../store/slices/ticketsSlice";

const SeatMapHeader = ({direction}) => {
  const selectedCoachFrom = useSelector(state => state.tickets.coachsFromInfo.selectedCoachInfo.coach__name);
  const selectedCoachTo = useSelector(state => state.tickets.coachsToInfo.selectedCoachInfo.coach__name);
  const availableCoachNamesFrom = useSelector(state => state.tickets.coachsFromInfo.availableCoachNames);
  const availableCoachNamesTo = useSelector(state => state.tickets.coachsToInfo.availableCoachNames);
  const dispatch = useDispatch();

  function onChangeCoach(coachFullName) {
    dispatch(setCoachName(coachFullName))
  }

  return (
    <div className={s.seatMapHeader}>
      <div className={s.numbers}>
        <span className={s.label}>Вагоны</span>
        {
          direction === 'departure' ? availableCoachNamesFrom.map(el => <span key={el} className={s.number + " " + (el === selectedCoachFrom ? s.active : "")} onClick={() => onChangeCoach(el)}>{el.split("-")[1]}</span>) 
          : availableCoachNamesTo.map(el => <span key={el} className={s.number + " " + (el === selectedCoachTo ? s.active : "")} onClick={() => onChangeCoach(el)}>{el.split("-")[1]}</span>) 
        }
      </div>

      <span className={s.info}>Нумерация вагонов начинается с головы поезда</span>
    </div>
  )
}

export default SeatMapHeader
