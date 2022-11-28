const PageContainer = ({ children }) => (
  <section 
    style={{
      flex: "1 1 auto",
      display: "flex",
      flexFlow: "column"
    }}
  >
    {children}
  </section>
)


export default PageContainer