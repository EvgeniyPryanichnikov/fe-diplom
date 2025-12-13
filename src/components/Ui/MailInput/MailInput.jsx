import {React, useState, useEffect} from 'react'
import s from './MailInput.module.scss'

const MailInput = ({label, handleInputChange, option, value}) => {
  const [email, setEmail] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым')

  const blurHandler = () => {
    setEmailDirty(true)
  }

  const onInputChange = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Не корректный email')
    } else {
      setEmailError('')
      const value = e.target.value
      handleInputChange(option, value)
    }
  }

  useEffect(() => {
    if (value) {
      setEmail(value)
    }
  }, [])

  return (
    <>
      <div className={s.emailInput} >
        <label
          htmlFor="input"
          className={s.label + ((emailDirty && emailError)  ? ' ' + s.errorStatus : '')}
        >
          {label}
        </label>

        <div className={s.inputContainer + ((emailDirty && emailError)  ? ' ' + s.errorBorder : '')}>
          <input
            className={s.input}
            onBlur={() => blurHandler()}
            value={email}
            placeholder='inbox@gmail.ru'
            onChange={e => onInputChange(e)}
            type="text"
          />
        </div>

        {(emailDirty && emailError) && <div className={s.error}>{emailError}</div>}
      </div>
    </>
  )
}

export default MailInput
