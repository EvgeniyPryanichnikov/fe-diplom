import React from 'react'

import s from './Travel-form.module.css'
import Select from '../../Ui/Select/Select'

const TravelForm = () => {
  return (
    <div className={s['travel-form']}>
			<div className={s['travel-form__fields']}>
				<div className={s['travel-form__direction']}>
					<p className={s.title}>
						Направление
					</p>

					<div className={s.directionFields}>
						<Select />

						<Select />
					</div>
				</div>

				<div className={s['travel-form__date']}>
					<p className={s.title}>
						Дата
					</p>

					<div className={s.dateFields}>
						<Select />

						<Select />
					</div>
				</div>
			</div>

			<div className={s['button-container']}>
				<button className={s['button-find']}>
					Найти билеты
				</button>
			</div>
    </div>
  )
}

export default TravelForm
