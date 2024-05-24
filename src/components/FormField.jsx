const FormField = ({id,labelTitle}) => {
    return (
        <div className="w-full flex flex-col justify-center items-start">
            <label htmlFor={labelTitle}>{labelTitle}</label>
            <input className='w-full py-2 pl-4' type="text" id={labelTitle} />
            <p className='hidden'>This field is required</p>
        </div>
    )
}

export default FormField