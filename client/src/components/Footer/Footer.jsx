import React from 'react'

const Footer = () => {
  return (
    <div className='footer text-center bg-[#00B074] p-2'>
       <p className='text-white'>&copy; {(new Date().getFullYear())} All Reserved by Mubashir Rahman</p>
    </div>
  )
}

export default Footer