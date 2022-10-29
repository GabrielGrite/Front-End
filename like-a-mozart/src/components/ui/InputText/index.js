import "./style.css";

const InputText = ({
  name,
  type,
  value,
  error,
  className,
  ...props
}) => {
  return (
    <div
      className={`input-container validate-input ${error ? "alert-validate" : ""}`}
      data-validate={error}
    >
      <input
        className="input_100"
        type={type || "text"}
        name={name}
        {...props}
      />
    </div>
  );
};

export default InputText;



