import React from 'react'
import s from './Place-selection.module.scss'
import TrainSeatSelector from './Train-seat-selector/Train-seat-selector'
import { useSelector } from "react-redux"

const PlaceSelection = () => {
  const trainFromInfo = useSelector(state => state.tickets.selectedTrain.departure)
  const trainToInfo = useSelector(state => state.tickets.selectedTrain.arrival)
  return (
    <div className={s.placeSelection}>
      <h3 className={s.title}>Выбор мест</h3>

      {trainFromInfo && <TrainSeatSelector departure={trainFromInfo}/>}

      {trainToInfo && <TrainSeatSelector arrival={trainToInfo}/>}
    </div>
  )
}

export default PlaceSelection
