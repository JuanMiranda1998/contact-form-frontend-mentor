import './Form.css'
import { useState } from "react"
import ConfirmationMessage from "./ConfirmationMessage"
import FormInput from './FormInput'
import FormQueryType from './FormQueryType'
import FormMessage from './FormMessage'
import FormCheckBox from './FormCheckBox'

const Form = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [formTriggered, setFormTriggered] = useState(false)
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
        setFormTriggered(true)
        let errors = getErrors(formData);
        const errorArrValues = errors.map((field) =>
            field.errorType);
        const errorValues = input => input === 'empty' || input === 'invalid' || input === 'notChecked';
        if (!errorArrValues.some(errorValues)){
            setEmailSubmitted(true);
            window.scrollTo({ top: 0, behaviour: 'smooth' });
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

    const getErrorActive = (id) => {
        if (isEmpty(formData[id])){
            return 'empty';
        } else {
            if (id==='email'){
                if (!verifyEmail(formData[id])){
                    return 'invalid';
                }
            }
        }
        if (id==='consent'){
            if(!formData[id]){
                return 'notChecked';
            }
        }
        return '';
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
                    errorActive={getErrorActive('firstName')}
                    formTriggered={formTriggered}
                />
                <FormInput 
                    id="lastName"
                    name="Last Name"
                    type="text"
                    formData={formData.lastName}
                    handleChange={handleChange}
                    errors={[{type: "empty", message: "This field is required"}]}
                    errorActive={getErrorActive('lastName')}
                    formTriggered={formTriggered}
                />
            </div>
            <FormInput 
                    id="email"
                    name="Email"
                    type="email"
                    formData={formData.email}
                    handleChange={handleChange}
                    errors={[{type: "empty", message: "This field is required"}, {type: "invalid", message: "Please enter a valid email address"}]}
                    errorActive={getErrorActive('email')}
                    formTriggered={formTriggered}
                />
            <FormQueryType 
                id="queryType"
                name="queryType"
                formData={formData.queryType}
                handleChange={handleChange}
                errors={[{type: "empty", message: "Please select a query type"}]}
                errorActive={getErrorActive('queryType')}
                formTriggered={formTriggered}
            />                            
            <FormMessage 
                id="message"
                name="message"
                formData={formData.message}
                handleChange={handleChange}
                errors={[{type: "empty", message: "This field is required"}]}
                errorActive={getErrorActive('message')}
                formTriggered={formTriggered}
            />
            <FormCheckBox
                id="consent"
                name="consent"
                formData={formData.consent}
                handleChange={handleCheckbox}
                errors={[{type: "notChecked", message: "To submit this form, please consent to being contacted"}]}
                errorActive={getErrorActive('consent')}
                formTriggered={formTriggered}
            />
            <button className="w-full mt-4 py-3 rounded-md bg-[#0c7d69] text-white text-lg text-center hover:bg-[#063f36] transition-all">Submit</button>
            {emailSubmitted&&<ConfirmationMessage />}
        </form>
    )
}

export default Form;