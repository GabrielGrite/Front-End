import { useState } from "react";
import { pick, map, prop, isEmpty } from "ramda";

const initialState = {
  values: {},
  errors: {},
  touched: {},
  valid: false,
};

const useFormState = (state = {}) => {
  const [formState, setFormState] = useState({
    values: state.values || initialState.values,
    errors: state.errors || initialState.errors,
    touched: state.touched || initialState.touched,
    valid: initialState.valid,
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
        [fieldName]: true,
      },
    }));

  const setAllTouched = () =>
    setFormState(previousState => {
      return {
        ...previousState,
        touched: Object.keys(previousState.values).reduce(
          (acc, curr) => ({ ...acc, [curr]: true }),
          {}
        ),
      };
    });


  const setTouched = fields =>
    setFormState(previousState => {
      return {
        ...previousState,
        touched: {
          ...previousState.touched,
          ...fields.reduce((acc, curr) => ({ ...acc, [curr]: true }), {})
        },
      };
    });

  const fieldValue = fieldName => formState.values[fieldName];

  const setErrors = errors =>
    setFormState(previousState => ({
      ...previousState,
      errors,
    }));

  const setValid = isValid =>
    setFormState(previousState => ({
      ...previousState,
      valid: isValid,
    }));

  return {
    valid: formState.valid,
    setValid,
    values: formState.values,
    errors: formState.errors,
    fieldValue,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    setErrors,
    setAllTouched,
    setTouched,
    touched: formState.touched,
  };
};

const useForm = ({
  initialValues = {},
  onSubmit = () => {},
  validateSchema = {},
}) => {
  const form = useFormState({ values: initialValues });

  const handleChange = event => {
    const { name, value } = event.target;
    form.setFieldValue(name, value);
  };

  const handleBlur = async event => {
    const isValid = await validateForm();

    if (isValid) {
      form.setErrors({});
    }

    const { name, value } = event.target;
    form.setFieldTouched(name, value);
  };

  const validateForm = async () => {
    try {
      return await validateSchema.validate(form.values, { abortEarly: false });
    } catch (err) {
      form.setErrors(
        err.inner.reduce(
          (errors, invalidField) => ({
            ...errors,
            [invalidField.path]: invalidField.errors,
          }),
          {}
        )
      );

      return false;
    }
  };

  const validatePartial = async fields => {
    try {
      return await validateSchema.validate(form.values, { abortEarly: false });
    } catch (err) {
      const filtered = map(prop("path"), err.inner).filter(it => fields.includes(it))

      if (isEmpty(filtered)) {
        return true;
      }

      form.setTouched(fields)
      form.setErrors(
        err.inner.reduce(
          (errors, invalidField) => ({
            ...errors,
            [invalidField.path]: invalidField.errors,
          }),
          {}
        )
      );

      return false;
    }
  }


  const submit = async event => {
    event.preventDefault();

    form.setAllTouched();

    const isValid = await validateForm();

    if (isValid) {
      form.setValid(true);
      form.setErrors({});
      onSubmit(form.values);
    }
  };

  const handleFocus = event => {
    form.setFieldError(event.target.name, null)
  }

  return {
    handleFocus,
    handleChange,
    handleBlur,
    fieldValue: form.fieldValue,
    setFieldValue: form.setFieldValue,
    setFieldError: form.setFieldError,
    submit,
    values: form.values,
    errors: form.errors,
    touched: form.touched,
    validatePartial,
    setTouched: form.setTouched
  };
};

export default useForm;
