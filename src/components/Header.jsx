import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Header = ({ changeLanguage }) => {
  const { t } = useTranslation();
  const [lang,setLang]=useState('ru')
  function test(lang) {
    if (lang === 'ru') {
      changeLanguage('ru')
      setLang('ru')
    } else if (lang === 'en') {
      changeLanguage('en')
      setLang('en')

    }
  }
  return (
    <header className="w-full h-20 bg-theme flex items-center justify-center relative">
      <div className="container-section flex items-center justify-center">
        <h1 className="font-medium text-slate-200 text-4xl">
          {t("headerText")}
        </h1>
      </div>
      <div className="buttons absolute right-20 w-40">
        <FormControl className='w-10 border-white' fullWidth>
  <InputLabel className="text-slate-100" id="demo-simple-select-label">Languages</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    value={lang}
    onChange={(e)=>test(e.target.value)}
  >
    <MenuItem className="text-slate-100 bg-sky-400" value={'ru'}>Ru</MenuItem>
    <MenuItem value={'en'}>En</MenuItem>
  </Select>
</FormControl>
      </div>
    </header>
  );
};

export default Header;