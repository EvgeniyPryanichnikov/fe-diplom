import React from 'react'
import s from './Tickets-content.module.scss'
import TrainsList from './Train-selection/Trains-list/Trains-list'
import TrainForm from './Train-selection/Train-form/Train-form'
import LastTickets from './Train-selection/Last-tickets/Last-tickets'

const TicketsContent = () => {
  return (
    <div className={s.ticketsContent}>
       <div className={s.sidebar}>
          <TrainForm />
          
          <LastTickets />
      </div>

      <TrainsList />
    </div>
  )
}


export default TicketsContent