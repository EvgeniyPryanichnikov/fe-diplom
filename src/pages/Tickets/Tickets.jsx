import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import s from './Tickets.module.scss'
import TicketsContent from '../../components/global/Tickets-content/Tickets-content'
import PassengerContent from '../../components/global/Passenger-content/Passenger-content'
import { useDispatch, useSelector } from "react-redux"
import { searchRoutes } from "../../api/routes"
import { updateTicketsInfo } from "../../store/slices/ticketsSlice"
import TicketsHeader from "../../components/global/tickets-header/tickets-header";


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
      {/* <TicketsContent /> */}
      {/* <PassengerContent /> */}

      <Routes>

        <Route path='passenger' element={<PassengerContent />} />
        <Route path='passenger/*' element={<PassengerContent />} />

        <Route path='*' element={<TicketsContent />} />
      </Routes>
    </div>
  )
}

export default Tickets
