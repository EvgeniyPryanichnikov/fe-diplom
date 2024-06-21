import React from 'react'

import s from './Tickets-content.module.scss'

import TrainsList from './Train-selection/Trains-list/Trains-list'
import LastTickets from './Train-selection/Last-tickets/Last-tickets'

const TicketsContent = () => {
  return (
    <div className={s.ticketsContent}>

      <LastTickets />

      <TrainsList />
    </div>
  )
}


export default TicketsContent