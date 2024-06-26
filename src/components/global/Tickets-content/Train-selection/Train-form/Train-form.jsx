import { React, useState } from 'react'
import { useDispatch } from "react-redux"
import { setSecondClass, setFirstClass, setThirdClass, setFourthClass, setWiFi } from '../../../../../store/slices/ticketsSlice'
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
  const dispatch = useDispatch()

  function handleSwitchSecond(value) {
    dispatch(setSecondClass(value ? value : null))
  }

  function handleSwitchFirst(value) {
    dispatch(setFirstClass(value ? value : null))
  }

  function handleSwitchThird(value) {
    dispatch(setThirdClass(value ? value : null))
  }

  function handleSwitchFourth(value) {
    dispatch(setFourthClass(value ? value : null))
  }

  function handleSwitchWiFi(value) {
    dispatch(setWiFi(value ? value : null))
  }

  function handleSwitchExpress(value) {
    dispatch(setFourthClass(value ? value : null))
  }

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue)
    set_maxValue(e.maxValue)
  }

  return (
    <div className={s.trainForm}>
      <div className={s.dateGroup}>
        <DateSelect 
          className={s.dateSelect}
          label={'Дата поездки'}
        />

        <DateSelect label={'Дата возвращения'}/>
      </div>

      <div className={s.switchGroup}>
        <SwitchInput
          icon={coupeIcon} 
          label={'Купе'} 
          handleSwitchInput={handleSwitchSecond}
        />

        <SwitchInput 
          icon={reservedSeatIcon} 
          label={'Плацкарт'}
          handleSwitchInput={handleSwitchThird}
        />

        <SwitchInput 
          icon={sedentaryIcon} 
          label={'Сидячий'}
          handleSwitchInput={handleSwitchFourth}
        />

        <SwitchInput 
          icon={starIcon} 
          label={'Люкс'}
          handleSwitchInput={handleSwitchFirst}
        />

        <SwitchInput 
          icon={wifiIcon} 
          label={'Wi-fi'}
          handleSwitchInput={handleSwitchWiFi}
        />

        <SwitchInput 
          icon={expressIcon} 
          label={'Экспресс'}
          handleSwitchInput={handleSwitchExpress}
        />
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
