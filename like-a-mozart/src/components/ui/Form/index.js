import React, { useContext } from "react";

const FormContext = React.createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

const Form = ({ form, children, ...props }) => (
  <FormContext.Provider value={form}>
    <form {...props}>{children}</form>
  </FormContext.Provider>
);

export default Form;
