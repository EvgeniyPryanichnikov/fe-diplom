import { React, useState} from 'react'
import s from './Count-people-field.module.scss'
import NumberInput from '../../../../../Ui/NumberInput/NumberInput'

const CountPeopleField = ({placeholder, childrenField, adultField}) => {
  const [count, setCount] = useState(4)

  return (
    <div className={s.countPeopleField}>
      <NumberInput placeholder={placeholder}/>

      {adultField && <div>Можно добавить еще {count} пассажиров</div>}

      {childrenField && <div className={s.textChild}>
        Можно добавить еще {count} детей до 10 лет.Свое место в вагоне, как у взрослых,
        но дешевле в среднем на 50-65%
      </div>}
    </div>
  )
}

export default CountPeopleField
