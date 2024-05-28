import React from 'react'

const ConfirmationMessage = () => {
  return (
    <div className='w-[300px] lg:w-[400px] px-4 py-4 rounded-lg absolute top-1 left-1/2 -translate-x-1/2 bg-[#2a4244ef] text-white'>
        <h1 className='mb-2'>Message Sent!</h1>
        <p className='text-sm text-[#e0f1e7]'>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  )
}

export default ConfirmationMessage