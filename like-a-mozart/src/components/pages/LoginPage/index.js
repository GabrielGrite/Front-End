import useForm from "../../../hooks/useForm";
import "./style.css";
import "./utils.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../App/routes";
import InputText from "../../ui/InputText";
import Button from "../../ui/SubmitButton";
import * as yup from "yup";
import Form from "../../ui/Form";
import {
  notifyError,
  notifySuccess,
  notifyUnexpectedError,
} from "./../../../lib/notification";
import api from "../../../api/api";
import { useAuthContext } from "../../App/AuthenticationProvider";

const LoginPage = () => {
  const { setAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    api.login(email, password).then(
      authenticatedUser => {
        setAuthenticated(authenticatedUser);
        notifySuccess(`${authenticatedUser.name}, seja bem vindo!`);
        navigate(ROUTES.home);
      },
      error => {
        if (error.status == 401) {
          notifyError("Senha incorreta");
        } else {
          notifyUnexpectedError();
        }
      }
    );
  };

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
    onSubmit: handleLogin,
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
