import React from 'react'
import s from './Personal-data-block.module.scss'
import NameInput from '../../../../../Ui/NameInput/NameInput'
import MailInput from '../../../../../Ui/MailInput/MailInput'
import PhoneInput from '../../../../../Ui/PhoneInput/PhoneInput'
import {useDispatch, useSelector} from "react-redux"
import {setPassengerInfo, setUserInfo} from "../../../../../../store/slices/ticketsSlice"

const PersonalDataBlock = () => {
  const userInfo = useSelector(state => state.tickets.userInfo)
  const {
    first_name,
    last_name,
    patronymic,
    phone,
    email,
    payment_method,
  } = userInfo;

  const dispatch = useDispatch()
  function handleInputChange(option, value) {
    dispatch(setUserInfo({value, option}))
  }

  return (
    <div className={s.personalData}>
      <div className={s.surname}>
        <NameInput label={'Фамилия'} option={'first_name'} handleInputChange={handleInputChange} value={first_name}/>
      </div>

      <div className={s.firstName}>
        <NameInput label={'Имя'} option={'last_name'} handleInputChange={handleInputChange} value={last_name}/>
      </div>

      <div className={'patronymic'}>
        <NameInput label={'Отчество'} option={'patronymic'} handleInputChange={handleInputChange} value={patronymic}/>
      </div>

      <div className={s.email}>
        <MailInput label={'E-mail'} option={'email'} handleInputChange={handleInputChange} value={email}/>
      </div>

      <div className={s.phone}>
        <PhoneInput label={'Контактный телефон'} option={'phone'} handleInputChange={handleInputChange} value={phone}/>
      </div>
    </div>
  )
}

export default PersonalDataBlock
