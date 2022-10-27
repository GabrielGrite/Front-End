import useForm from "../../../hooks/useForm";
import "./style.css";
// import loginImage from "../../../images/login-image.jpg"

const LoginPage = () => {
  const { fieldValue, handleChange, submit } = useForm({ 
    initialValues: {},
    onSubmit: console.log
  });

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-43">Entrar</span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                value={fieldValue("email")}
                onChange={handleChange}
              />
              <span className="focus-input100"></span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="password"
                value={fieldValue("password")}
                placeholder="Senha"
                onChange={handleChange}
              />
              <span className="focus-input100"></span>
            </div>
            <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div>
                <a> Esqueci a senha </a>
              </div>
            </div>
            <div className="container-login100-form-btn">
              <button onClick={submit} className="login100-form-btn">
                Entrar
              </button>
            </div>
          </form>
          {/* <div
          className="login100-more"
          style="background-image: url('Images/violoes\ Taylor-300s.jpg')"
        ></div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
