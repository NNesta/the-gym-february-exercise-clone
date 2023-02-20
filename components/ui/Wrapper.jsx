import React from 'react'

const Wrapper = ({children, styles}) => {
  return (
    <div className='bg-[#F1EEEC]'>
      <div className={`max-w-[1252px] mx-auto ${styles}`}>
        {children}
        </div>
    </div>
    
  )
}

export default Wrapper