import React from 'react'
import s from './Passenger-item-body.module.scss'
import AgeSelect from '../../../../../Ui/AgeSelect/AgeSelect'
import NameInput from '../../../../../Ui/NameInput/NameInput'
import GenderInput from '../../../../../Ui/GenderInput/GenderInput'
import BirthdateInput from '../../../../../Ui/BirthdateInput/BirthdateInput'
import CheckboxInput from '../../../../../Ui/CheckboxInput/CheckboxInput'

const PassengerItemBody = () => {
  return (
    <div className={s.itemBody}>
      <div className={s.age}>
        <AgeSelect />  
      </div>

      <div className={s.lastName}>
        <NameInput label={'Фамилия'}/>
      </div>

      <div className={s.firstName}>
        <NameInput label={'Имя'}/>
      </div>

      <div className={s.patronymic}>
        <NameInput label={'Отчество'}/>
      </div>

      <div className={s.gender}>
        <GenderInput label={'Пол'}/>
      </div>

      <div className={s.birthday}>
        <BirthdateInput label={'Дата Рождения'}/>
      </div>

      <div className={s.limitedMobility}>
        <CheckboxInput/>
      </div>
    </div>
  )
}

export default PassengerItemBody