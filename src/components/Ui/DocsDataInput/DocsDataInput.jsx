import React, { useState, useEffect }  from "react";
import s from './DocsDataInput.module.scss'

const DocsDataInput = ({label, placeholder, option, handleInputChange, value}) => {
  const [input, setInput] = useState('')
  const [inputDirty, setInputDirty] = useState(false)
  // const [inputError, setInputError] = useState('* Это обязательное поле')

  const blurHandler = (e) => {
    setInputDirty(true)
  }

  function onInputChange(e) {
    setInput(e.target.value) 

    const value = e.target.value;
    handleInputChange(option, value);
	}

  useEffect(() => {
    if (value) {
      setInput(value)
    }
  }, [])
  
  return (
    <>
      <div className={s.nameInput} >
        <label 
          htmlFor="input" 
          // className={s.label + ((inputDirty && inputError)  ? ' ' + s.errorStatus : '')}
          className={s.label}
        >
          {label}
        </label>

        {/* <div className={s.inputContainer + ((inputDirty && inputError)  ? ' ' + s.errorBorder : '')}> */}
        <div className={s.inputContainer}>
          <input 
            className={s.input}
            onBlur={(e) => blurHandler(e)}
            value={input}
            maxLength={label === 'Серия' ? 4 : 6}
            onChange={onInputChange}
            type="text" 
            placeholder={placeholder}
          />
        </div>

        {/* {(inputDirty && inputError) && <div className={s.error}>{inputError}</div>}  */}
      </div>
    </>
  )
}

export default DocsDataInput