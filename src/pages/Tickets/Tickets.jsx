import React, {useEffect, useState} from 'react'

import s from './Tickets.module.scss'
import TicketsHeader from '../../components/global/Tickets-header/Tickets-header'
import TicketsContent from '../../components/global/Tickets-content/Tickets-content'
import { useDispatch, useSelector } from "react-redux"
import { searchRoutes } from "../../api/routes"
import { updateTicketsInfo } from "../../store/slices/ticketsSlice"


const Tickets = () => {
  const filters = useSelector(state => state.tickets.filters)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!filters.from_city_id || !filters.to_city_id) return // сделать предупреждение, что не выбрано направление
    
    searchRoutes(filters).then(res => dispatch(updateTicketsInfo(res)))
  }, [filters])

  return (
    <div className={s.ticketsPage}>
      <TicketsHeader />
      <TicketsContent />
    </div>
  )
}

export default Tickets
