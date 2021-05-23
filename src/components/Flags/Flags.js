/* eslint-disable jsx-quotes */

'use strict';

import React from 'react';
import { useTranslation } from 'react-i18next';

//images
import EngFlag from '../../assets/static/img/flags/Eng_flag.png';
import EspFlag from '../../assets/static/img/flags/Esp_flag.png';

export default function Flags() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button
        className={`mr-1  ${t('lang') !== 'en' ? 'opacity-25' : ''}`}
        type="button"
        onClick={() => changeLanguage('en')}
      >
        <img className="" src={EngFlag} alt="English" />
      </button>
      <button
        className={`mr-1  ${t('lang') !== 'es' ? 'opacity-25' : ''}`}
        type="button"
        onClick={() => changeLanguage('es')}
      >
        <img src={EspFlag} alt="English" />
      </button>
    </div>
  );
}
