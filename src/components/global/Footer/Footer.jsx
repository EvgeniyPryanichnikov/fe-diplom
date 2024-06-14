import React from 'react'

import s from './Footer.module.css'
import Contacts from './Contacts/Contacts'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div>
        <Contacts />
      </div>
    </footer>
  )
}

export default Footer
