import React from 'react'

import s from './Subscription-form.module.scss'
import TextInput from '../../../../Ui/TextInput/TextInput'

const SubscriptionForm = () => {
  return (
    <div className={s.form}>
      <TextInput 
        label='Будьте в курсе событий'
        placeholder="e-mail"
      />

      <button className={s.button}>Отправить</button>
    </div>
  )
}

export default SubscriptionForm
