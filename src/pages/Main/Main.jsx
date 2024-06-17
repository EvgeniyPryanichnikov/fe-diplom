import React from 'react';

import s from './Main.module.scss'
import MainHeader from '../../Main-header/Main-header';
import MainContent from '../../global/Main-content/Main-content' // подключить правильно компоненты

const Main = () => (
    <div className={s.main}>
        <MainHeader />
        <MainContent />
    </div>
);

export default Main;