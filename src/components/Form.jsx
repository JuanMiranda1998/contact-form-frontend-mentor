import { useState } from "react"
import ConfirmationMessage from "./ConfirmationMessage"


const Form = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })
    const [errors, setErrors] = useState({
        errorFirstName: null,
        errorLastName: null,
        errorEmail: null,
        errorMessage: null,
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const verifiedFields = verifyData(formData);
        if (verifiedFields){
            setEmailSubmitted(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
        }
    }


    const verifyData = (data) => {
        return true; 
    }


    return (
        <form className="relative">
            <h1 className='text-2xl mb-4'>Contact Us</h1>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center'>
                <div className="w-full flex flex-col justify-center items-start">
                    <label htmlFor="firstName">First Name</label>
                    <input className='w-full py-2 pl-4' type="text" id="firstName" name="firstName" />
                    <p className='hidden'>This field is required</p>
                </div>
                <div className="w-full flex flex-col justify-center items-start">
                    <label htmlFor="lastName">Last Name</label>
                    <input className='w-full py-2 pl-4' type="text" id="lastName" name="lastName" />
                    <p className='hidden'>This field is required</p>
                </div>
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input name="email" type="text" id="email" />
                <p className='hidden'>Please enter a valid email address</p>
                <p className='hidden'>This field is required</p>
            </div>
            <div>
                <label htmlFor="">Query Type</label>
                <div className='flex flex-col lg:flex-row gap-4 my-4'>
                    <div className='flex flex-row'><input type="radio" name="queryType" id="" /><p className='ml-2'>General Enquiry</p></div>
                    <div className='flex flex-row'><input type="radio" name="queryType" id="" /><p className='ml-2'>Support Request</p></div>
                </div>
                <p className='hidden'>Please select a query type</p>
            </div>                              
            <div>
                <label htmlFor="message">Message</label>
                <textarea className='w-full' id="message" rows="5" name="message"></textarea>
                <p className='hidden'>This field is required</p>
            </div>
            <div>
                <div className='flex flex-row'>
                    <input type="checkbox" name="consent" id="consent" />
                    <p className='ml-4'>I consent to being contacted by the team</p>
                </div>
                <p className='hidden'>To submit this form, please consent to being contacted</p>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            {emailSubmitted&&<ConfirmationMessage />}
        </form>
    )
}

export default Form