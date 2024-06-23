import{ React, useEffect, useState} from 'react'

import s from './Last-tickets.module.scss'
import LastTicketItem from './Last-ticket-item/Last-ticket-item'
import { getLastTickets } from "../../../../../api/last-tickets";

const LastTickets = () => {
  const [lastTickets, setLastTickets] = useState();

  useEffect(() => {
		getLastTickets().then(res => setLastTickets(res))
	}, [])

  console.log(lastTickets)

  return (
    <div
     className={s.lastTickets}>
      <h3 className={s.title}>Последние билеты</h3> 

      {lastTickets?.map((el, index) => (
        <LastTicketItem
          key={index}
          cityFrom={el.departure.from.city.name}
          cityTo={el.departure.to.city.name}
          stationNameFrom={el.departure.from.railway_station_name}
          stationNameTo={el.departure.to.railway_station_name}
          wifi={el.departure.have_wifi}
          express={el.departure.is_express}
          minPrice={el.min_price}
        />
      ))}
    </div>
  )
}

export default LastTickets
