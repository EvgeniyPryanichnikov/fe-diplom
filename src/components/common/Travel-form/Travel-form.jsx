import {React, useState} from 'react'

import s from './Travel-form.module.css'
import calendar from '../../../icons/calendar.svg'
import geolocation from '../../../icons/geolocation.svg'
import { getCities } from "../../../api/cities";
import CitySelect from '../../Ui/CitySelect/CitySelect'
import DateSelect from '../../Ui/DateSelect/DateSelect'

const TravelForm = () => {
	const [cities, setCities] = useState([]);

	function handleCityInput(value) {
    getCities(value).then(res => setCities(res));
  }

	function handleCitySelect(value) {
    console.log(value);
  }
 
  return (
    <div className={s['travel-form']}>
			<div className={s['travel-form__fields']}>
				<div className={s['travel-form__direction']}>
					<p className={s.title}>
						Направление
					</p>

					<div className={s.directionFields}>
						<CitySelect 
							options={cities} 
							handleCityInput={handleCityInput} 
							handleCitySelect={handleCitySelect} 
							icon={geolocation} 
							placeholder={"Откуда"} 
						/>

						<CitySelect 
							options={cities} 
							handleCityInput={handleCityInput} 
							handleCitySelect={handleCitySelect} 
							icon={geolocation} 
							placeholder={"Куда"}
						/>
					</div>
				</div>

				<div className={s['travel-form__date']}>
					<p className={s.title}>
						Дата
					</p>

					<div className={s.dateFields}>
						<DateSelect icon={calendar} />

						<DateSelect icon={calendar} />
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
