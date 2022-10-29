import { useFormContext } from "../Form";
import "./style.css";

const Checkbox = ({ name, children, ...props }) => {
  const form = useFormContext();

  const handleChange = event => {
    const { name, checked } = event.target;

    form.setFieldValue(name, checked);
  }

  return (
    <label className="checkbox-label">
      <input
        name={name}
        onChange={handleChange}
        onBlur={form.handleBlur}
        onFocus={form.handleFocus}
        checked={form.fieldValue(name)}
        {...props}
        type="checkbox"
      />
      {children}
    </label>
  );
};

export default Checkbox;
