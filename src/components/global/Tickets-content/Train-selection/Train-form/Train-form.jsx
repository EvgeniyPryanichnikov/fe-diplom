import { React, useState, useCallback } from 'react'
import s from './Train-form.module.scss'
import DateSelect from '../../../../Ui/DateSelect/DateSelect'
import SwitchInput from '../../../../Ui/SwitchInput/SwitchInput'
import MultiRangeSlider from "multi-range-slider-react"
import DirectionBlock from '../../../../common/Direction-block/Direction-block'

import coupeIcon from '../../../../../icons/coupe.svg'
import reservedSeatIcon from '../../../../../icons/reserved-seat.svg'
import sedentaryIcon from '../../../../../icons/sedentary.svg'
import starIcon from '../../../../../icons/star.svg'
import wifiIcon from '../../../../../icons/wifi.svg'
import expressIcon from '../../../../../icons/express.svg'
import toArrowIcon from '../../../../../icons/to-arrow.svg'
import backArrowIcon from '../../../../../icons/back-arrow.svg'


const TrainForm = () => {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div className={s.trainForm}>
      <div className={s.dateGroup}>
        <DateSelect 
        className={s.dateSelect}
        label={'Дата поездки'}/>

        <DateSelect label={'Дата возвращения'}/>
      </div>

      <div className={s.switchGroup}>
        <SwitchInput icon={coupeIcon} label={'Купе'}/>
        <SwitchInput icon={reservedSeatIcon} label={'Плацкарт'}/>
        <SwitchInput icon={sedentaryIcon} label={'Сидячий'}/>
        <SwitchInput icon={starIcon} label={'Люкс'}/>
        <SwitchInput icon={wifiIcon} label={'Wi-fi'}/>
        <SwitchInput icon={expressIcon} label={'Экспресс'}/>
      </div>

      <div className={s.price}>
        <h3 className={s.title}>Стоимость</h3>

        <div className={s.range}>
          <MultiRangeSlider 
            min={0}
            max={100}
            step={5}
            minValue={minValue}
            maxValue={maxValue}
            onInput={(e) => {
              handleInput(e);
            }}
          />
        </div>
      </div>

			<DirectionBlock 
			  icon={toArrowIcon}
				title={'Туда'}
				labelLeft={'Время отбытия'}
				labelRight={'Время прибытия'}
			/>
			<DirectionBlock
				icon={backArrowIcon}
				title={'Обратно'}
				labelLeft={'Время отбытия'}
				labelRight={'Время прибытия'}
			/>
    </div>
  )
}

export default TrainForm
