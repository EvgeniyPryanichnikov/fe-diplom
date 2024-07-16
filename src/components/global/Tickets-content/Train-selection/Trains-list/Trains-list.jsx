import { React, useMemo, useState } from 'react'
import { useSelector } from "react-redux"
import s from './Trains-list.module.scss'
import TrainItem from '../Train-item/Train-item'
import SortForm from '../Sort-form/Sort-form'
import Paginate from '../../../../common/Paginate/Paginate'

const TrainsList = () => {
  const trains = useSelector(state => state.tickets.trains)
  const isShowTools = trains && trains.length > 0;
  const totalCount = useSelector(state => state.tickets.totalCount)
  const [page, setPage] = useState(1)

  const lastPage = useMemo(() => {
    if (trains && trains.length === 0) return 0

    return Math.ceil(totalCount / trains.length)
  }, [totalCount, trains.length])

  return (
    <div className={s.trainsList}>
      {isShowTools && <SortForm />}

      <div className={s.trainItems}>
        {trains.map((el, index) => 
          <TrainItem key={index} trains={el}
        />)
        }
      </div>
      
      {isShowTools && <Paginate lastPage={lastPage} page={page} onChange={setPage} />}
    </div>
  )
}

export default TrainsList
