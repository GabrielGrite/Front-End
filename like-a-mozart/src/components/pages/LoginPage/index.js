import useForm, { isValid } from "../../../hooks/useForm";
import "./style.css";
import "./utils.css";
import loginImage from "../../../images/placeholder.jpg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../App/routes";
import InputText from "../../ui/InputText";
import Button from "../../ui/Button";
import * as yup from "yup";
import Form from "../../ui/Form";
import { notifySuccess } from "./../../../lib/notification";

const LoginPage = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validateSchema: yup.object().shape({
      email: yup
        .string()
        .email("Precisa ser um email válido: ex@abc.xyz")
        .required("Email é obrigatório"),
      password: yup.string().required("Senha é obrigatória"),
    }),
    onSubmit: () => {
      notifySuccess("Seja bem vindo");
      navigate(ROUTES.home);
    },
  });

  const navigateSignUp = event => {
    event.preventDefault();
    navigate(`/${ROUTES.signUp}`);
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <Form form={form} className="login100-form validate-form">
            <span className="login100-form-title p-b-43">Entrar</span>
            <InputText placeholder="Email" name="email" />
            <InputText placeholder="Senha" name="password" type="password" />
            <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div>
                <a>Esqueci a senha</a>
              </div>
            </div>
            <Button onClick={form.submit}>Entrar</Button>
            <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div>
                <a onClick={navigateSignUp}>
                  Ainda não tem uma conta? Crie uma
                </a>
              </div>
            </div>
          </Form>
          <div className="login100-more"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
