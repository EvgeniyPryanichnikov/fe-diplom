import {React, useState, useCallback} from 'react'
import s from './Passenger-item.module.scss'
import { ReactComponent as IconPlus } from '../../../../../icons/plus-circle.svg'
import { ReactComponent as IconMinus } from '../../../../../icons/minus-circle.svg'
import { ReactComponent as IconClose } from '../../../../../icons/close.svg'
import PassengerItemBody from './Passenger-item-body/Passenger-item-body'

const PassengerItem = () => {
  const [isShow, setIsShow] = useState(false)
  const handleShowBlock = useCallback(() => {
		setIsShow(prev => !prev)
  }, [])
  return (
    <div className={s.passengerItem}>
      <div className={s.header}>
        <div className={s.title}>
          <div onClick={handleShowBlock}>
            {isShow ? <IconMinus /> : <IconPlus  />}
          </div>
          

          <span className={s.label}>Пассажир 1</span>
        </div>

        <IconClose className={s.close}/>
      </div>

      <PassengerItemBody />
    </div>
  )
}

export default PassengerItem