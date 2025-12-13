import {React, useState, useCallback} from 'react'
import s from './Passenger-item.module.scss'
import { ReactComponent as IconPlus } from '../../../../../icons/plus-circle.svg'
import { ReactComponent as IconMinus } from '../../../../../icons/minus-circle.svg'
import { ReactComponent as IconClose } from '../../../../../icons/close.svg'
import PersonInfoBlock from './Person-info-block/Person-info-block'
import PersonDetailsBlock from './Person-details-block/Person-details-block'

const PassengerItem = ({data, index}) => {
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

          <span className={s.label}>Пассажир {index + 1}</span>
        </div>

        <IconClose className={s.close}/>
      </div>

      {isShow && <div>
        <PersonInfoBlock index={index} />

        <PersonDetailsBlock index={index} />

        <div className={s.footer}>
          <button className={s.btnNext}>
            Следующий пассажир
          </button>
        </div>
      </div>}
    </div>
  )
}

export default PassengerItem
