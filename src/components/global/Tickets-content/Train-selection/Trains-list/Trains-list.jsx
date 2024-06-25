import{ React } from 'react'

import s from './Trains-list.module.scss'
import TrainItem from '../Train-item/Train-item'
import SortForm from '../Sort-form/Sort-form'
import { useSelector } from "react-redux";


const TrainsList = () => {
  const tickets = useSelector(state => state.tickets.tickets)

  return (
    <div className={s.trainsList}>
       <SortForm />

      <div className={s.trainItems}>
        {tickets.map((el, index) => 
          <TrainItem key={index} item={el}
        />)
        }
      </div>
    </div>
  )
}

export default TrainsList
