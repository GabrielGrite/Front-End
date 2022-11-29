import "./style.css";

import useForm from "../../../../hooks/useForm";
import Form from "../../../ui/Form";
import Button from "../../../ui/SubmitButton";
import { CheckGroup, CheckOption } from "../../../ui/CheckGroup";
import * as yup from "yup";
import Paper from "../../../ui/Paper";

const FilterTitle = ({ children }) => (
  <h3
    style={{
      fontSize: "20px",
      marginTop: "10px",
      marginBottom: "3px",
      color: "#1a1a1a",
      fontWeight: 500,
    }}
  >
    {children}
  </h3>
);

const FilterContainer = ({ children }) => (
  <div
    style={{
      width: "200px",
      marginBottom: "10px",
    }}
  >
    {children}
  </div>
);

const ProductFilter = ({
  categories = [],
  brands = [],
  onChange = () => {},
}) => {
  const form = useForm({
    initialValues: { category: [], brand: [] },
    validateSchema: yup.object().shape({
      category: yup.array().of(yup.string()),
      brand: yup.array().of(yup.string()),
    }),
    onSubmit: onChange,
  });

  return (
    <div className="product-filters">
      <Paper>
        <Form form={form}>
          <FilterContainer>
            <CheckGroup name="category">
              <FilterTitle>Categoria</FilterTitle>
              {categories.map(({ slug, name }) => (
                <CheckOption key={slug} name={slug}>
                  {name}
                </CheckOption>
              ))}
            </CheckGroup>
            <CheckGroup name="brand">
              <FilterTitle>Marca</FilterTitle>
              {brands.map(({ slug, name }) => (
                <CheckOption key={slug} name={slug}>
                  {name}
                </CheckOption>
              ))}
            </CheckGroup>
          </FilterContainer>
          <Button onClick={form.submit}>Filtrar</Button>
        </Form>
      </Paper>
    </div>
  );
};

export default ProductFilter;
