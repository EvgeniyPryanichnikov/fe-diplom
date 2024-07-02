import React, { useState, useEffect }  from "react";
import s from './NameInput.module.scss'

const NameInput = ({label, handleNameInput}) => {
  const [input, setInput] = useState('')

  function onInputChange(e) {
		setInput(e.target.value);
	}
  return (
    <>
			<div className={s.nameInput} >
        <label 
          htmlFor="input" 
          className={s.label}
        >
          {label}
        </label>

        <div className={s.inputContainer}>
          <input 
            className={s.input}
            value={input}
            onChange={onInputChange}
            type="text" 
          />
        </div>
      </div>
		</>
  )
}

export default NameInput