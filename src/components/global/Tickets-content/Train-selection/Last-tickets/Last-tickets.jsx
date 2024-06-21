import{ React, useEffect, useState} from 'react'

import s from './Last-tickets.module.scss'
import LastTicketItem from './Last-ticket-item/Last-ticket-item'
import { getLastTickets } from "../../../../../api/last-tickets";

const LastTickets = () => {
  const [lastTickets, setLastTickets] = useState();
  let tickets = useEffect(() => {getLastTickets().then(res => tickets = res)}, []);
  console.log(tickets)

  return (
    <div
     className={s.lastTickets}>
      <h3 className={s.title}>Последние билеты</h3> 

      <LastTicketItem />   
    </div>
  )
}

export default LastTickets
