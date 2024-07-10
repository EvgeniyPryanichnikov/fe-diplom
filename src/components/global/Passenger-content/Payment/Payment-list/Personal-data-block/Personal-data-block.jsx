import React from 'react'
import s from './Personal-data-block.module.scss'
import NameInput from '../../../../../Ui/NameInput/NameInput'
import MailInput from '../../../../../Ui/MailInput/MailInput'
import PhoneInput from '../../../../../Ui/PhoneInput/PhoneInput'

const PersonalDataBlock = () => {
  return (
    <div className={s.personalData}>
      <div className={s.surname}>
        <NameInput label={'Фамилия'}/>
      </div> 

      <div className={s.firstName}>
        <NameInput label={'Имя'}/>
      </div>

      <div className={'patronymic'}>
        <NameInput label={'Отчество'}/>
      </div>

      <div className={s.email}>
        <MailInput label={'E-mail'} />
      </div>

      <div className={s.phone}>
        <PhoneInput label={'Контактный телефон'}/>
      </div>
    </div>
  )
}

export default PersonalDataBlock