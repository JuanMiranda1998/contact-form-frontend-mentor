import './FormInput.css'
import { useEffect, useState } from "react"

const FormInput = ({ id, name, formData, handleChange, type, errors, errorActive  }) => {
    const [focused, setFocused] = useState(false)

    const isInvalid = (errorActive!='' && focused==true);

    const handleFocus = () => {
        setFocused(true)
    }

    return (
        <div className="w-full flex flex-col justify-center items-start mb-4 lg:mb-0 lg:mr-2">
            <label className="mb-2" htmlFor="firstName">{name} <span className="text-[#0c7d69]">*</span></label>
            <input className='w-full py-2 pl-4 border border-[#2b4246] rounded-md cursor-pointer hover:border-[#0c7d69] focus:outline-none focus:border-2 focus:border-[#0c7d69]' type={type} id={id} name={id} onChange={handleChange} value={formData} onBlur={handleFocus} focused={focused.toString()} />
            <div className="h-6">
                {errors.map((error, index) => (  
                <div key={index} className={`${isInvalid ? null : 'hidden'}`}>
                    <p className={`${(errorActive==='empty' && error.type==='empty') ? 'block' : 'hidden'} my-2 text-sm text-[#d94545]`}>{error.message}</p>
                    <p className={`${(errorActive==='invalid' && error.type==='invalid') ? 'block' : 'hidden'} my-2 text-sm text-[#d94545]`}>{error.message}</p>
                </div> ))}
            </div>
        </div>
    )
}

export default FormInput