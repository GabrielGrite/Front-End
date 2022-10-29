import useForm, { isValid } from "../../../hooks/useForm";
import "./style.css";
import "./utils.css"
import loginImage from "../../../images/placeholder.jpg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../App/routes";
import InputText from "../../ui/InputText";
import Button from "../../ui/Button";

const LoginPage = () => {
  const navigate = useNavigate();

  const { fieldValue, handleChange, submit, errors } = useForm({
    initialValues: {},
    onSubmit: () => navigate(ROUTES.home),
  });

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-43">Entrar</span>
            <InputText 
              placeholder="Email"
              name="email"
              value={fieldValue("email")}
              onChange={handleChange}
            />
            <InputText 
              placeholder="Senha"
              name="password"
              type="password"
              value={fieldValue("password")}
              onChange={handleChange}
            />
            <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div>
                <a>Esqueci a senha</a>
              </div>
            </div>
            <Button onClick={submit}>Entrar</Button>
          </form>
          <div
            className="login100-more"
            style={{ backgroundImage: `url(${loginImage})` }}
          ></div>
        </div>
      </div>

    </div> 
  );
};

export default LoginPage;
