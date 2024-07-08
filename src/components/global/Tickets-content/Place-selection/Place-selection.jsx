import React from 'react'
import s from './Place-selection.module.scss'
import TrainSeatSelector from './Train-seat-selector/Train-seat-selector'
import { useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"

const PlaceSelection = () => {
  const navigate = useNavigate()
  const trainFromInfo = useSelector(state => state.tickets.selectedTrain.departure)
  const trainToInfo = useSelector(state => state.tickets.selectedTrain.arrival)

  function onBtnClick() {
    navigate('/trains/passenger')
  }
  return (
    <div className={s.placeSelection}>
      <h3 className={s.title}>Выбор мест</h3>

      {trainFromInfo && <TrainSeatSelector departure={trainFromInfo}/>}

      {trainToInfo && <TrainSeatSelector arrival={trainToInfo}/>}

      <div className={s.btnBlock}>
        <button className={s.btn} onClick={() => onBtnClick()}>Далее</button>
      </div>
      
    </div>
  )
}

export default PlaceSelection
