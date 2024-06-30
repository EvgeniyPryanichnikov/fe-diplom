import React from 'react'
import s from './Carriage-type.module.scss'
import SelectionButtons from './Selection-buttons/Selection-buttons'
import SeatMap from './Seat-map/Seat-map'

const CarriageType = () => {
  return (
    <div className={s.carriageType}>
      <h3 className={s.title}>Тип вагона</h3>

      <SelectionButtons />

      <SeatMap />
    </div>
  )
}

export default CarriageType
