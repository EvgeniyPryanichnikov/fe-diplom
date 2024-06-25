import {React, useState} from 'react'
import s from './Travel-form.module.scss'
import geolocation from '../../../icons/geolocation.svg'
import { getCities } from "../../../api/cities";
import CitySelect from '../../Ui/CitySelect/CitySelect'
import DateSelect from '../../Ui/DateSelect/DateSelect'
import {Link} from "react-router-dom";
import {searchRoutes} from "../../../api/routes";
import {useDispatch, useSelector} from "react-redux";
import {setCityFrom, setCityTo, setDateFrom, setDateTo, updateTicketsInfo} from "../../../store/slices/ticketsSlice";

const TravelForm = ({isRow}) => {
	const [cities, setCities] = useState([]);

  const {
    date_end,
    date_start
  } = useSelector(state => state.tickets.filters); // получение данных

  const {from: cityFrom, to: cityTo} = useSelector(state => state.tickets.cities)
  const dispatch = useDispatch(); // изменение данных



	function handleCityInput(value) {
    getCities(value).then(res => setCities(res));
  }

	function handleCityFromSelect(value) {
    dispatch(setCityFrom(value));
  }

  function handleCityToSelect(value) {
    dispatch(setCityTo(value));
  }


  const handleSearch = () => {
    // searchRoutes({
    //   from_city_id: cityFrom._id,
    //   to_city_id: cityTo._id,
    //   date_start: dateFrom.split(".").reverse().join("-"),
    //   date_end: dateTo.split(".").reverse().join("-"),
    //   limit: 20
    // }).then(res => dispatch(updateTicketsInfo(res)));
  }

  const handleChangeDateFrom = (date) => {
    dispatch(setDateFrom(date))

  }

  const handleChangeDateTo = (date) => {
    dispatch(setDateTo(date))
  }


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
							icon={geolocation}
							placeholder={"Откуда"}
						/>

						<CitySelect
              selectedCity={cityTo}
							options={cities}
							handleCityInput={handleCityInput}
							handleCitySelect={handleCityToSelect}
							icon={geolocation}
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

						<DateSelect selectedDate={date_end} handleChangeDate={handleChangeDateTo}  />
					</div>
				</div>
			</div>

			<div className={s.buttonContainer}>
				<Link to={"/tickets"} className={s['button-find']} onClick={handleSearch}>
					Найти билеты
				</Link>
			</div>
    </div>
  )
}

export default TravelForm
