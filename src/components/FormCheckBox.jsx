import './FormCheckBox.css'

const FormCheckBox = ({ id, name, formData, handleChange, errors, errorActive, formTriggered }) => {

  const isInvalid = (errorActive!='' && formTriggered);

  return (
    <div className="my-4">
        <label className="inputCheckContainer">
            <input type="checkbox" name={name} id={id} onChange={handleChange} checked={formData} />
            <span className="checkmark"></span>
            <p>I consent to being contacted by the team <span className="text-[#0c7d69]">*</span></p>
        </label>
        <div>
          {errors.map((error, index) => (  
          <div key={index} className={`${isInvalid ? null : 'hidden'}`}>
              <p className={`${(errorActive==='notChecked' && error.type==='notChecked') ? 'block' : 'hidden'} my-2 text-sm text-[#d94545]`}>{error.message}</p>
          </div> ))}
        </div>
    </div>
  )
}

export default FormCheckBox