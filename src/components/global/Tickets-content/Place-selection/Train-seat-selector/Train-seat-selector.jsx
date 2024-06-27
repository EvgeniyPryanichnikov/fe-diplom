import React from 'react'
import s from './Train-seat-selector.module.scss'
import TrainDetailsBlock from '../Train-details-block/Train-details-block'
import { ReactComponent as ToArrowIcon } from '../../../../../icons/to-arrow.svg'
import { ReactComponent as BackArrowIcon } from '../../../../../icons/back-arrow.svg'

const TrainSeatSelector = (isDeparture) => {
  return (
    <div className={s.trainSeatSelector}>
      <div className={s.top}>
        {isDeparture ? <ToArrowIcon /> : <BackArrowIcon />}

        <button className={s.btnChange}>Выбрать другой поезд</button>
      </div>

      <TrainDetailsBlock />
    </div>
  )
}

export default TrainSeatSelector
