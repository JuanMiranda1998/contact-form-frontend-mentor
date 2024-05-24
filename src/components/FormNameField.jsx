import FormField from './FormField'

const FormNameField = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-center items-center'>
            <FormField
                id="firstName"
                labelTitle="First Name"
            />
            <FormField
                id="lastName"
                labelTitle="Last Name"
            />
        </div>
    )
}

export default FormNameField