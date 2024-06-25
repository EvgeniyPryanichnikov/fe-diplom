import {React} from 'react'
import { useSelector, useDispatch, } from "react-redux"
import s from './Sort-form.module.scss'
import { SortingBy } from '../../../../Ui/SortingBy/SortingBy'

const SortForm = () => {
  const total_сount = useSelector(state => state.tickets.totalCount)
  
  const dispatch = useDispatch()

  return (
    <div className={s.sortForm}> 
      <div className={s.count}>
        найдено: {total_сount}
      </div>

      <SortingBy />

      <div>Показывать по</div>
    </div> 
  )
}

export default SortForm
