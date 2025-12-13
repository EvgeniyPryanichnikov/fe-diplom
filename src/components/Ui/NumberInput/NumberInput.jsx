import React, { useState, useEffect }  from "react";
import s from "./NumberInput.module.scss";


const NumberInput = ({value, label, placeholder, handleInput, max = 4}) => {

  function onInputChange(e) {
    let val = e.target.value;
    if (+val > +max) {
      val = +max
    }
    handleInput(val)
	}

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
            value={value}
            onChange={onInputChange}
            type="number"
            max={max}
            placeholder={placeholder}
          />
        </div>
      </div>
		</>
  )
}

export default NumberInput
