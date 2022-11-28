const Button = ({ children, ...props }) => (
  <button
    {...props}
    style={{
      justifyContent: "center",
      color: "#555555",
      borderRadius: "10px",
    }}
  >
    {children}
  </button>
)

export default Button