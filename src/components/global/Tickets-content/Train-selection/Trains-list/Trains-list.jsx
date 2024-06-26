import { React, useMemo, useState } from 'react'
import { useSelector } from "react-redux"
import s from './Trains-list.module.scss'
import TrainItem from '../Train-item/Train-item'
import SortForm from '../Sort-form/Sort-form'
import Paginate from '../../../../common/Paginate/Paginate'

const TrainsList = () => {
  const tickets = useSelector(state => state.tickets.tickets)
  const totalCount = useSelector(state => state.tickets.totalCount)
  const [page, setPage] = useState(1)
  const isShowTools = tickets && tickets.length > 0;

  const lastPage = useMemo(() => {
    if (tickets.length === 0) return 0

    return Math.ceil(totalCount / tickets.length)
  }, [totalCount, tickets.length])

  return (
    <div className={s.trainsList}>
      {isShowTools && <SortForm />}

      <div className={s.trainItems}>
        {tickets.map((el, index) => 
          <TrainItem key={index} item={el}
        />)
        }
      </div>
      
      {isShowTools && <Paginate lastPage={lastPage} page={page} onChange={setPage} />}
    </div>
  )
}

export default TrainsList
