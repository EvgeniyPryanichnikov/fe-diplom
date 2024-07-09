import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';
import { ReactComponent as IconCalendar } from '../../../icons/calendar.svg'
import 'react-calendar/dist/Calendar.css';
import s from "./BirthdateInput.module.scss";


const BirthdateInput = (props) => {
  const {handleChangeDate, selectedDate} = props;
  const label = props.label
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [inputDate, setInputDate] = useState(selectedDate);

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (selectedDate) {
      setDate(date);
      setInputDate(selectedDate)
    }
  }, [selectedDate]);

  function convertDate(date) {
    setDate(date);
    setInputDate(date.toLocaleDateString())
    handleChangeDate(date.toLocaleDateString())
  }

  function handleInputDateChange(e){
    // TODO: добавить валидацию

    setInputDate(e.target.value)

    const dateString = e.target.value
    const [day, month, year] = dateString.split('.').map(Number);
    const newDate = new Date(year, month - 1, day);

    if (newDate.getTime() > 0) {
      setDate(newDate);
    }
  }

  return (
    <div className={s.select}>
      <p className={s.label}>
        Дата рождения
      </p>
     
      <div className={s.inputContainer}>
        <input
          className={s.input}
          type="text"
          placeholder="ДД.ММ.ГГГГ"
          value={inputDate}
          onChange={handleInputDateChange}
        />

        <button onClick={toggleCalendar}>
          <IconCalendar />
        </button>
      </div>

      {isOpen && <Calendar className={s.calendar} value={date} onChange={convertDate}/>}
    </div>
  )
}

export default BirthdateInput