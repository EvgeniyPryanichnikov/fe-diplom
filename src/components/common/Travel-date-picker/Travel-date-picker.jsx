import React from 'react'

import s from './Travel-date-picker.module.css'
import TravelForm from '../Travel-form/Travel-form'

const TravelDatePicker = () => {
  return (
    <div className={s.travel_datepicker}>
      <div>
        <p className={s.travel_datepicker__title}>Вся жизнь -</p>
        <p className={`${s.travel_datepicker__title} + ${s.bold}`}>путешествие!</p>
      </div>

      <TravelForm />
    </div>
  )
}

export default TravelDatePicker
