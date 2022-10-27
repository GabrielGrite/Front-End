import { useState } from "react";

const useForm = ({ initialValues = {}, onSubmit = () => {} }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = event => setValues(previous => {
    return {
      ...previous,
      [event.target.name]: event.target.value
    }
  })


  const fieldValue = name => values[name]

  const submit = event => {
    event.preventDefault()
    onSubmit(values)
  }

  return {
    handleChange,
    fieldValue,
    submit,
    values
  }
}

export default useForm;