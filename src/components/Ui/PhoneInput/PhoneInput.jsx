import React, { useState, useEffect }  from "react";
import s from './PhoneInput.module.scss'

const PhoneInput = ({label, handleInputChange, option, value}) => {
  const [input, setInput] = useState('')
  const [inputDirty, setInputDirty] = useState(false)
  const [inputError, setInputError] = useState('* Это обязательное поле')

  const blurHandler = () => {
    if (input) {
      setInputDirty(false)
    } else {
      setInputDirty(true)
      setInputError('* Это обязательное поле')
    }
  }

  function onInputChange(e) {
		setInput(e.target.value)
    const re = /^((\+7|7|8)+([0-9]){10})$/

    if (!re.test(String(e.target.value).toLowerCase())) {
      setInputDirty(true)
      setInputError('Не корректный ввод')
    } else {
      setInputDirty(false)
      setInputError('')
      const value = e.target.value
      handleInputChange(option, value)
    } 
	}

  useEffect(() => {
    if (value) {
      setInput(value)
    }
  }, [])
  
  return (
    <>
			<div className={s.phoneInput} >
        <label 
          htmlFor="input" 
          className={s.label + ((inputDirty && inputError)  ? ' ' + s.errorStatus : '')}
        >
          {label}
        </label>

        <div className={s.inputContainer + ((inputDirty && inputError)  ? ' ' + s.errorBorder : '')}>
          <input 
            className={s.input}
            onBlur={() => blurHandler()}
            value={input}
            placeholder='+7 ___ ___ __ __'
            onChange={e => onInputChange(e)}
            type="text" 
          />
        </div>

        {(inputDirty && inputError) && <div className={s.error}>{inputError}</div>} 
      </div>
		</>
  )
}

export default PhoneInput