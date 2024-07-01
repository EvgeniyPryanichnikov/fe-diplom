import React from 'react'
import s from './Trip-details.module.scss'
import DetailsInfoBlock from './Details-info-block/Details-info-block'
import toArrowIcon from '../../../../icons/to-arrow.svg'
import backArrowIcon from '../../../../icons/back-arrow.svg'

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
    </div>
  )
}

export default TripDetails