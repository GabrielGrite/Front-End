import { equals, not } from "ramda"
import React, { useContext } from "react"
import useForm from "../../../hooks/useForm"
import { useFormContext } from "../Form"

export const CheckOption = ({ name, children, ...props }) => {
  const { checkGroup, handleChange } = useContext(CheckGroupContext)
  const form = useFormContext()

  const fieldValue = !!form.fieldValue(checkGroup).find(equals(name))

  return (
    <label className="checkbox-label">
    <input
      name={name}
      onChange={handleChange}
      checked={fieldValue}
      {...props}
      type="checkbox"
    />
    {children}
  </label>
  )
}

const CheckGroupContext = React.createContext()

export const CheckGroup = ({ name, children }) => {
  const form = useFormContext()

  const handleChange = event => {
    const checkboxName = event.target.name
    const isChecked = event.target.checked
    const previousValue = form.fieldValue(name)

    form.setFieldValue(
      name, 
      isChecked ? [...previousValue, checkboxName] : previousValue.filter(it => it !== checkboxName) 
    )
  }

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <CheckGroupContext.Provider value={{ checkGroup: name, handleChange }}>
        {children}
      </CheckGroupContext.Provider>
      
    </div>
  )
}

