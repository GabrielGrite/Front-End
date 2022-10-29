import { useFormContext } from "../Form";
import "./style.css";

export const Option = ({ value, children }) => (
  <option value={value}>{children}</option>
);

const InputSelect = ({
  name,
  type,
  value,
  error,
  className,
  children,
  ...props
}) => {
  const form = useFormContext();
  const showError = form.touched[name] && form.errors[name];

  return (
    <div
      className={`select-container validate-input ${
        showError ? "alert-validate" : ""
      }`}
      data-validate={form.errors[name]}
    >
      <select
        className="input_select_100"
        name={name}
        value={form.fieldValue(name)}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        onFocus={form.handleFocus}
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

export default InputSelect;
