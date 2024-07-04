import React from 'react'
import {useSelector} from "react-redux";
import s from './Seat-price-block.module.scss'
import { ReactComponent as IconRub } from '../../../icons/rub.svg'
import { ReactComponent as IconWifi } from '../../../icons/wifi.svg'
import { ReactComponent as IconCup } from '../../../icons/cup.svg'
import { ReactComponent as IconConditioner } from '../../../icons/air-conditioner.svg'
import { ReactComponent as IconLinens } from '../../../icons/linens.svg'
import Tooltip from '../Tooltip/Tooltip'

const SeatPriceBlock = () => {
  const coachInfo = useSelector(state => state.tickets.selectedCoachInfo.allSeats[0].coach)
  console.log(coachInfo)
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
          <Tooltip children={<IconConditioner/>} text={'кондиционер'} />
          <Tooltip children={<IconWifi/>} text={'wifi'} />
          <Tooltip children={<IconLinens/>} text={'бельё'} />
          <Tooltip children={<IconCup/>} text={'питание'} />
        </div>
      </div>
    </div>
  )
}

export default SeatPriceBlock