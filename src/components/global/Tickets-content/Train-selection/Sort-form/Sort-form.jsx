import {React} from 'react'
import { useSelector, useDispatch, } from "react-redux"
import s from './Sort-form.module.scss'
import { SortingBy } from '../../../../Ui/SortingBy/SortingBy'
import { setLimit } from '../../../../../store/slices/ticketsSlice'

const SortForm = () => {
  const dispatch = useDispatch()
  const total_сount = useSelector(state => state.tickets.totalCount)

  function onValueClick(value) {
    console.log(value)
    dispatch(setLimit(value))
  }
  
  

  return (
    <div className={s.sortForm}> 
      <div className={s.count}>
        найдено: {total_сount}
      </div>

      <SortingBy />

      <div className={s.showBy}>
        <span className={s.title}>
          Показывать по:
        </span>

        <span className={s.value} onClick={(e) => onValueClick(e.target.innerText)}>5</span>
        <span className={s.value} onClick={(e) => onValueClick(e.target.innerText)}>10</span>
        <span className={s.value} onClick={(e) => onValueClick(e.target.innerText)}>15</span>
      </div>
    </div> 
  )
}

export default SortForm
