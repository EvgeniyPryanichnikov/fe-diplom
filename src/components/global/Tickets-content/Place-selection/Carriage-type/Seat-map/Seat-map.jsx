import React from 'react'
import s from './Seat-map.module.scss'
import SeatMapHeader from '../../../../../common/Seat-map-header/Seat-map-header'
import SeatPriceBlock from '../../../../../common/Seat-price-block/Seat-price-block'
import InteractiveCarriageMap from '../Interactive-carriage-map/Interactive-carriage-map'
import {useSelector} from "react-redux";

const SeatMap = () => {

  const coachName = useSelector(state => state.tickets.selectedCoachInfo.coach__name.split("-")[1])

  return (
    <div className={s.seatMap}>
      <SeatMapHeader />

      <div className={s.carriageDetails}>
        <div className={s.numberCarriageBlock}>
          <span className={s.number}>
            {coachName}
          </span>

          <span>вагон</span>
        </div>

        <SeatPriceBlock />
      </div>

      <InteractiveCarriageMap />
    </div>
  )
}

export default SeatMap
