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

const Login = () => {
  const [data, setData] = useState({ role: "user", email: "", password: "" });
  const [error, setError] = useState("");
  const [valid, setValid] = useState(true);

  const [mensaje, setMensaje] = useState();

  const navigate = useNavigate();

  const handleClick = () => {
    setValid(validateEmail(data.email));
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      role: data.role,
      email: data.email,
      password: data.password,
    };

    const res = await signIn(user);
    console.log(res.data);

    if (res.data.token) {
      setMensaje("Loading...");
      setTimeout(() => {
        setMensaje("");
        localStorage.setItem("token", res.data.token);
        navigate(`/Home`);
      }, 5000);
    } else {
      const message = res.data.message;
      setMensaje(message);
      console.log(message);
      setTimeout(() => {
        setMensaje("");
      }, 5000);
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
                required
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
                required
                className="inputLogin"
              />
              {!valid && (
                <label style={{ color: "red", margin: "10px 0 10px 10px" }}>
                  Ingrese una dirección de correo invalida
                </label>
              )}
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="inputLogin"
              />
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
            <img src={logo} width={250} />
          </div>
        </div>
      </div>
      {mensaje && <div className="toast-login">{mensaje}</div>}
    </>
  );
};

export default Login;
