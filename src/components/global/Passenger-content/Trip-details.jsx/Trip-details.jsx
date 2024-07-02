import React from 'react'
import s from './Trip-details.module.scss'
import DetailsInfoBlock from './Details-info-block/Details-info-block'
import PassengersBlock from './Details-info-block/Passengers-block/Passengers-block'
import toArrowIcon from '../../../../icons/to-arrow.svg'
import backArrowIcon from '../../../../icons/back-arrow.svg'
import { ReactComponent as IconRub } from '../../../../icons/rub.svg'

const TripDetails = () => {
  return (
    <div className={s.tripDetails}>
      <div className={s.title}>
        Детали поездки
      </div>

      <DetailsInfoBlock 
			  icon={toArrowIcon}
				title={'Туда'}
			/>

      <DetailsInfoBlock
				icon={backArrowIcon}
				title={'Обратно'}
			/>

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