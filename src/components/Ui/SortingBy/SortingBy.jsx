import { React, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setSortValue } from "../../../store/slices/ticketsSlice"
import s from './SortingBy.module.scss'

export const SortingBy = () => {
  const options = [
    {value: 'date', title: 'времени'},
    {value: 'price', title: 'стоимости'},
    {value: 'duration', title: 'длительности'}
  ]

  const activeSort = useSelector(state => state.tickets.filters.sort_title)
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  function onInputClick() {
    setIsOpen(prev => !prev)
  }

  function onOptionClick(value) {
    console.log(value)
    dispatch(setSortValue(value))
    setIsOpen(false)
  }

  return (
    <>
      <div className={s.select}>
        <span className={s.title}>Сортировать по:</span>

        <div className={s.input} onClick={() => onInputClick()}>
          {activeSort}
        </div> 

				{isOpen && <div className={s.options}>
					{options.map(opt => <div key={opt.value} className={s.option} onClick={() => onOptionClick(opt)}>
						{opt.title}
					</div>)}
				</div>}
			</div>
    </>
  )
}

