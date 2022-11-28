const Box = ({ children }) => (
  <section
    style={{
      display: "flex",
      flexFlow: "column",
      height: "100%"
    }}
  >
    {children}
  </section>
)

export default Box