import React from 'react'

import s from './Subscription-form.module.scss'
import { getSubscription } from "../../../../../api/subscription";
import EmailInput from '../../../../Ui/EmailInput/EmailInput';

const SubscriptionForm = () => {
  function emailHandler(value) {
    // getSubscription(value).then(res => setEmail(res))
  }

  return (
    <form className={s.form}>
      <EmailInput
        emailHandler={emailHandler}
        label={'Будь в курсе событий'}
      />

      <button className={s.button}>Отправить</button>
    </form>
  )
}

export default SubscriptionForm
