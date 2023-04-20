import React from 'react'
import SelectItem from './SelectItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectLangOnPage() {
  return (
    <FormControl className='w-10  border-white ' >
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
  )
}

export default SelectLangOnPage    