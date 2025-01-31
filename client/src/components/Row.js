import React from 'react'

export default function Row({ children }) {
  return (
    <div className='flex items-center justify-between
    gap-2.5 h-fit'>
      {children}
    </div>
  )
}
