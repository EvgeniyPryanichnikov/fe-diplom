import React from 'react'
import s from './PassengerItem.module.scss'
import { ReactComponent as IconAvatar } from '../../../../../../icons/avatar-default.svg'
export const PassengerItem = () => {
  return (
    <div className={s.PassengerItem}>
      <div className={s.avatarBlock}>
        <IconAvatar />

        <div className={s.type}>Взрослый</div>

      </div>

      <div className={s.dataBlock}>
        <div className={s.name}>Мартынюк Ирина Эдуардовна</div>

        <div className={s.gender}>пол женский</div>

        <div className={s.birthdate}>Дата рождения 17.02.1985</div>
        
        <div className={s.docInfo}>Паспорт РФ 4204 380694</div>
      </div>
    </div>  
  )
}
