import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { toggleDarkMode } from './feature/darkModeSlice';
import "./App.css"

const App = () => {
  const {mode} = useSelector(state=>state.darkMode);
  const dispatch = useDispatch();

  return (
    <div className={mode ? "bg-dark" : "bg-white"}>
       <button onClick={()=>dispatch(toggleDarkMode())}>DarkMode</button>
    </div>
  )
}

export default App