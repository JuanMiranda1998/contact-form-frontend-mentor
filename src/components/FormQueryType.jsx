
const FormQueryType = ({ id, name, type, formData, handleChange, errors, errorActive, formTriggered }) => {

  const isInvalid = errorActive!='';

  return (
    <div className="w-full flex flex-col justify-center items-start my-4">
      <label className="mb-2" htmlFor="queryType">Query Type <span className="text-[#0c7d69]">*</span></label>
      <div className='w-full flex flex-col lg:flex-row gap-4 mb-4 md:mb-2'>
        <label htmlFor='generalEnquiry' className='lg:w-full flex flex-row py-3 px-4 border border-[#2b4246] rounded-md cursor-pointer hover:border-[#0c7d69] hover:bg-[#e0f1e7] transition-all focus:outline-none focus:border-2 focus:border-[#0c7d69]'>
          <input type="radio" name={name} id='generalEnquiry' value="generalEnquiry" onClick={handleChange} />
          <p className='ml-2'>General Enquiry</p>
        </label>
        <label htmlFor='supportRequest' className='lg:w-full flex flex-row py-3 px-4 border border-[#2b4246] rounded-md cursor-pointer hover:border-[#0c7d69] hover:bg-[#e0f1e7] transition-all focus:outline-none focus:border-2 focus:border-[#0c7d69]'>
          <input type="radio" name={name} id='supportRequest' value="supportRequest" onClick={handleChange} />
          <p className='ml-2'>Support Request</p>
        </label>
      </div>
      <div>
          {errors.map((error, index) => (  
          <div key={index} className={`${(isInvalid && formTriggered) ? null : 'hidden'}`}>
              <p className={`${(errorActive==='empty' && error.type==='empty') ? 'block' : 'hidden'} my-2 text-sm text-[#d94545]`}>{error.message}</p>
          </div> ))}
      </div>
    </div>
  )
}

export default FormQueryType