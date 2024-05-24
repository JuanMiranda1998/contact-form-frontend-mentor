

const FormMessageField = () => {
    return (
        <>
            <label htmlFor="message">Message</label>
            <textarea className='w-full' id="message" rows="5"></textarea>
            <p className='hidden'>This field is required</p>
        </>
    )
}

export default FormMessageField