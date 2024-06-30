import React from 'react'
import s from './Seat-price-block.module.scss'
import { ReactComponent as IconRub } from '../../../icons/rub.svg'
import { ReactComponent as IconWifi } from '../../../icons/wifi.svg'
import { ReactComponent as IconCup } from '../../../icons/cup.svg'
import { ReactComponent as IconConditioner } from '../../../icons/air-conditioner.svg'
import { ReactComponent as IconLinens } from '../../../icons/linens.svg'
import Tooltip from '../Tooltip/Tooltip'

const SeatPriceBlock = () => {
  return (
    <div className={s.seatPriceBlock}>
      <div className={s.seats}>
        <div className={s.header}>
          <div>
            <span className={s.item}>Места</span>
            <span className={s.count}>89</span>
          </div>
          
          <span className={s.item}>Стоимость</span> 
        </div>

        <div className={s.content}>
          <div className={s.quantity}>
            <span className={s.name}>Верхние</span>
            <span className={s.value}>3</span>
          </div>

          <div>
            <span className={s.price}>2320</span>
            
            <IconRub />
          </div>  
        </div>
        <div className={s.content}>
          <div className={s.quantity}>
            <span className={s.name}>Верхние</span>
            <span className={s.value}>3</span>
          </div>

          <div>
            <span className={s.price}>2320</span>
            
            <IconRub />
          </div>  
        </div>
        <div className={s.content}>
          <div className={s.quantity}>
            <span className={s.name}>Верхние</span>
            <span className={s.value}>3</span>
          </div>

          <div>
            <span className={s.price}>2320</span>
            
            <IconRub />
          </div>  
        </div>
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