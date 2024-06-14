import React from 'react'

import s from './Footer.module.css'
import Contacts from './Contacts/Contacts'
import Subscription from './Subscription/Subscription'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.contractsSubscription}>
        <Contacts />

        <Subscription />
      </div>
    </footer>
  )
}

export default Footer
