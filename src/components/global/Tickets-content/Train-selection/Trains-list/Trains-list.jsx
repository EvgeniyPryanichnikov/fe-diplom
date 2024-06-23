import{ React, useEffect, useState} from 'react'

import s from './Trains-list.module.scss'
import TrainItem from '../Train-item/Train-item'


const TrainsList = () => {
  const [tickets, setTickets] = useState()
  
  return (
    <div className={s.trainsList}>
      <div className={s.trainItems}>
        <TrainItem />
      </div>
    </div>
  )
}

export default TrainsList
