import { useState } from "react"
import ConfirmationMessage from "./ConfirmationMessage"


const Form = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: false,
    })
    const [errors, setErrors] = useState({
        errorFirstName: null,
        errorLastName: null,
        errorEmail: null,
        errorMessage: null,
        errorQueryType: null,
        errorTermsCheck: null,
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleCheckbox = (e) => {
        setFormData({...formData, [e.target.name]: e.target.checked})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        resetErrors()
        const data = {  
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            queryType: e.target.queryType.value,
            message: e.target.message.value,
            consent: e.target.consent.checked,
        }

        const verifiedFields = verifyData(data);
        if (verifiedFields){
            setFormData(data);
            setEmailSubmitted(true);
        }
    }

    const verifyData = (data) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let err = errors;
        if(data.firstName===''){
            err = {...err, errorFirstName: 'empty'}
        } 
        if(data.lastName===''){
            err = {...err, errorLastName: 'empty'}
        }
        if(data.email===''){
            err = {...err, errorEmail: 'empty'}
        } else {
            if (!data.email.match(emailRegex)){
                err = {...err, errorEmail: 'invalid'}
            }
        }
        if(data.queryType===''){
            err = {...err, errorQueryType: 'empty'}
        }
        if(data.message===''){
            err = {...err, errorMessage: 'empty'}
        }
        if(!data.consent){
            err = {...err, errorTermsCheck: 'notChecked'}
        }
        setErrors(err)
        return true
    }

    const resetErrors = () => {
        setErrors({
            errorFirstName: null,
            errorLastName: null,
            errorEmail: null,
            errorMessage: null,
            errorQueryType: null,
            errorTermsCheck: null,
        })
    }


    return (
        <form className="text-[#2b4246]" onSubmit={handleSubmit}>
            <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center mb-4'>
                <div className="w-full flex flex-col justify-center items-start mb-4 lg:mb-0 lg:mr-2">
                    <label className="mb-2" htmlFor="firstName">First Name</label>
                    <input className='w-full py-2 pl-4 border border-[#2b4246] rounded-md' type="text" id="firstName" name="firstName" onChange={handleChange} />
                    {errors.errorFirstName==='empty' && <p className="my-2 text-sm text-[#d94545]">This field is required</p>}
                </div>
                <div className="w-full flex flex-col justify-center items-start">
                    <label className="mb-2" htmlFor="lastName">Last Name</label>
                    <input className='w-full py-2 pl-4 border border-[#2b4246] rounded-md' type="text" id="lastName" name="lastName" onChange={handleChange} />
                    {errors.errorLastName==='empty' && <p className="my-2 text-sm text-[#d94545]">This field is required</p>}
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start mb-4">
                <label className="mb-2" htmlFor="email">Email Address</label>
                <input className='w-full py-2 pl-4 border border-[#2b4246] rounded-md' type="text" id="email" name="email" onChange={handleChange} />
                {errors.errorEmail==='invalid' && <p className="my-2 text-sm text-[#d94545]">Please enter a valid email address</p>}
                {errors.errorEmail==='empty' && <p className="my-2 text-sm text-[#d94545]">This field is required</p>}
            </div>
            <div className="w-full flex flex-col justify-center items-start mb-4">
                <label className="mb-2" htmlFor="queryType">Query Type</label>
                <div className='w-full flex flex-col lg:flex-row gap-4 mb-4 lg:mb-0'>
                    <div className='lg:w-full flex flex-row py-3 px-4 border border-[#2b4246] rounded-md'>
                        <input type="radio" name="queryType" value="generalEnquiry" onClick={handleChange} />
                        <p className='ml-2'>General Enquiry</p>
                    </div>
                    <div className='lg:w-full flex flex-row py-3 px-4 border border-[#2b4246] rounded-md'>
                        <input type="radio" name="queryType" value="supportRequest" onClick={handleChange} />
                        <p className='ml-2'>Support Request</p></div>
                </div>
                {errors.errorQueryType==='empty' && <p className="my-2 text-sm text-[#d94545]">Please select a query type</p>}
            </div>                              
            <div className="w-full flex flex-col justify-center items-start mb-4">
                <label className="mb-2" htmlFor="message">Message</label>
                <textarea className='w-full border border-[#2b4246] rounded-md' id="message" rows="8" name="message" onChange={handleChange}></textarea>
                {errors.errorMessage==='empty' && <p className="my-2 text-sm text-[#d94545]">This field is required</p>}
            </div>
            <div className="my-4">
                <div className='flex flex-row'>
                    <input type="checkbox" name="consent" id="consent" onChange={handleCheckbox} />
                    <p className='ml-4'>I consent to being contacted by the team</p>
                </div>
                {errors.errorTermsCheck==='notChecked' && <p className="my-2 text-sm text-[#d94545]">To submit this form, please consent to being contacted</p>}
            </div>
            <button className="w-full mt-4 py-3 rounded-md bg-[#0c7d69] text-white text-lg text-center">Submit</button>
            {emailSubmitted&&<ConfirmationMessage />}
        </form>
    )
}

export default Form;