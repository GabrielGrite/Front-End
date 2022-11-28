import "./style.css";

const SubmitButton = ({ className, ...props }) => (
  <button className={`${className} form-button`} {...props}>
    {props.children}
  </button>
);

export default SubmitButton;
