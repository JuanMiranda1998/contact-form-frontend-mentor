import './Form.css'
import { useState } from "react"
import ConfirmationMessage from "./ConfirmationMessage"
import FormInput from './FormInput'

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

    let err = [
        { input: 'firstName', errorType: '' },
        { input: 'lastName', errorType: '' },
        { input: 'email', errorType: '' },
        { input: 'queryType', errorType: '' },
        { input: 'message', errorType: '' },
        { input: 'consent', errorType: '' },
];


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleCheckbox = (e) => {
        setFormData({...formData, [e.target.name]: e.target.checked})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailSubmitted(false)
        let errors = getErrors(formData);
        const errorArrValues = errors.map((field) =>
            field.errorType);
        console.log('errorArrValues: '+ errorArrValues)
        const errorValues = input => input === 'empty' || input === 'invalid' || input === 'notChecked';
        if (!errorArrValues.some(errorValues)){
            console.log('valid form')
            setEmailSubmitted(true);
        }
    }


    const getErrors = (data) => {
        if(isEmpty(data.firstName)){
            err.filter(entry => entry.input==='firstName')[0].errorType = 'empty';
        } 
        if(isEmpty(data.lastName)){
            err.filter(entry => entry.input==='lastName')[0].errorType = 'empty';
        }
        if(isEmpty(data.email)){
            err.filter(entry => entry.input==='email')[0].errorType = 'empty';
        } else {
            if (!verifyEmail(data.email)){
                err.filter(entry => entry.input==='email')[0].errorType = 'invalid';
            }
        }
        if(isEmpty(data.queryType)){
            err.filter(entry => entry.input==='queryType')[0].errorType = 'empty';
        }
        if(isEmpty(data.message)){
            err.filter(entry => entry.input==='message')[0].errorType = 'empty';
        }
        if(!data.consent){
            err.filter(entry => entry.input==='consent')[0].errorType = 'notChecked';
        }
        return err;
    }

    const isEmpty = (value) => {
        return value==='';
    }

    const verifyEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return email.match(emailRegex);
    }

    const getIsErrorActive = (id) => {
        if (isEmpty(formData[id])){
            return true;
        } else {
            if (id==='email'){
                return !verifyEmail(formData[id])
            }
        }
        return false;
    }


    return (
        <form className="w-full text-[#2b4246]" onSubmit={handleSubmit}>
            <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center mb-4'>
                <FormInput 
                    id="firstName"
                    name="First Name"
                    type="text"
                    formData={formData.firstName}
                    handleChange={handleChange}
                    errors={[{type: "empty", message: "This field is required"}]}
                    errorActive={getIsErrorActive('firstName')}
                />
                <FormInput 
                    id="lastName"
                    name="Last Name"
                    type="text"
                    formData={formData.lastName}
                    handleChange={handleChange}
                    errors={[{type: "empty", message: "This field is required"}]}
                    errorActive={getIsErrorActive('lastName')}
                />
            </div>
            <FormInput 
                    id="email"
                    name="Email"
                    type="email"
                    formData={formData.email}
                    handleChange={handleChange}
                    errors={[{type: "empty", message: "This field is required"}, {type: "invalid", message: "Please enter a valid email address"}]}
                    errorActive={getIsErrorActive('email')}
                />
            <div className="w-full flex flex-col justify-center items-start mb-4">
                <label className="mb-2" htmlFor="queryType">Query Type <span className="text-[#0c7d69]">*</span></label>
                <div className='w-full flex flex-col lg:flex-row gap-4 mb-4 lg:mb-0'>
                    <label htmlFor='generalEnquiry' className='lg:w-full flex flex-row py-3 px-4 border border-[#2b4246] rounded-md cursor-pointer hover:border-[#0c7d69] hover:bg-[#e0f1e7] transition-all focus:outline-none focus:border-2 focus:border-[#0c7d69]'>
                        <input type="radio" name="queryType" id='generalEnquiry' value="generalEnquiry" onClick={handleChange} />
                        <p className='ml-2'>General Enquiry</p>
                    </label>
                    <label htmlFor='supportRequest' className='lg:w-full flex flex-row py-3 px-4 border border-[#2b4246] rounded-md cursor-pointer hover:border-[#0c7d69] hover:bg-[#e0f1e7] transition-all focus:outline-none focus:border-2 focus:border-[#0c7d69]'>
                        <input type="radio" name="queryType" id='supportRequest' value="supportRequest" onClick={handleChange} />
                        <p className='ml-2'>Support Request</p>
                    </label>
                </div>
                {isEmpty(formData.queryType) && <p className="my-2 text-sm text-[#d94545]">Please select a query type</p>}
            </div>                              
            <div className="w-full flex flex-col justify-center items-start mb-4">
                <label className="mb-2" htmlFor="message">Message <span className="text-[#0c7d69]">*</span></label>
                <textarea className='w-full px-4 py-2 border border-[#2b4246] rounded-md cursor-pointer hover:border-[#0c7d69] focus:outline-none focus:border-2 focus:border-[#0c7d69]' id="message" rows="4" name="message" onChange={handleChange} value={formData.message}></textarea>
                {isEmpty(formData.message) && <p className="my-2 text-sm text-[#d94545]">This field is required</p>}
            </div>
            <div className="my-4">
                <label className="inputCheckContainer">
                    <input type="checkbox" name="consent" id="consent" onChange={handleCheckbox} value={formData.consent} />
                    <span className="checkmark"></span>
                    <p>I consent to being contacted by the team <span className="text-[#0c7d69]">*</span></p>
                </label>

                {!formData.consent && <p className="my-2 text-sm text-[#d94545]">To submit this form, please consent to being contacted</p>}
            </div>
            <button className="w-full mt-4 py-3 rounded-md bg-[#0c7d69] text-white text-lg text-center hover:bg-[#063f36] transition-all">Submit</button>
            {emailSubmitted&&<ConfirmationMessage />}
        </form>
    )
}

export default Form;