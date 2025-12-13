import {React, useEffect, useState} from 'react'
import s from './Travel-form.module.scss'
import { getCities } from "../../../api/cities"
import CitySelect from '../../Ui/CitySelect/CitySelect'
import DateSelect from '../../Ui/DateSelect/DateSelect'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setCityFrom, setCityTo, setDateFrom, setDateTo } from "../../../store/slices/ticketsSlice"

const TravelForm = ({isRow}) => {
	const [cities, setCities] = useState([]);

  const {
    date_end,
    date_start
  } = useSelector(state => state.tickets.filters); // получение данных

  const {from: cityFrom, to: cityTo} = useSelector(state => state.tickets.cities)
  const dispatch = useDispatch() // изменение данных

	function handleCityInput(value) {
    getCities(value).then(res => setCities(res));
  }

	function handleCityFromSelect(value) {
    dispatch(setCityFrom(value))
  }

  function handleCityToSelect(value) {
    dispatch(setCityTo(value))
  }

  const handleChangeDateFrom = (date) => {
    dispatch(setDateFrom(date))
  }

  const handleChangeDateTo = (date) => {
    dispatch(setDateTo(date))
  }


  useEffect(() => {
    if (cityFrom)
    localStorage.setItem("cityFrom", JSON.stringify(cityFrom))
    if (cityTo)
    localStorage.setItem("cityTo", JSON.stringify(cityTo))
    if (date_start)
    localStorage.setItem("date_start", date_start)
    if (date_end)
    localStorage.setItem("date_end", date_end)
  }, [date_start, date_end, cityFrom, cityTo]);

  useEffect(() => {
    const cityFromLocalStorage = localStorage.getItem("cityFrom");

    if (cityFromLocalStorage) {
      dispatch(setCityFrom(JSON.parse(cityFromLocalStorage)))
    }

    const cityToLocalStorage = localStorage.getItem("cityTo");

    if (cityToLocalStorage) {
      dispatch(setCityTo(JSON.parse(cityToLocalStorage)))
    }

    const dateStartLocalStorage = localStorage.getItem("date_start");

    if (dateStartLocalStorage) {
      dispatch(setDateFrom(dateStartLocalStorage))
    }

    const dateEndLocalStorage = localStorage.getItem("date_end");

    if (dateEndLocalStorage) {
      dispatch(setDateTo(dateEndLocalStorage))
    }

  }, []);

  return (
    <div className={isRow ? s.isRow : s.travelForm}>
			<div className={s.fields}>
				<div className={s.direction}>
					<p className={s.title}>
						Направление
					</p>

					<div className={s.directionFields}>
						<CitySelect
              selectedCity={cityFrom}
							options={cities}
							handleCityInput={handleCityInput}
							handleCitySelect={handleCityFromSelect}
							placeholder={"Откуда"}
						/>

						<CitySelect
              selectedCity={cityTo}
							options={cities}
							handleCityInput={handleCityInput}
							handleCitySelect={handleCityToSelect}
							placeholder={"Куда"}
						/>
					</div>
				</div>

				<div className={s.date}>
					<p className={s.title}>
						Дата
					</p>

					<div className={s.dateFields}>
						<DateSelect selectedDate={date_start} handleChangeDate={handleChangeDateFrom} className={s.dateSelect}/>

						<DateSelect selectedDate={date_end} handleChangeDate={handleChangeDateTo} />
					</div>
				</div>
			</div>

			<div className={s.buttonContainer}>
				<Link to={"/trains/*"} className={s.buttonFind}>
					Найти билеты
				</Link>
			</div>
    </div>
  )
}

export default TravelForm
