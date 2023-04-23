import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStateValue } from '../../../reduxx/MainReducer'

function DarkLightBtn() {
    const darkTheme=useSelector(state=>state.Data.darkTheme)
    const dispatch=useDispatch()
    useEffect(() => {
        const savedTheme = localStorage.getItem('darkTheme');
        if (savedTheme !== null) {
          const theme = savedTheme === 'true';
          dispatch(changeStateValue({ name: 'darkTheme', value: !theme }));
        }
      }, [dispatch]);
    
    const toggleTheme=()=>{
        dispatch(
            changeStateValue({
              name:'darkTheme',
              value:!darkTheme
            })
          )
          dispatch(changeStateValue({ name: 'darkTheme', value: !darkTheme }));
          localStorage.setItem('darkTheme', darkTheme.toString());
      }
  return (
    <button onClick={toggleTheme} className='bg-green-200 p-2 rounded-xl '>
    {
     darkTheme? " Dark Mode": " Light Mode"
    }
   </button>
  )
}

export default DarkLightBtn