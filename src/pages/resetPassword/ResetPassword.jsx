import { useState } from "react";
import "./resetPassword.css";
import logo from "../../assets/img/CorpoHypatia.png";

import { resetPassword } from "../../service/api";

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function ResetPassword() {
  const [data, setData] = useState({ email: "" });

  const [valid, setValid] = useState(true);
  const [mensaje, setMensaje] = useState();

  const handleClick = () => {
    setValid(validateEmail(data.email));
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid) {
      const email = {
        email: data.email,
      };
      const res = await resetPassword(email);

      const message = res.data.message;

      setMensaje(message);

      setTimeout(() => {
        setMensaje("");
      }, 5000);
    }
  };

  return (
    <>
      <div className="password_container">
        <div className="password_form_container">
          <div className="left_password">
            <form className="form_container" onSubmit={handleSubmit}>
              <h1>¿ Has olvidado la contraseña ?</h1>
              <p>
                Para reestablecer tu contraseña, ingresa tu dirección de correo
                electrónico a continuación.
              </p>
              <input
                type="email"
                placeholder="Correo"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="input_password"
              />
              {!valid && (
                <label className="password_error_msg">
                  Por favor ingrese una dirección de correo válida.
                </label>
              )}

              <button type="submit" className="green_btn" onClick={handleClick}>
                Reestablecer Contraseña
              </button>

              <a href="/login" className="login__forgot">
                Regresar a Iniciar Sesión
              </a>
            </form>
          </div>
          <div className="right_password">
            <img src={logo} width={250} alt="logo" />
          </div>
        </div>
      </div>
      {mensaje && <div className="toast-login">{mensaje}</div>}
    </>
  );
}
