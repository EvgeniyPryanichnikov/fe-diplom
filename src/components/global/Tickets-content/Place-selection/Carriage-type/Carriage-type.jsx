import React from 'react'
import s from './Carriage-type.module.scss'
import SelectionButtons from './Selection-buttons/Selection-buttons'
import SeatMap from './Seat-map/Seat-map'
import { useSelector } from 'react-redux'

const CarriageType = () => {
  const seats = useSelector(state => state.tickets.seatsInfo)

  return (
    <div className={s.carriageType}>
      <h3 className={s.title}>Тип вагона</h3>

      <SelectionButtons />

      <SeatMap />
    </div>
  )
}

export default CarriageType
