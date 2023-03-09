import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'https://5-corpohypatiapatia-corpohypatia-back-end.vercel.app/users/';

const CreateUser = () => {
    const [firstNames,setFirstNames] = useState('');
    const [lastNames,setLastNames] = useState('');
    const [email,setEmail] = useState('');
    const [position,setPosition] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, {
            firstNames:firstNames,
            lastNames:lastNames, 
            email:email,
            position: position,
            phone: phone,
            password: password
        });
        navigate('/all-users');        
    }
    
    return (
        <div className="container mt-5">
            <h3>Crear Usuario</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Nombres</label>
                    <input 
                        value={firstNames}
                        onChange ={ (e) => setFirstNames(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input 
                        value={lastNames}
                        onChange ={ (e) => setLastNames(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        value={email}
                        onChange ={ (e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input 
                        value={password}
                        onChange ={ (e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input 
                        value={phone}
                        onChange ={ (e) => setPhone(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Posición</label>
                    <input 
                        value={position}
                        onChange ={ (e) => setPosition(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Crear Usuario</button>
            </form>
        </div>
    )
}

export default CreateUser;