import React from 'react'
import s from './Tickets-count-form.module.scss'
import CountPeopleField from './Count-people-field/Count-people-field'
import {useDispatch, useSelector} from "react-redux";
import {setPersonsCount} from "../../../../../store/slices/ticketsSlice";

const TicketsCountForm = () => {
  const {adult, child, withoutPlace} = useSelector(state => state.tickets.persons__count);
  const dispatch = useDispatch();

  function onAdultChange(value) {
    dispatch(setPersonsCount({type: 'adult', count: value}));
  }

  function onChildChange(value) {
    dispatch(setPersonsCount({type: 'child', count: value}));
  }

  function onWithoutPlaceChange(value) {
    dispatch(setPersonsCount({type: 'withoutPlace', count: value}));
  }

  return (
    <div className={s.ticketsCountForm}>
      <h3 className={s.title}>Количество билетов</h3>
      <div className={s.fieldsBlock}>
        <CountPeopleField count={adult} onChange={onAdultChange} placeholder={'Взрослых'} adultField={true}/>

        <CountPeopleField count={child} onChange={onChildChange} placeholder={'Детских'} childrenField={true}/>

        <CountPeopleField count={withoutPlace} onChange={onWithoutPlaceChange} placeholder={'Детских "без места"'} />
      </div>
    </div>
  )
}

export default TicketsCountForm
