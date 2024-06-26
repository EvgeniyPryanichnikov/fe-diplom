import React, { useEffect } from 'react'

import s from './Tickets.module.scss'
import TicketsHeader from '../../components/global/Tickets-header/Tickets-header'
import TicketsContent from '../../components/global/Tickets-content/Tickets-content'
import { useDispatch, useSelector } from "react-redux"
import { searchRoutes } from "../../api/routes"
import { updateTicketsInfo } from "../../store/slices/ticketsSlice"


const Tickets = () => {
  const filters = useSelector(state => state.tickets.filters)
  let actualFilters = {}

  for (const filter in filters) { //TODO проверка на пустые фильтры, может есть решение деликатнее
    if (filters[filter]) {
      actualFilters[filter] = filters[filter]
    }
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if (!filters.from_city_id || !filters.to_city_id) return //TODO сделать предупреждение, что не выбрано направление
    
    searchRoutes(actualFilters).then(res => dispatch(updateTicketsInfo(res)))
  }, [filters])

  return (
    <div className={s.ticketsPage}>
      <TicketsHeader />
      <TicketsContent />
    </div>
  )
}

export default Tickets
