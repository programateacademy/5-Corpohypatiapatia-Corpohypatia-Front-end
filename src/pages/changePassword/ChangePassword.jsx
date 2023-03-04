import { useState } from "react";
import logo from "../../assets/img/CorpoHypatia.png";
import { useParams } from "react-router-dom";

import { changePassword } from "../../service/api";

function validatePassword(password) {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
  return re.test(String(password));
}

export default function ChangePassword() {
  const token = useParams();

  const [data, setData] = useState({ password: "" });

  const [valid, setValid] = useState(true);

  const [mensaje, setMensaje] = useState();

  const handleClick = () => {
    setValid(validatePassword(data.password));
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid) {
      const password = {
        password: data.password,
      };
      const res = await changePassword(password, token.token);

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
              <h1>Ingresa tu nueva contraseña</h1>
              <p>
                Para recuperar tu cuenta, por favor ingresa tu nueva contraseña
                a continuación.
              </p>
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleChange}
                value={data.password}
                /* required */
                className="input_password"
              />
              {!valid && (
                <label className="password_error_msg">
                  La contraseña debe tener mínimo 8 caracteres y máximo 15, un
                  número, una letra mayúscula y una letra minúscula, al menos 1
                  caracter especial y no espacios en blanco.
                </label>
              )}

              <button type="submit" className="green_btn" onClick={handleClick}>
                Cambiar Contraseña
              </button>

              <a href="/login" className="login__forgot">
                Regresar a Iniciar Sesión
              </a>
            </form>
          </div>
          <div className="right_password">
            <img src={logo} width={250} alt="logo"/>
          </div>
        </div>
      </div>

      {mensaje && <div className="toast-login">{mensaje}</div>}
    </>
  );
}
