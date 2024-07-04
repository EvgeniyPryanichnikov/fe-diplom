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

  Object.entries(filters).filter(([key, value]) => !!value).forEach(([key, value]) => {

    if (key.startsWith("date")) {
      actualFilters[key] = filters[key].split(".").reverse().join("-");
      return;
    }
    actualFilters[key] = filters[key];
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (!filters.from_city_id || !filters.to_city_id) return

    searchRoutes(actualFilters).then(res => dispatch(updateTicketsInfo(res)))
  }, [filters])

  return (
    <div className={s.ticketsPage}>
      <TicketsHeader />
      <TicketsContent />
      {/* <PassengerContent /> */}
    </div>
  )
}

export default Tickets
