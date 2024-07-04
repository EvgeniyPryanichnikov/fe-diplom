import React from 'react'
import s from './Train-seat-selector.module.scss'
// import { useSelector } from "react-redux"
import TrainDetailsBlock from '../Train-details-block/Train-details-block'
import TicketsCountForm from '../Tickets-count-form/Tickets-count-form'
import CarriageType from '../Carriage-type/Carriage-type'
import { ReactComponent as ToArrowIcon } from '../../../../../icons/to-arrow.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as BackArrowIcon } from '../../../../../icons/back-arrow.svg'

const TrainSeatSelector = ({departure, arrival}) => {

  return (
    <div className={s.trainSeatSelector}>
      {departure && <div>
        <div className={s.top}>
          <ToArrowIcon />

          <Link to='/trains' className={s.btnChange}>Выбрать другой поезд</Link>
        </div>

        <TrainDetailsBlock trainInfo={departure}/>

        <TicketsCountForm />

        <CarriageType />
      </div>}

      {arrival && <div>
        <div className={s.top}>
          <BackArrowIcon />

          <Link to='/trains' className={s.btnChange}>Выбрать другой поезд</Link>
        </div>

        <TrainDetailsBlock trainInfo={arrival}/>

        <TicketsCountForm />

        <CarriageType />
      </div>}
    </div>
  )
}

export default TrainSeatSelector
