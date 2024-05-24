

const FormEmailField = () => {
    return (
        <div>
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" />
            <p className='hidden'>Please enter a valid email address</p>
            <p className='hidden'>This field is required</p>
        </div>
    )
}

export default FormEmailField