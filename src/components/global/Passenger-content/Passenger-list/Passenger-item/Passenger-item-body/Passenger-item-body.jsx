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
      <AgeSelect />

      <NameInput label={'Фамилия'}/>
      <NameInput label={'Имя'}/>
      <NameInput label={'Отчество'}/>

      <GenderInput label={'Пол'}/>
      <BirthdateInput label={'Дата Рождения'}/>

      <CheckboxInput />
    </div>
  )
}

export default PassengerItemBody