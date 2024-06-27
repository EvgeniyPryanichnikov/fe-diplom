import React from 'react'
import s from './Subsription.module.scss'
import SubscriptionForm from './Subscription-form/Subscription-form'
import { ReactComponent as IconPlay } from '../../../../icons/play.svg'
import { ReactComponent as IconLink } from '../../../../icons/linked.svg'
import { ReactComponent as IconFacebook } from '../../../../icons/facebook.svg'
import { ReactComponent as IconTwitter } from '../../../../icons/twitter.svg'
import { ReactComponent as IconGoogle } from '../../../../icons/google.svg'


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

        <IconPlay className={s.icon}/>

        <IconLink className={s.icon}/>

        <IconFacebook className={s.icon}/>

        <IconTwitter className={s.icon}/>
        
        <IconGoogle className={s.icon}/>
      </div>
    </div>
  )
}

export default Subscription
