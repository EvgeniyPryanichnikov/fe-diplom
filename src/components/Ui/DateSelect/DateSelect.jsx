import React, { useEffect, useState } from  "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import s from "./DateSelect.module.scss";


const DateSelect = (props) => {
  const {icon} = props
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [inputDate, setInputDate] = useState("");

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  }

  function convertDate(date) { 
    setDate(date);
    setInputDate(date.toLocaleDateString())
  }
  
  function handleInputDateChange(e){
    // TODO: добавить валидацию

    setInputDate(e.target.value);
    
    const dateString = e.target.value;

    const [day, month, year] = dateString.split('.').map(Number); 

    const newDate = new Date(year, month - 1, day);

    if (newDate.getTime() > 0) {
        setDate(newDate);
    }
  }

  return (
    <div className={s.select}>
      <div className={s.inputContainer}>
        <input 
          className={s.input}
          type="text" 
          placeholder="ДД.ММ.ГГГГ" 
          value={inputDate}
          onChange={handleInputDateChange} 
        />
        
        <button onClick={toggleCalendar}>
          <img src={icon} alt="calendar" />   
        </button>
      </div>

      {isOpen && <Calendar value={date} onChange={convertDate}/>}
    </div>
  );
};
export default DateSelect;