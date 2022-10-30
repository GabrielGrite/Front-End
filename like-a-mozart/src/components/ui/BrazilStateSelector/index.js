import InputSelect, { Option } from "../InputSelect";

const BrazilStateSelector = props => {
  return (
    <InputSelect {...props}>
      <option disabled={true} value="">{props.placeholder || ""}</option>
      <Option value="AC">Acre</Option>
      <Option value="AL">Alagoas</Option>
      <Option value="AP">Amapá</Option>
      <Option value="AM">Amazonas</Option>
      <Option value="BA">Bahia</Option>
      <Option value="CE">Ceará</Option>
      <Option value="DF">Distrito Federal</Option>
      <Option value="ES">Espírito Santo</Option>
      <Option value="GO">Goiás</Option>
      <Option value="MA">Maranhão</Option>
      <Option value="MT">Mato Grosso</Option>
      <Option value="MS">Mato Grosso do Sul</Option>
      <Option value="MG">Minas Gerais</Option>
      <Option value="PA">Pará</Option>
      <Option value="PB">Paraíba</Option>
      <Option value="PR">Paraná</Option>
      <Option value="PE">Pernambuco</Option>
      <Option value="PI">Piauí</Option>
      <Option value="RJ">Rio de Janeiro</Option>
      <Option value="RN">Rio Grande do Norte</Option>
      <Option value="RS">Rio Grande do Sul</Option>
      <Option value="RO">Rondônia</Option>
      <Option value="RR">Roraima</Option>
      <Option value="SC">Santa Catarina</Option>
      <Option value="SP">São Paulo</Option>
      <Option value="SE">Sergipe</Option>
      <Option value="TO">Tocantins</Option>
    </InputSelect>
  );
};

export default BrazilStateSelector;
