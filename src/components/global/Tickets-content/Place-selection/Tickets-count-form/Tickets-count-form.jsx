import React from 'react'
import s from './Tickets-count-form.module.scss'
import CountPeopleField from './Count-people-field/Count-people-field'

const TicketsCountForm = () => {
  return (
    <div className={s.ticketsCountForm}>
      <h3 className={s.title}>Количество билетов</h3>

      <div className={s.fieldsBlock}>
        <CountPeopleField placeholder={'Взрослых'} adultField={true}/> 

        <CountPeopleField placeholder={'Детских'} childrenField={true}/>

        <CountPeopleField placeholder={'Детских "без места"'} />
      </div>
    </div>
  )
}

export default TicketsCountForm
