import { useState } from "react";
import axios from "axios";
import "./login.css";
import logo from "../../assets/img/CorpoHypatia.png";

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [valid, setValid] = useState(true);

    const handleClick = () => {
        setValid(validateEmail(data.email));
    };

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/routes/route";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/home";
            console.log(data, res, res.data, res.value, "si sirve ñero, que pasa?")
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500,
                console.log("Error en el fetching de datos", error)
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className="login_container">
            <div className="login_form_container">
                <div className="leftLogin">
                    <form className="form_container" onSubmit={handleSubmit}>
                        <h1>INICIAR SESION</h1>
                        <input
                            type="email"
                            placeholder="Correo"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className="inputLogin"
                        />
                        {!valid && <label style={{color:"red", margin:"10px 0 10px 10px"}}>Ingrese una dirección de correo invalida</label>}
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
                        {data.email === "admin@hotmail.com" && <a href="#" className="login__forgot">Olvide mi contraseña</a>}
                    </form>
                </div>
                <div className="rightLogin">
                    <img src={logo} width={250}/>
                </div>
            </div>
        </div>
    );
};

export default Login;