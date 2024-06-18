import React from 'react'

import s from './tickets-header.module.scss'
import Header from '../header/header'

const TicketsHeader = () => {
  return (
    <div className={s.ticketsHeader}>
      <Header />
    </div>
  )
}

export default TicketsHeader
