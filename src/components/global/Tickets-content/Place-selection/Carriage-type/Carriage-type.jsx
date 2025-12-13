import React from 'react'
import s from './Carriage-type.module.scss'
import SelectionButtons from './Selection-buttons/Selection-buttons'
import SeatMap from './Seat-map/Seat-map'
import { useSelector } from 'react-redux'

const CarriageType = ({trainId, direction}) => {

  const classNameFrom = useSelector(state => state.tickets.coachsFromInfo.class_type);
  const classNameTo = useSelector(state => state.tickets.coachsToInfo.class_type);
  const isSelectedCoachFrom = useSelector(state => !!state.tickets.coachsFromInfo.selectedCoachInfo.allSeats.length);
  const isSelectedCoachTo = useSelector(state => !!state.tickets.coachsToInfo.selectedCoachInfo.allSeats.length);

  return (
    <div className={s.carriageType}>
      <h3 className={s.title}>Тип вагона</h3>

      <SelectionButtons trainId={trainId} direction={direction} className={direction === 'departure' ? classNameFrom : classNameTo}/>

      {(direction === 'departure' ? (classNameFrom && isSelectedCoachFrom) : (classNameTo && isSelectedCoachTo)) && <SeatMap  direction={direction}/>}
    </div>
  )
}

export default CarriageType
