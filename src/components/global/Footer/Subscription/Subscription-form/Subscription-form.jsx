import {React, useState} from 'react'

import s from './Subscription-form.module.scss'
import TextInput from '../../../../Ui/TextInput/TextInput'
import { getSubscription } from "../../../../../api/subscription";

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');

  function handleTextInput(value) {
    getSubscription(value).then(res => setEmail(res));
  }

  return (
    <form className={s.form}>
      <TextInput 
        label='Будьте в курсе событий'
        placeholder="e-mail"
        handleTextInput={handleTextInput}
      />

      <button className={s.button}>Отправить</button>
    </form>
  )
}

export default SubscriptionForm
