import React, { useState, useEffect }  from "react";
import s from "./NumberInput.module.scss";


const NumberInput = ({label, placeholder, handleTextInput}) => {
  const [input, setInput] = useState('')

  function onInputChange(e) {
		setInput(e.target.value)
	}

  // useEffect(() => {
	// 	if (input) {
	// 		handleNumberInput(input);
	// 	}
	// }, [input])

  return (
    <>
			<div className={s.NumberInput}>
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

export default NumberInput