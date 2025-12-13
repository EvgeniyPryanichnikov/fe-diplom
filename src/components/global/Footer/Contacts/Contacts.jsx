import React from 'react'

import s from './Contacts.module.scss'
import { ReactComponent as IconPhone } from '../../../../icons/phone.svg'
import { ReactComponent as IconSkype } from '../../../../icons/skype.svg'
import { ReactComponent as IconEnvelop } from '../../../../icons/envelope.svg'
import { ReactComponent as IconGeo } from '../../../../icons/geolocation.svg'


const Contacts = () => {
	const contacts = [
		{ id: 1,
			icon: <IconPhone />,
			text: '8 (800) 000 00 00'
		},

		{
			id: 2,
			icon: <IconEnvelop />,
			text: 'inbox@mail.ru'
		},

		{
			id: 3,
			icon: <IconSkype />,
			text: 'tu.train.tickets'
		},

		{
			id: 4,
			icon: <IconGeo />,
			text: 'г. Москва ул. Московская 8-800-555-35-35'
		},
	]
	
  return (
    <div className={s.contacts} id='contacts'>
			<p className={s.title}>
				Свяжитесь с нами
			</p>

			<div className={s.list}>
				{contacts.map(contact => (
					<div className={s.item} key={contact.id}>
						<div>{contact.icon}</div>

						<span className={s.text}>{contact.text}</span>
					</div>
				))}
			</div>
		</div>
  )
}

export default Contacts
