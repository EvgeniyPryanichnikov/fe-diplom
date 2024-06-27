import React from 'react'
import s from './Place-selection.module.scss'
import TrainSeatSelector from './Train-seat-selector/Train-seat-selector'

const PlaceSelection = () => {
  return (
    <div className={s.placeSelection}>
      <h3 className={s.title}>Выбор мест</h3>

      <TrainSeatSelector />
    </div>
  )
}

export default PlaceSelection
