import React from 'react'
import s from './Person-info-block.module.scss'
import AgeSelect from '../../../../../Ui/AgeSelect/AgeSelect'
import NameInput from '../../../../../Ui/NameInput/NameInput'
import GenderInput from '../../../../../Ui/GenderInput/GenderInput'
import BirthdateInput from '../../../../../Ui/BirthdateInput/BirthdateInput'
import CheckboxInput from '../../../../../Ui/CheckboxInput/CheckboxInput'
import {useDispatch, useSelector} from "react-redux";
import {setPassengerInfo} from "../../../../../../store/slices/ticketsSlice";

const PersonInfoBlock = ({index}) => {
  const personsInfo = useSelector(state => state.tickets.passengersInfo);
  const {
    age,
    firstname,
    lastname,
    patronymic,
    gender,
    birthdate,
    limitedMobility
  } = personsInfo[index]

  const dispatch = useDispatch()
  function handleInputChange(option, value) {
    dispatch(setPassengerInfo({value, option, index}))
  }
  
  return (
    <div className={s.itemBody}>
      <div className={s.age}>
        <AgeSelect index={index} value={age} handleInputChange={handleInputChange} option={'age'}/>
      </div>

      <div className={s.lastName}>
        <NameInput label={'Фамилия'} option={'lastName'} handleInputChange={handleInputChange} value={lastname}/>
      </div>

      <div className={s.firstName}>
        <NameInput label={'Имя'} option={'firstName'} handleInputChange={handleInputChange} value={firstname}/>
      </div>

      <div className={s.patronymic}>
        <NameInput label={'Отчество'} option={'patronymic'} handleInputChange={handleInputChange} value={patronymic}/>
      </div>

      <div className={s.gender}>
        <GenderInput label={'Пол'} option={'gender'} handleInputChange={handleInputChange} value={gender}/>
      </div>

      <div className={s.birthday}>
        <BirthdateInput label={'Дата Рождения'} option={'birthdate'} handleInputChange={handleInputChange} value={birthdate}/>
      </div>

      <div className={s.limitedMobility}>
        <CheckboxInput label={'ограниченная подвижность'} option={'limitedMobility'} handleInputChange={handleInputChange} id={"limitedMobility" + index} value={limitedMobility}/>
      </div>
    </div>
  )
}

export default PersonInfoBlock
