import React from 'react'

import s from './Tickets.module.scss'
import TicketsHeader from '../../components/global/Tickets-header/Tickets-header'
import TicketsContent from '../../components/global/Tickets-content/Train-selection/Trains-list/Trains-list'


const Tickets = () => {


  return (
    <div className={s.ticketsPage}>
      <TicketsHeader />

      <TicketsContent />
    </div>
  )
}

export default Tickets
