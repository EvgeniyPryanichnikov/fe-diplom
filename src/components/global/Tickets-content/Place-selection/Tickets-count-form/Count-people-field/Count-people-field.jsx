import { React, useState} from 'react'
import s from './Count-people-field.module.scss'
import NumberInput from '../../../../../Ui/NumberInput/NumberInput'

const CountPeopleField = ({count, onChange, placeholder, childrenField, adultField, max = 4}) => {

  return (
    <div className={s.countPeopleField}>
      <NumberInput placeholder={placeholder} max={max} value={count} handleInput={onChange}/>

      {adultField && <div>Можно добавить еще {max - count} пассажиров</div>}

      {childrenField && <div className={s.textChild}>
        Можно добавить еще {max - count} детей до 10 лет.Свое место в вагоне, как у взрослых,
        но дешевле в среднем на 50-65%
      </div>}
    </div>
  )
}

export default CountPeopleField
