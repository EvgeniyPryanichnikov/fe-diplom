import React from 'react'

import s from './Contacts.module.scss'
import phone from '../../../../icons/phone.svg'
import skype from '../../../../icons/skype.svg'
import envelope from '../../../../icons/envelope.svg'
import geolocation from '../../../../icons/geolocation.svg'


const Contacts = () => {
	const contacts = [
		{ id: 1,
			icon: phone,
			text: '8 (800) 000 00 00'
		},

		{
			id: 2,
			icon: envelope,
			text: 'inbox@mail.ru'
		},

		{
			id: 3,
			icon: skype,
			text: 'tu.train.tickets'
		},

		{
			id: 4,
			icon: geolocation,
			text: 'г. Москва ул. Московская 8-800-555-35-35'
		},
	]
  return (
    <div className={s.contacts}>
			<p className={s.title}>
				Свяжитесь с нами
			</p>

			<div className={s.list}>
				{contacts.map(contact => (
					<div className={s.item}>
						<img src={contact.icon} alt="" />

						<span className={s.text}>{contact.text}</span>
					</div>
				))}
			</div>
		</div>
  )
}

export default Contacts
