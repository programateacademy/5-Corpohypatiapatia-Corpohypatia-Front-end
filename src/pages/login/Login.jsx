import { useState } from "react";
import "./login.css";
import logo from "../../assets/img/CorpoHypatia.png";
import { useNavigate } from "react-router-dom";

import { signIn } from "../../service/api";

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  return !(password.trim().length === 0);
}

const Login = () => {
  const [data, setData] = useState({ role: "user", email: "", password: "" });
  const [error, setError] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const [mensaje, setMensaje] = useState();

  const navigate = useNavigate();

  const handleClick = () => {
    setValidEmail(validateEmail(data.email));
    setValidPassword(validatePassword(data.password));
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validEmail && validPassword) {
      const user = {
        role: data.role,
        email: data.email,
        password: data.password,
      };

      const res = await signIn(user);

      if (res.data.token) {
        setMensaje("Loading...");
        setTimeout(() => {
          setMensaje("");
          localStorage.setItem("token", res.data.token);
          navigate(`/projects`);
        }, 5000);
      } else {
        const message = res.data.message;
        setMensaje(message);
        setTimeout(() => {
          setMensaje("");
        }, 5000);
      }
    }
  };

  return (
    <>
      <div className="login_container">
        <div className="login_form_container">
          <div className="leftLogin">
            <form className="form_container" onSubmit={handleSubmit}>
              <h1>INICIAR SESION</h1>
              <select
                className="inputLogin"
                name="role"
                onChange={handleChange}
              /* required */
              >
                <option value="user" defaultValue>
                  Usuario
                </option>
                <option value="admin">Administrador</option>
              </select>
              <input
                type="email"
                placeholder="Correo"
                name="email"
                onChange={handleChange}
                value={data.email}
                /* required */
                className="inputLogin"
              />
              {!validEmail && (
                <label style={{ color: "red", margin: "10px 0 10px 10px" }}>
                  Por favor ingrese una dirección de correo válida.
                </label>
              )}
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleChange}
                value={data.password}
                /* required */
                className="inputLogin"
              />
              {!validPassword && (
                <label style={{ color: "red", margin: "10px 0 10px 10px" }}>
                  Por favor ingrese una contraseña válida.
                </label>
              )}
              {error && <div className="error_msg">{error}</div>}
              <button type="submit" className="green_btn" onClick={handleClick}>
                Ingresar
              </button>
              {data.role === "admin" && (
                <a href="/reset-password" className="login__forgot">
                  ¿ Has olvidado la contraseña ?
                </a>
              )}
            </form>
          </div>
          <div className="rightLogin">
            <img src={logo} width={250} alt="logo"/>
          </div>
        </div>
      </div>
      {mensaje && <div className="toast-login">{mensaje}</div>}
    </>
  );
};

export default Login;
