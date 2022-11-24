import { useFormContext } from "../Form";
import InputMask from "react-input-mask";

import "./style.css";

const InputTextMask = ({
  mask,
  maskChar,
  name,
  type,
  value,
  error,
  className,
  onBlur,
  ...props
}) => {
  const form = useFormContext();
  const showError = form.touched[name] && form.errors[name];

  return (
    <InputMask
      mask={mask}
      maskChar={maskChar}
      name={name}
      value={form.fieldValue(name)}
      onChange={form.handleChange}
      onBlur={onBlur || form.handleBlur}
      onFocus={form.handleFocus}
      {...props}
    >
      {inputProps => {
        return (
          <div
            className={`input-container validate-input ${
              showError ? "alert-validate" : ""
            } ${className}`}
            data-validate={form.errors[name]}
          >
            <input {...inputProps} className="input_100" type="text" />
          </div>
        );
      }}
    </InputMask>
  );
};

export default InputTextMask;
