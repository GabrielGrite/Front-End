import "./style.css";
import { useFormContext } from "../Form";
import { useRef } from "react";
import { isNil } from "ramda";

const InputDate = ({ name, placeholder, className, ...props }) => {
  const form = useFormContext();
  const showError = form.touched[name] && form.errors[name];
  const ref = useRef();

  const handleFocus = event => {
    ref.current.type = "date"
    form.handleFocus(event);
  }

  const handleBlur = event => {
    if (isNil(form.fieldValue(name))) {
      ref.current.type = "text"
    }

    form.handleBlur(event);
  }

  return (
    <div
      className={`input-container validate-input ${
        showError ? "alert-validate" : ""
      }`}
      data-validate={form.errors[name]}
    >
      <input
        className="input_100"
        type="text"
        placeholder={placeholder}
        name={name}
        ref={ref}
        value={form.fieldValue(name)}
        {...props}
        onChange={form.handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default InputDate;
