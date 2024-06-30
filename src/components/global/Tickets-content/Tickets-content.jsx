import React from 'react'
import { Route, Routes } from "react-router-dom";
import s from './Tickets-content.module.scss'
import TrainsList from './Train-selection/Trains-list/Trains-list'
import TrainForm from './Train-selection/Train-form/Train-form'
import LastTickets from './Train-selection/Last-tickets/Last-tickets'
import PlaceSelection from './Place-selection/Place-selection'

const TicketsContent = () => {
  return (
    <div className={s.ticketsContent}>
       <div className={s.sidebar}>
          <TrainForm />
          
          <LastTickets />
      </div>
      
      <Routes>
        <Route path='*' element={<TrainsList />}/>
        <Route path='place' element={<PlaceSelection />} />
      </Routes>
    </div>
  )
}

export default TicketsContent