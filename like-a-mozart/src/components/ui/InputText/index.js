import { useFormContext } from "../Form";
import "./style.css";

const InputText = ({ name, type, value, error, className, ...props }) => {
  const form = useFormContext();

  const showError = form.touched[name] && form.errors[name];

  return (
    <div
      className={`input-container validate-input ${
        showError ? "alert-validate" : ""
      }`}
      data-validate={form.errors[name]}
    >
      <input
        className="input_100"
        type={type || "text"}
        name={name}
        value={form.fieldValue(name)}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        {...props}
      />
    </div>
  );
};

export default InputText;
