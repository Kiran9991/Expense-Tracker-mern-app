import React, { useState } from 'react';
import Col from '../../../components/Row';

export default function Switch() {
  const [toggle, setToggle] = useState(false);

  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
  }

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
  }

  const toggleChange = () => {
    if(toggle) {
      setLightMode()
    }else {
      setDarkMode()
    }
    setToggle((prev) => !prev)
  }

  return (
    <div className='flex items-center'>
      <div
        className={`h-6 w-14 rounded-full flex 
          items-center px-[0.15rem] cursor-pointer 
          relative transition-colors duration-500
          ${toggle ? 'bg-red-300' : 'bg-gray-500'}`}
        onClick={toggleChange}
      >
        <div
          className={`bg-white h-5 w-5 rounded-full 
            transition-transform duration-500
            transform
             ${toggle ? 'translate-x-8' : 'translate-x-0'}`}
        ></div>
      </div>
      <div className='bg-gray-400'>Switch Button</div>
    </div>
  );
}
