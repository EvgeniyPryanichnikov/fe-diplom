import { React, useState, useCallback } from 'react'
import s from './Passengers-block.module.scss'
import { useSelector} from "react-redux"
import { ReactComponent as IconPlus } from '../../../../../../icons/plus.svg'
import { ReactComponent as IconMinus } from '../../../../../../icons/minus.svg'
import { ReactComponent as IconPassenger } from '../../../../../../icons/passenger.svg'
import { ReactComponent as IconRub } from '../../../../../../icons/rub.svg'

const PassengersBlock = () => {
  const [isShow, setIsShow] = useState(false)
	const handleShowInfoBlock = useCallback(() => {
		setIsShow(prev => !prev)
  }, [])

  const adult  = useSelector(state => state.tickets.persons__count_from.adult)
  const child  = useSelector(state => state.tickets.persons__count_from.child)
  const withoutPlace = useSelector(state => state.tickets.persons__count_from.withoutPlace)
  
  return (
    <div>
      <div className={s.passengersInfoBlock}> 
        <div className={s.titleBlock}>
          <IconPassenger />

          <p className={s.title}>Пассажиры</p>

          <div 
            className={s.iconShow}
            onClick={handleShowInfoBlock}
          >
            {isShow ? <IconMinus className={s.icon}/> : <IconPlus className={s.icon} />}
          </div>
        </div>

        {isShow && 
          <div className={s.infoBlock}>
            <div className={s.passengers}>
              <div className={s.item}>
                <span className={s.quantity}>{adult} взрослых</span>

                <div>
                  <span className={s.price}>4998</span>

                  <IconRub />
                </div>
              </div>
             
              {child !== 0 && <div className={s.item}>
                <span className={s.quantity}>{child} детский</span>

                <div>
                  <span className={s.price}>1550</span>

                  <IconRub />
                </div>
              </div>}
            </div>
          </div>   
        }
      </div>
    </div>
  )
}

export default PassengersBlock