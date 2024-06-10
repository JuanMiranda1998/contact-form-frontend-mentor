
const ConfirmationMessage = () => {
  return (
    <div className='w-[300px] lg:w-[400px] px-4 py-4 rounded-lg absolute top-1 left-1/2 -translate-x-1/2 bg-[#2a4244ef] text-white' id="successMessage">
        <div className='flex flex-row items-center mb-2'>
          <div>
            <img src="/icon-success-check.svg" alt="" />
          </div>
          <h1 className='ml-2'>Message Sent!</h1>
        </div>
        <p className='text-sm text-[#e0f1e7]'>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  )
}

export default ConfirmationMessage