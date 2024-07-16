import React, { useState, useEffect }  from "react";
import s from './BirthdateInput.module.scss'

const NameInput = ({label, handleNameInput}) => {
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
    const re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/i

    if (!re.test(String(e.target.value).toLowerCase())) {
      setInputDirty(true)
      setInputError('Не корректный ввод')
    } else {
      setInputDirty(false)
      setInputError('')
    } 
	}
  return (
    <>
			<div className={s.birthdateInput} >
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
            placeholder="ДД/ММ/ГГГГ"
            onChange={e => onInputChange(e)}
            type="text" 
          />
        </div>

        {(inputDirty && inputError) && <div className={s.error}>{inputError}</div>} 
      </div>
		</>
  )
}

export default NameInput