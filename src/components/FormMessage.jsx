import { useEffect, useState } from "react";

const FormMessage = ({ id, name, formData, handleChange, errors, errorActive, formTriggered}) => {
  const [desktopWindowSize, setDesktopWindowSize] = useState(window.matchMedia("(min-width: 768px)").matches) 
  const [focused, setFocused] = useState(false)

    const isInvalid = (errorActive!='' && focused) || (errorActive!='' && formTriggered);

    const handleFocus = () => {
        setFocused(true)
    }

    

    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener('change', () => {
        setDesktopWindowSize(window.matchMedia("(min-width: 768px)").matches)
      });
    } , [])
     

  return (
    <div className="w-full flex flex-col justify-center items-start mb-4">
        <label className="mb-2" htmlFor="message">Message <span className="text-[#0c7d69]">*</span></label>
        <textarea className='w-full px-4 py-2 border border-[#2b4246] rounded-md cursor-pointer hover:border-[#0c7d69] focus:outline-none focus:border-2 focus:border-[#0c7d69]' id={id} rows={desktopWindowSize ? 4 : 9} name={name} onChange={handleChange} value={formData} onBlur={handleFocus} focused={focused.toString()}>
        </textarea>
        <div aria-live='assertive'>
        {errors.map((error, index) => (  
          <div key={index} className={`${isInvalid ? null : 'hidden'}`}>
              <p role="alert" className={`${(errorActive==='empty' && error.type==='empty') ? 'block' : 'hidden'} my-2 text-sm text-[#d94545]`}>{error.message}</p>
          </div> ))}
        </div>
    </div>
  )
}

export default FormMessage;