import {React, useState} from 'react'
import s from './EmailInput.module.scss'

const EmailInput = ({label, handleEmail}) => {
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
    } 
  }

  return (
    <div className={s.inputContainer}>
      <label className={s.label} htmlFor="email">{label}</label>

      {(emailDirty && emailError) && <div className={s.error}>{emailError}</div>} 
      
      <input 
        className={s.input}
        onBlur={() => blurHandler()}
        onChange={e => onInputChange(e)}
        value={email}
        type="text" 
        name="email" 
        placeholder="e-mail" 
      />
     
    </div>
  )
}

export default EmailInput