import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import s from './Seat-price-block.module.scss'
import { ReactComponent as IconRub } from '../../../icons/rub.svg'
import { ReactComponent as IconWifi } from '../../../icons/wifi.svg'
import { ReactComponent as IconCup } from '../../../icons/cup.svg'
import { ReactComponent as IconConditioner } from '../../../icons/air-conditioner.svg'
import { ReactComponent as IconLinens } from '../../../icons/linens.svg'
import Tooltip from '../Tooltip/Tooltip'
import {toggleOptions} from "../../../store/slices/ticketsSlice"

const SeatPriceBlock = ({direction}) => {
  const fromCoach = useSelector(state => state.tickets.coachsFromInfo.selectedCoachInfo.allSeats[0]?.coach)
  const toCoach = useSelector(state => state.tickets.coachsToInfo.selectedCoachInfo.allSeats[0]?.coach)
  const selectedOptionsFrom = useSelector(state => state.tickets.selectedOptionsFrom)
  const selectedOptionsTo = useSelector(state => state.tickets.selectedOptionsTo)

  let coachInfo
  let selectedOptions

  const dispatch = useDispatch();

  if (direction === 'departure') {
    coachInfo = fromCoach
    selectedOptions = selectedOptionsFrom
  } else {
    coachInfo = toCoach
    selectedOptions = selectedOptionsTo
  }

  function handleLinensSelect() {
    dispatch(toggleOptions({direction, optionName: 'linens'}))
  }

  function handleWifiSelect() {
    dispatch(toggleOptions({direction, optionName: 'wifi'}))
  }

  function handleMealSelect() {
    dispatch(toggleOptions({direction, optionName: 'meal'}))
  }

  return (
    <div className={s.seatPriceBlock}>
      <div className={s.seats}>
        <div className={s.header}>
          <div>
            <span className={s.item}>Места</span>
            <span className={s.count}>{coachInfo.available_seats}</span>
          </div>

          <span className={s.item}>Стоимость</span>
        </div>

        {coachInfo.top_price && <div className={s.content}>
          <div className={s.quantity}>
            <span className={s.name}>Верхние</span>
          </div>

          <div>
            <span className={s.price}>{coachInfo.top_price}</span>

            <IconRub />
          </div>
        </div>}

        {coachInfo.bottom_price && <div className={s.content}>
          <div className={s.quantity}>
            <span className={s.name}>Нижние</span>
          </div>

          <div>
            <span className={s.price}>{coachInfo.bottom_price}</span>

            <IconRub />
          </div>
        </div>}

        {coachInfo.side_price !== 0 && <div className={s.content}>
          <div className={s.quantity}>
            <span className={s.name}>Боковые</span>
          </div>

          <div>
            <span className={s.price}>{coachInfo.side_price}</span>

            <IconRub />
          </div>
        </div>}
      </div>

      <div className={s.services}>
        <div className={s.title}>
          <span className={s.headItem}>Обслуживание</span>
          <span className={s.company}>ФПК</span>
        </div>

        <div className={s.iconsService}>
          {coachInfo.have_air_conditioning && <Tooltip children={<IconConditioner/>} text={'кондиционер'} disabled/>}
          {coachInfo.have_wifi  && <Tooltip children={<IconWifi/>} text={'wifi'} isActive={!!selectedOptions.find(el => el.name === 'wifi')} handleClick={handleWifiSelect}/>}
          <Tooltip children={<IconLinens />} text={'бельё'} disabled={!coachInfo.is_linens_included} handleClick={handleLinensSelect} isActive={!!selectedOptions.find(el => el.name === 'linens')}  />
          <Tooltip children={<IconCup/>} text={'питание'} handleClick={handleMealSelect} isActive={!!selectedOptions.find(el => el.name === 'meal')} />
        </div>
      </div>
    </div>
  )
}

export default SeatPriceBlock
