import useForm from "../../../hooks/useForm";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../App/routes";
import InputText from "../../ui/InputText";
import Button from "../../ui/SubmitButton";
import * as yup from "yup";
import Form, { useFormContext } from "../../ui/Form";
import { useState } from "react";
import InputDate from "../../ui/InputDate";
import InputTextMask from "../../ui/InputTextMask";
import zipCodeService from "../../../api/zipCodeService";
import { isEmpty } from "../../../lib/string-utils";
import BrazilStateSelector from "../../ui/BrazilStateSelector";
import {
  notifyError,
  notifySuccess,
  notifyUnexpectedError,
} from "../../../lib/notification";
import Checkbox from "../../ui/Checkbox";
import api from "../../../api/api";

const Row = ({ className, children }) => (
  <div className={`flex-row ${className}`}>{children}</div>
);

const MainForm = ({ nextStep }) => {
  const form = useFormContext();

  const handleNextClick = async event => {
    event.preventDefault();

    const isValid = await form.validatePartial([
      "name",
      "surname",
      "email",
      "phone",
      "birthdate",
      "password",
      "confirmPassword",
    ]);

    if (isValid) {
      nextStep();
    }
  };

  return (
    <>
      <span className="signup100-form-title p-b-43">Cadastre-se</span>
      <InputText placeholder="Nome" name="name" />
      <InputText placeholder="Sobrenome" name="surname" />
      <Row>
        <InputDate placeholder="Data de nascimento" name="birthdate" />
        <InputTextMask
          name="phone"
          mask="99 9999 9999"
          placeholder="Telefone"
        />
      </Row>
      <InputText placeholder="Email" name="email" />
      <Row>
        <InputText placeholder="Senha" name="password" type="password" />
        <InputText
          placeholder="Confirme sua senha"
          name="confirmPassword"
          type="password"
        />
      </Row>
      <Button onClick={handleNextClick}>Próximo</Button>
    </>
  );
};

const SecondStepForm = ({ previousStep }) => {
  const form = useFormContext();

  const handleZipCodeBlur = event => {
    form.handleBlur(event);

    if (!isEmpty(event.target.value)) {
      zipCodeService
        .resolve(event.target.value)
        .then(({ address, state, city, error }) => {
          if (error) {
            form.setFieldError("addressZipCode", ["CEP não encontrado"]);
          } else {
            form.setFieldValue("addressStreet", address);
            form.setFieldValue("addressState", state);
            form.setFieldValue("addressCity", city);
          }
        });
    }
  };

  return (
    <>
      <span className="signup100-form-title p-b-43">Cadastre seu endereço</span>
      <Row className="flex-row">
        <InputTextMask
          name="addressZipCode"
          mask="99.999-999"
          placeholder="CEP"
          onBlur={handleZipCodeBlur}
        />
        <InputText name="addressNumber" placeholder="Número" />
      </Row>
      <InputText name="addressStreet" placeholder="Endereço" />
      <Row>
        <InputText name="addressCity" placeholder="Cidade" />
        <BrazilStateSelector
          type="select"
          name="addressState"
          placeholder="Estado"
        />
      </Row>
      <InputText
        name="addressComplement"
        placeholder="Complementento (opcional)"
      />
      <Checkbox name="receiveEmails">
        Desejo receber emails Like a Mozart?
      </Checkbox>
      <Row className="mg-t-10">
        <Button className="mg-b-10" onClick={previousStep}>
          Voltar
        </Button>
        <Button onClick={form.submit}>Finalizar cadastro</Button>
      </Row>
    </>
  );
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(1);
  const previousStep = () => setCurrentStep(0);

  const handleSignup = formValues => {
    api.signup(formValues).then(
      user => {
        notifySuccess(`${user.name}, sua conta foi criada!`);
        navigate(`/${ROUTES.login}`);
      },
      err => {
        if (err.status == 422) {
          notifyError(
            "Verifique se todos os campos foram preenchidos e tente novamente"
          );
        } else {
          notifyUnexpectedError();
        }
      }
    );
  };

  const form = useForm({
    initialValues: {
      name: "",
      surname: "",
      birthdate: null,
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      zipCode: "",
      number: "",
      state: "",
      city: "",
      complement: "",
      receiveEmails: true,
    },
    validateSchema: yup.object().shape({
      name: yup.string().required("Nome é obrigatório"),
      surname: yup.string().required("Sobrenome é obrigatório"),
      birthdate: yup
        .date()
        .max(new Date(), "Não pode ser uma data futura")
        .required("Data de nascimento é obrigatório")
        .nullable(),
      email: yup
        .string()
        .email("Precisa ser um email válido: ex@abc.xyz")
        .required("Email é obrigatório"),
      password: yup
        .string()
        .required("Senha é obrigatória")
        .min(8, "Deve conter no mínimo 8 caracteres"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Confirmação de senha inválida")
        .required("Senha é obrigatória"),
      phone: yup.string().required("Telefone é obrigatório"),
      addressStreet: yup.string().required("Endereço é obrigatório"),
      addressZipCode: yup.string().required("CEP é obrigatório"),
      addressNumber: yup.string().required("Número é obrigatório"),
      addressState: yup.string().required("Estado é obrigatório"),
      addressCity: yup.string().required("Cidade é obrigatório"),
      addressComplement: yup.string(),
      receiveEmails: yup.bool().required("Campo obrigatório"),
    }),
    onSubmit: handleSignup,
  });

  return (
    <div className="limiter">
      <div className="container-signup100">
        <div className="wrap-signup100">
          <Form form={form} className="signup100-form validate-form">
            {currentStep === 0 && <MainForm nextStep={nextStep} />}
            {currentStep === 1 && (
              <SecondStepForm previousStep={previousStep} />
            )}
          </Form>
          <div className="signup100-more"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
