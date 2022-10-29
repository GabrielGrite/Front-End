import "./style.css";

const Button = ({ ...props }) => (
  <button className="form-button" {...props}>
    {props.children}
  </button>
);

export default Button;
