import React from 'react'
import s from './Train-form.module.scss'
import DateSelect from '../../../../Ui/DateSelect/DateSelect'
import SwitchInput from '../../../../Ui/SwitchInput/SwitchInput'

const TrainForm = () => {
  return (
    <div className={s.trainForm}>
      <div className={s.dateGroup}>
        <DateSelect label={'Дата поездки'}/>

        <DateSelect label={'Дата возвращения'}/>
      </div>

      <div className={s.switchGroup}>
        <SwitchInput />
      </div>
    </div>
  )
}

export default TrainForm
