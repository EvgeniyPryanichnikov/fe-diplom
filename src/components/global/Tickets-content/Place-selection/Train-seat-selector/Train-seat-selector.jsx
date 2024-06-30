import React from 'react'
import s from './Train-seat-selector.module.scss'
import { useSelector } from "react-redux"
import TrainDetailsBlock from '../Train-details-block/Train-details-block'
import TicketsCountForm from '../Tickets-count-form/Tickets-count-form'
import CarriageType from '../Carriage-type/Carriage-type'
import { ReactComponent as ToArrowIcon } from '../../../../../icons/to-arrow.svg'
// import { ReactComponent as BackArrowIcon } from '../../../../../icons/back-arrow.svg'

const TrainSeatSelector = () => {
  const trainInfo = useSelector(state => state.tickets.selectedTrain)

  return (
    <div className={s.trainSeatSelector}>
      <div className={s.top}>
        {/* {isDeparture ? <ToArrowIcon /> : <BackArrowIcon />} */}
        <ToArrowIcon />

        <button className={s.btnChange}>Выбрать другой поезд</button>
      </div>

      <TrainDetailsBlock trainInfo={trainInfo}/>

      <TicketsCountForm />

      <CarriageType />
    </div>
  )
}

export default TrainSeatSelector
