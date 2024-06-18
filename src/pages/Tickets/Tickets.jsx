import React from 'react'

import s from './Tickets.module.scss'
import TicketsHeader from '../../components/global/Tickets-header/Tickets-header'


const Tickets = () => {


  return (
    <div className={s.ticketsPage}>
      <TicketsHeader />
    </div>
  )
}

export default Tickets
