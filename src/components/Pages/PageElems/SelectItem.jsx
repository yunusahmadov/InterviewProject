import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { changeStateValue } from '../../../reduxx/MainReducer';

function SelectItem({changeLanguage}) {
    const { t } = useTranslation();
    const language=useSelector(state=>state.Data.language) 
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(changeStateValue({ name: 'language', value: 'ru' }));
    }, [])
    function test(language) {
      if (language ==='ru') {
        changeLanguage('ru')
        dispatch(changeStateValue({ name: 'language', value: 'ru' }));
          localStorage.setItem('lang', language);
      }else if(language === 'en'){
        changeLanguage('en')
        dispatch(changeStateValue({ name: 'language', value: 'en' }));
        localStorage.setItem('lang', language);

      }
    }
    console.log(language);
  return (
    <FormControl className='w-10  border-white' fullWidth >
    <InputLabel className="text-slate-100" id="demo-simple-select-label">Languages</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Age"
      value={language}
      onChange={(e)=>test(e.target.value)}
    >
      <MenuItem className="text-slate-100 bg-sky-400" value={'ru'}>Ru</MenuItem>
      <MenuItem value={'en'}>En</MenuItem>
    </Select>
  </FormControl>
  )
}

export default SelectItem