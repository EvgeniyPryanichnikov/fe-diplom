import React from 'react'
import s from './Passenger-add-block.module.scss'
import { ReactComponent as IconAdd } from '../../../../../icons/add.svg'

const PassengerAddBlock = ({handleClick}) => {
  return (
    <div className={s.addBlock}>
      <span className={s.title}>Добавить пассажира</span>

      <IconAdd onClick={handleClick} className={s.icon}/>
    </div>
  )
}

export default PassengerAddBlock