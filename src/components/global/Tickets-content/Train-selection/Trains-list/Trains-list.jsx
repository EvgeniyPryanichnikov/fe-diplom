import{ React, useEffect, useState} from 'react'

import s from './Trains-list.module.scss'
import TrainItem from '../Train-item/Train-item'
import {useSelector} from "react-redux";


const TrainsList = () => {
  const tickets = useSelector(state => state.tickets.tickets)

  return (
    <div className={s.trainsList}>
      <div className={s.trainItems}>
        {
          tickets.map(el => <TrainItem item={el} />)
        }
      </div>
    </div>
  )
}

export default TrainsList
