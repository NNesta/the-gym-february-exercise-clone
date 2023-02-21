import React from 'react'

const Wrapper = ({children, styles}) => {
  return (
    <div className='bg-primary-yellow-100'>
      <div className={`max-w-[1252px] mx-auto ${styles}`}>
        {children}
        </div>
    </div>
    
  )
}

export default Wrapper