import React from 'react'
import s from './Seat-map.module.scss'
import SeatMapHeader from '../../../../../common/Seat-map-header/Seat-map-header'
import SeatPriceBlock from '../../../../../common/Seat-price-block/Seat-price-block'
import InteractiveCarriageMap from '../Interactive-carriage-map/Interactive-carriage-map'

const SeatMap = () => {
  return (
    <div className={s.seatMap}>
      <SeatMapHeader />

      <div className={s.carriageDetails}>
        <div className={s.numberCarriageBlock}>
          <span className={s.number}>
            07
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
