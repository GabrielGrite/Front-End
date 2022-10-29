import { useFormContext } from "../Form";
import "./style.css";

const InputSelect = ({ name, type, value, error, className, ...props }) => {
  const form = useFormContext();
  const showError = form.touched[name] && form.errors[name];

  return (
    <div
      className={`select-container validate-input ${
        showError ? "alert-validate" : ""
      }`}
      data-validate={form.errors[name]}
    >
      <select
        className="input_select_100"
        name={name}
        value={form.fieldValue(name)}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        onFocus={form.handleFocus}
        {...props}
      >
        <option value=""></option>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </select>
    </div>
  );
};

export default InputSelect;
