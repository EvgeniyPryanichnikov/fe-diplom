import React from 'react';

import s from './Main.module.scss'
import MainHeader from '../../components/global/Main-header/Main-header';
import MainContent from '../../components/global/Main-content/Main-content' 


const Main = () => (
	<div className={s.main}>
		<MainHeader />
		<MainContent />
	</div>
);

export default Main;