import React, { useEffect, useState } from "react";
import s from "./CitySelect.module.scss";

const CitySelect = ({options = [], handleCitySelect, handleCityInput, placeholder, icon, ...props }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [input, setInput] = useState('');

	const showedOptions = options.filter(el => el.name.toLowerCase().includes(input.toLowerCase()))

	function onOptionClick(opt) {
		handleCitySelect(opt);
		setInput(opt);
		setIsOpen(false);
	}

	function onInputChange(e) {
		setInput(e.target.value);

		if (isOpen && !e.target.value) {
			setIsOpen(false);
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
				<div className={s.inputContainer}>
					<input 
						className={s.input}
						value={input}
						onChange={onInputChange}
						type="text" 
						placeholder={placeholder}
					/>

					<img className={s.icon} src={icon} alt="" />
				</div>
				

				{isOpen && <div className={s.options}>
					{showedOptions.map(opt => <div key={opt._id} className={s.optionItem} onClick={() => onOptionClick(opt.name)}>
						{opt.name.toUpperCase()}
					</div>)}
				</div>}
			</div>
		</>
	);
};

export default CitySelect;