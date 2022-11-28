import "./style.css";

import useForm from  "../../../../hooks/useForm"
import Form from  "../../../ui/Form"
import Checkbox from  "../../../ui/Checkbox"
import Button from "../../../ui/Button";
import { CheckGroup, CheckOption } from "../../../ui/CheckGroup";
import * as yup from "yup";


const FilterGroup = ({ children }) => (
  <div>
    {children}
  </div>
)

const FilterTitle = ({ children }) => (
  <h2>
    {children}
  </h2>
)

const ProductFilter = ({ categories = [], brands = [], onChange = () => {} }) => {
  const form = useForm({ 
    initialValues: { category: [], brand: [] },
    validateSchema: yup.object().shape({
      category: yup.array().of(yup.string()),
      brand:  yup.array().of(yup.string())
    }),
    onSubmit: onChange
  })

  return (
    <div className="product-filters">
      <Form form={form}>
        <h2>Filtros:</h2>
        <CheckGroup name="category">
          <FilterTitle>Categoria</FilterTitle>
          {
            categories.map(({ slug, name }) => <CheckOption key={slug} name={slug}>{name}</CheckOption>)
          }
        </CheckGroup>
        <CheckGroup name="brand">
          <FilterTitle>Marcas</FilterTitle>
          {
            brands.map(({ slug, name }) => <CheckOption key={slug} name={slug}>{name}</CheckOption>)
          }
        </CheckGroup>
        <Button onClick={form.submit}>Filtrar</Button>
      </Form>
    </div>
  );
};

export default ProductFilter;
