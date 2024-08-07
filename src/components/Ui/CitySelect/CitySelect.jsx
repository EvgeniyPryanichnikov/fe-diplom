import React, { useEffect, useState } from "react"
import s from "./CitySelect.module.scss"
import { ReactComponent as IconGeo } from '../../../icons/geolocation.svg'

const CitySelect = ({options = [], handleCitySelect, selectedCity, handleCityInput, placeholder, ...props }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [input, setInput] = useState(selectedCity?.name || "")
	const [selectDirty, setSelectDirty] = useState(false)
  const [selectError, setSelectError] = useState('* Это поле является обязательным')

	const showedOptions = options.filter(el => el.name.toLowerCase().includes(input.toLowerCase()))

	const blurHandler = () => {
    setSelectDirty(true)
  }

	function onOptionClick(opt) {
		handleCitySelect(opt);
		setInput(opt.name.toUpperCase());
		setIsOpen(false);
		setSelectError('')
	}

	function onInputChange(e) {
		setInput(e.target.value);

		if (isOpen && !e.target.value) {
			setIsOpen(false);
			setSelectError('* Это поле является обязательным')
			return;
		}

		if (!isOpen) {
			setIsOpen(true);
		}
	}

	useEffect(() => {
		if (input) {
			handleCityInput(input);
		}
	}, [input])

	return (
		<>
			<div className={s.select} {...props}>
				<div className={s.inputContainer + ((selectDirty && selectError)  ? ' ' + s.active : '')}>
					<input
						className={s.input}
						value={input}
						onBlur={() => blurHandler()}
						onChange={onInputChange}
						type="text"
						placeholder={placeholder}
					/>

					<IconGeo className={s.icon}/>
				</div>


				{isOpen && <div className={s.options}>
					{showedOptions.map(opt => <div key={opt._id} className={s.optionItem} onClick={() => onOptionClick(opt)}>
						{opt.name.toUpperCase()}
					</div>)}
				</div>}

				{(selectDirty && selectError) && <div className={s.error}>{selectError}</div>} 
			</div>
		</>
	);
};

export default CitySelect;
