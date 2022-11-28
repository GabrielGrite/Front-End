const Paper = ({ children, ...props }) => (
  <div
    style={{
      boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
      borderRadius: "10px",
      padding: "10px"
    }}
    {...props}
  >
    {children}
  </div>
)

export default Paper