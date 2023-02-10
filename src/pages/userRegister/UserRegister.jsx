import { useState } from "react";
import axios from "axios";
import "./userRegister.css";

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const UserRegister = () => {
    const [data, setData] = useState({
        firstNames: "",
        lastNames: "",
        email: "",
        password: "",
        position: "",
        phone: "",
        role: "",
    });
    const [error, setError] = useState("");
    const [pass, setPass] = useState("")
    const [valid, setValid] = useState(true);
    const [messageEmail, setMessageEmail] = useState("");

    const handleClick = () => {
        setValid(validateEmail(data.email));
        if (!valid){
            setMessageEmail("Ingrese un correo valido")
        }if (data.email === ""){
            setMessageEmail("Ingrese un correo")
        }
    };

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/users";
            const { data: res } = await axios.post(url, data);
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return(
        <div id="container">
            <h1>&bull; REGISTRO DE USUARIOS &bull;</h1>
            <div className="underline">
            </div>
            <form id="contact_form" onSubmit={handleSubmit}>
                <div className="left">
                    <label htmlFor="firstNames"></label>
                    <input type="text" placeholder="Nombres" onChange={handleChange} value={data.firstNames} name="firstNames" id="firstNames_input" required={true}/>
                </div>
                <div className="right">
                    <label htmlFor="lastNames"></label>
                    <input type="text" placeholder="Apellidos" onChange={handleChange} value={data.lastNames} name="lastNames" id="lastName_input" required={true}/>
                </div>
                <div className="whole">
                    <label htmlFor="email"></label>
                    <input type="email" placeholder="Correo" onChange={handleChange} value={data.email} name="email" id="email_input" required={true}/>
                    {!valid && <label style={{color:"red"}}>{messageEmail}</label>}
                </div>

                <div className="left">
                    <label htmlFor="position"></label>
                    <input type="text" placeholder="Cargo" onChange={handleChange} value={data.position} name="position" id="employment_input"/>
                </div>
                <div className="right">
                    <label htmlFor="phone"></label>
                    <input type="number" placeholder="Telefono" onChange={handleChange} value={data.phone} name="phone" id="phone_input" minLength={10}/>
                </div>
                <div className="left">
                    <label htmlFor="password"></label>
                    <input type="password" placeholder="Contraseña" onChange={handleChange} value={data.password} name="password" id="password_input" required={true}/>
                </div>
                <div className="right">
                    <label htmlFor="password2"></label>
                    <input type="password" placeholder="Confirmar Contraseña" value={pass} onChange={(e) => setPass(e.target.value)} name="password2" id="password2_input" required={true}/>
                    {pass !== data.password && <label style={{color:"red"}}>Las contraseñas no coinciden</label>}
                </div>
                <div className="whole">
                    <label htmlFor="Rol"></label>
                    <select placeholder="Rol" value={data.role} onChange={handleChange} name="Rol" id="Rol_input" required={true}>
                        <option value="user" selected={true}>User</option>
                        <option value="admin" disabled={true}>Admin</option>
                    </select>
                </div>
                {error && <div>{error}</div>}
                <div className="submit">
                    <button type="submit" id="form_button" onClick={handleClick}>Registrar</button>
                </div>
            </form>
        </div>
    );
};

export default UserRegister;
