
const FormCheckField = () => {
    return (
        <div>
            <div className='flex flex-row'>
                <input type="checkbox" name="consent" id="consent" />
                <p className='ml-4'>I consent to being contacted by the team</p>
            </div>
            <p className='hidden'>To submit this form, please consent to being contacted</p>
        </div>
    )
}

export default FormCheckField