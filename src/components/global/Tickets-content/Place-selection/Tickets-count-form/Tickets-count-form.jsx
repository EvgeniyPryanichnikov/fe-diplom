import React from 'react'
import s from './Tickets-count-form.module.scss'
import CountPeopleField from './Count-people-field/Count-people-field'
import {useDispatch, useSelector} from "react-redux";
import {setPersonsCountFrom, setPersonsCountTo} from "../../../../../store/slices/ticketsSlice";

const TicketsCountForm = ({direction}) => {
  const persons__count_from = useSelector(state => state.tickets.persons__count_from);
  const persons__count_to = useSelector(state => state.tickets.persons__count_to);

  const adult = (direction === 'departure' ? persons__count_from.adult : persons__count_to.adult)
  const child = (direction === 'departure' ? persons__count_from.child : persons__count_to.child)
  const withoutPlace = (direction === 'departure' ? persons__count_from.withoutPlace : persons__count_to.withoutPlace)

  const dispatch = useDispatch();

  function onAdultChange(value) {
    if (direction === 'departure') {
      dispatch(setPersonsCountFrom({type: 'adult', count: value}));
    } else {
      dispatch(setPersonsCountTo({type: 'adult', count: value}));
    }
  }

  function onChildChange(value) {
    if (direction === 'departure') {
      dispatch(setPersonsCountFrom({type: 'child', count: value}));
    } else {
      dispatch(setPersonsCountTo({type: 'child', count: value}));
    }
  }

  function onWithoutPlaceChange(value) {
    if (direction === 'departure') {
      dispatch(setPersonsCountFrom({type: 'withoutPlace', count: value}));
    } else {
      dispatch(setPersonsCountTo({type: 'withoutPlace', count: value}));
    }
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
