import { useState } from "react";

const initialState = {
  values: {},
  errors: {},
  touched: {},
};

const useFormState = (state = {}) => {
  const [formState, setFormState] = useState({
    values: state.values || initialState.values,
    errors: state.errors || initialState.errors,
    touched: state.touched || initialState.touched,
  });

  const setFieldValue = (fieldName, value) =>
    setFormState(previousState => ({
      ...previousState,
      values: {
        ...previousState.values,
        [fieldName]: value,
      },
    }));

  const setFieldError = (fieldName, error) =>
    setFormState(previousState => ({
      ...previousState,
      errors: {
        ...previousState.errors,
        [fieldName]: error,
      },
    }));

  
  const setFieldTouched = fieldName => 
    setFormState(previousState => ({
      ...previousState,
      touched: {
        ...previousState.touched,
        [fieldName]: true
      }
    }));

  
  const fieldValue = fieldName => formState.values[fieldName]

  return {
    values: formState.values,
    fieldValue,
    setFieldValue,
    setFieldError,
    setFieldTouched
  };
};

const useForm = ({ initialValues = {}, onSubmit = () => {} }) => {
  const form = useFormState({ values: initialValues });

  const handleChange = event => {
    const { name, value } = event.target;
    form.setFieldValue(name, value);
  }

  const submit = event => {
    event.preventDefault();
    onSubmit(form.values);
  };

  return {
    handleChange,
    fieldValue: form.fieldValue,
    submit,
    values: form.values,
  };
};

export default useForm;
