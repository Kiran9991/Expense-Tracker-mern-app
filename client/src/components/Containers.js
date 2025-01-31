import React from 'react'

export default function Containers({ children }) {
  return (
    <div className={`m-auto w-fit bg-white
    rounded-lg p-5 mt-3 h-fit `}>
      {children}
    </div>
  )
}
