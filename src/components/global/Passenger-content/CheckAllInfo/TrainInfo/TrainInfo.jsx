import React from 'react'
import s from './TrainInfo.module.scss'
import TrainItemInfo from './TrainItemInfo/TrainItemInfo'

const TrainInfo = () => {
  return (
    <div className={s.trainInfo}>
      <div className={s.titleBlock}>
        <span className={s.title}>Поезд</span>
      </div>

      <TrainItemInfo />
    </div>
  )
}

export default TrainInfo