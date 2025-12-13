import React from 'react'
 import s from './tickets-header.module.scss'
import Header from '../Header/Header'
import StepsBlock from './Steps-block/Steps-block'
import TravelForm from '../../common/Travel-form/Travel-form'

const TicketsHeader = () => {
  return (
    <div className={s.ticketsHeader}>
      <Header />

      <div>
        <TravelForm
          isRow={true}
        />
      </div>

      <StepsBlock />
    </div>
  )
}

export default TicketsHeader
