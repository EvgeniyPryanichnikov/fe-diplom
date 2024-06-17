import React, { useState }  from "react";
import s from "./TextInput.module.scss";


const TextInput = ({label, placeholder, ...props}) => {
  return (
    <>
			<div className={s.textInput} {...props}>
        <label 
        htmlFor="input" 
        className={s.label}>
          {label}
        </label>

        <div className={s.inputContainer}>
          <input 
            className={s.input}
            // value={input}
            // onChange={onInputChange}
            type="text" 
            placeholder={placeholder}
          />
        </div>
      </div>
		</>
  )
}

export default TextInput
