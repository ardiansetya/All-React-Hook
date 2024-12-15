import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = ({ path, title}) => {
   const navigate =  useNavigate()

   const handleNavigate = (path) => {
     navigate(path);
   };
  return (
    <button
      onClick={() => handleNavigate(path)}
      className="bg-slate-400 py-2 px-5 rounded-xl">
      {title}
    </button>
  );
}

export default Button