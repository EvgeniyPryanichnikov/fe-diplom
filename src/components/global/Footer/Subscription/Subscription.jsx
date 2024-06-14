import React from 'react'

import s from './Subsription.module.css'
import SubscriptionForm from './Subscription-form/Subscription-form'
import play from '../../../../icons/play.svg'
import linked from '../../../../icons/linked.svg'
import facebook from '../../../../icons/facebook.svg'
import twitter from '../../../../icons/twitter.svg'
import google from '../../../../icons/google.svg'


const Subscription = () => {
  return (
    <div className={s.subscription}>
      <div className={s.formContainer}>
        <p className={s.subscriptionTitle}>
          Подписка
        </p>

        <SubscriptionForm />
      </div>

      <div className={s.iconsContainer}>
        <p className={s.subscriptionTitle}>
          Подписывайтесь на нас
        </p>

        <img className={s.icon} src={play} alt="" />

        <img className={s.icon} src={linked} alt="" />

        <img className={s.icon} src={twitter} alt="" />

        <img className={s.icon} src={facebook} alt="" />
        
        <img className={s.icon} src={google} alt="" />
      </div>
    </div>
  )
}

export default Subscription
