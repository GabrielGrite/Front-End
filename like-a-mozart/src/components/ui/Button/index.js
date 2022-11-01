import "./style.css";

const Button = ({ className, ...props }) => (
  <button className={`${className} form-button`} {...props}>
    {props.children}
  </button>
);

export default Button;
