
const FormOptionField = () => {
    return (
        <>
            <label htmlFor="">Query Type</label>
            <div className='flex flex-col lg:flex-row gap-4 my-4'>
                <div className='flex flex-row'><input type="radio" name="queryType" id="" /><p className='ml-2'>General Enquiry</p></div>
                <div className='flex flex-row'><input type="radio" name="queryType" id="" /><p className='ml-2'>Support Request</p></div>
            </div>
            <p className='hidden'>Please select a query type</p>
        </>
    )
}

export default FormOptionField