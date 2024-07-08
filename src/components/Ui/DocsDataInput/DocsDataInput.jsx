import React, { useState, useEffect }  from "react";
import s from './DocsDataInput.module.scss'

const DocsDataInput = ({label, placeholder}) => {
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
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  )
}

export default DocsDataInput