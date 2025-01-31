import React, { useState } from 'react';
import Col from '../../../components/Row';

export default function Switch() {
  const [toggle, setToggle] = useState(false);

  return (
    <Col>
      <div
        className={`h-6 w-14 rounded-full flex 
          items-center px-[0.15rem] cursor-pointer 
          relative transition-colors duration-500
          ${toggle ? 'bg-red-300' : 'bg-gray-500'}`}
        onClick={() => setToggle((prev) => !prev)}
      >
        <div
          className={`bg-white h-5 w-5 rounded-full 
            transition-transform duration-500
            transform
             ${toggle ? 'translate-x-8' : 'translate-x-0'}`}
        ></div>
      </div>
      <div>Switch Button</div>
    </Col>
  );
}
