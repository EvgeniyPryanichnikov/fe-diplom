import React from 'react'
import s from './Seat-map.module.scss'
import SeatMapHeader from '../../../../../common/Seat-map-header/Seat-map-header'
import SeatPriceBlock from '../../../../../common/Seat-price-block/Seat-price-block'
import InteractiveCarriageMap from '../Interactive-carriage-map/Interactive-carriage-map'
import {useSelector} from "react-redux"
import {ReactComponent as IconRub} from '../../../../../../icons/rub.svg'

const SeatMap = ({direction}) => {

  const coachNameFrom = useSelector(state => state.tickets.coachsFromInfo.selectedCoachInfo?.coach__name.split("-")[1])
  const coachNameTo = useSelector(state => state.tickets.coachsToInfo.selectedCoachInfo?.coach__name.split("-")[1])

  const occupiedPlacesFrom = useSelector(state => state.tickets.coachsFromInfo.selectedCoachInfo.allSeats[0]?.seats.filter(seat => seat.available))
  const occupiedPlacesTo = useSelector(state => state.tickets.coachsToInfo?.selectedCoachInfo?.allSeats[0]?.seats.filter(seat => seat.available))

  const {
    coach: coachFrom,
    seats: seatsFrom
  } = useSelector(state => state.tickets.coachsFromInfo?.selectedCoachInfo?.allSeats[0]) || {}; //TODO для обратного поезда не реализовано?

  const {
    coach: coachTo,
    seats: seatsTo
  } = useSelector(state => state.tickets.coachsToInfo?.selectedCoachInfo?.allSeats[0]) || {};

  const selectedSeatsFrom = useSelector(state => state.tickets.selectedSeatsFrom);
  const selectedSeatsTo = useSelector(state => state.tickets.selectedSeatsTo);

  const totalCount = useSelector(state => state.tickets.totalPrice);


  return (
    <div className={s.seatMap}>
      <SeatMapHeader direction={direction}/>

      <div className={s.carriageDetails}>
        <div className={s.numberCarriageBlock}>
          <span className={s.number}>
            {direction === 'departure' ? coachNameFrom : coachNameTo}
          </span>

          <span>вагон</span>
        </div>

        <SeatPriceBlock direction={direction}/>
      </div>

      <div className={s.occupiedInfo}>
        <span>{direction === 'departure' ? occupiedPlacesFrom.length : occupiedPlacesTo.length} человек выбирают места в этом поезде</span>
      </div>

      <InteractiveCarriageMap isFrom={direction === 'departure'}
                              coachNumber={direction === 'departure' ? coachNameFrom : coachNameTo}
                              seats={
                                direction === 'departure' ? seatsFrom : seatsTo
                              }
                              coach={direction === 'departure' ? coachFrom : coachTo}
                              selectedSeats={
                                (direction === 'departure' ? selectedSeatsFrom : selectedSeatsTo).map(el => el.seat)
                              }
      />

      <div className={s.totalPrice}>
        <span>{totalCount}</span>
        <IconRub/>
      </div>
    </div>
  )
}

export default SeatMap
