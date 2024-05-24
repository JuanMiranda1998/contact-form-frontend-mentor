import FormCheckField from "./FormCheckField"
import FormEmailField from "./FormEmailField"
import FormMessageField from "./FormMessageField"
import FormNameField from "./FormNameField"
import FormOptionField from "./FormOptionField"


const Form = () => {
    return (
        <form>
            <h1 className='text-2xl mb-4'>Contact Us</h1>
            <FormNameField />
            <FormEmailField />
            <FormOptionField />
            <FormMessageField />
            <FormCheckField />
            <button>Submit</button>
        </form>
    )
}

export default Form