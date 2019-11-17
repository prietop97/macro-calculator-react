import {useState} from './node_modules/react'

export default function useForm(initialState , cb) {
    const [formValues , setFormValues] = useState(initialState)

    const handleChange = (e) => {
        setFormValues({...formValues , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cb()
    }

    return [formValues,handleChange,handleSubmit]
}
