import React from 'react'
import s from './PassengerItem.module.scss'
import { ReactComponent as IconAvatar } from '../../../../../../icons/avatar-default.svg'
export const PassengerItem = ({item}) => {
  const {
    age,
    firstname,
    lastname,
    patronymic,
    gender,
    birthdate,
    document_type,
    document_data
  } = item

  return (
    <div className={s.PassengerItem}>
      <div className={s.avatarBlock}>
        <IconAvatar />

        <div className={s.type}>{age}</div>

      </div>

      <div className={s.dataBlock}>
        <div className={s.name}>{firstname} {lastname} {patronymic}</div>

        <div className={s.gender}>пол {gender == true ? 'мужской' : 'женский'}</div>

        <div className={s.birthdate}>Дата рождения {birthdate}</div>
        
        <div className={s.docInfo}>{document_type} {document_data.series} {document_data.number}</div>
      </div>
    </div>  
  )
}
