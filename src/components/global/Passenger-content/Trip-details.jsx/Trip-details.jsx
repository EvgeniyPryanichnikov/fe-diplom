import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import s from './Trip-details.module.scss'
import DetailsInfoBlock from './Details-info-block/Details-info-block'
import PassengersBlock from './Details-info-block/Passengers-block/Passengers-block'
import toArrowIcon from '../../../../icons/to-arrow.svg'
import backArrowIcon from '../../../../icons/back-arrow.svg'
import { ReactComponent as IconLeft } from '../../../../icons/left-arrow-yellow.svg'
import { ReactComponent as IconRight } from '../../../../icons/right-arrow-yellow.svg'
import { ReactComponent as IconRub } from '../../../../icons/rub.svg'

const TripDetails = () => {
  const departure = useSelector(state => state.tickets.selectedTrain.departure)
  const arrival = useSelector(state => state.tickets.selectedTrain.arrival)
  return (
    <div className={s.tripDetails}>
      <div className={s.title}>
        Детали поездки
      </div>

      {departure && <DetailsInfoBlock 
        direction={departure}
			  icon={toArrowIcon}
        iconYellow={<IconLeft />}
				title={'Туда'}
			/>}

      {arrival && <DetailsInfoBlock
        direction={arrival}
				icon={backArrowIcon}
        iconYellow={<IconRight />}
				title={'Обратно'}
			/>}

      <PassengersBlock />

      <div className={s.totalBlock}>
        <span className={s.total}>Итог</span>

        <div>
          <span className={s.price}>9998</span>

          <IconRub />
        </div>
      </div>
    </div>
  )
}

export default TripDetails