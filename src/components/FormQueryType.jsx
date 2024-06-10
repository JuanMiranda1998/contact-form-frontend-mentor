import './FormQueryType.css'
const FormQueryType = ({ id, name, formData, handleChange, errors, errorActive, formTriggered }) => {

  const isInvalid = errorActive!='';
  
  return (
    <div id={id} className="w-full flex flex-col justify-center items-start my-4">
      <label className="mb-2" htmlFor="queryType">Query Type <span className="text-[#0c7d69]">*</span></label>
      <div className='w-full flex flex-col md:flex-row gap-4 mb-4 md:mb-2'>
        <label htmlFor='generalEnquiry' className={`form-control md:w-full flex flex-row py-3 px-6 border border-[#2b4246] rounded-md cursor-pointer hover:border-[#0c7d69] transition-all focus:outline-none focus:border-2 focus:border-[#0c7d69] ${formData==='generalEnquiry' ? 'bg-[#e0f1e7]': ''}`}>
          <input type="radio" name={name} id='generalEnquiry' value="generalEnquiry" onChange={handleChange} checked={formData==='generalEnquiry'} />
          <p>General Enquiry</p>
        </label>
        <label htmlFor='supportRequest' className={`form-control md:w-full flex flex-row py-3 px-6 border border-[#2b4246] rounded-md cursor-pointer hover:border-[#0c7d69] transition-all focus:outline-none focus:border-2 focus:border-[#0c7d69] ${formData==='supportRequest' ? 'bg-[#e0f1e7]': ''}`}>
          <input type="radio" name={name} id='supportRequest' value="supportRequest" onChange={handleChange} checked={formData==='supportRequest'} />
          <p>Support Request</p>
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