import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/users/';

const CreateUser = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [position,setPosition] = useState('');
    const [profile,setProfile] = useState('');

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, {
            name:name, 
            email:email,
            password: password,
            phone: phone,
            position: position,
            profile: profile
        });
        navigate('/users');        
    }
    
    return (
        <div className="container mt-5">
            <h3>Crear Usuario</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                        value={name}
                        onChange ={ (e) => setName(e.target.value)}
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
                <div className="mb-3">
                    <label className="form-label">Perfil</label>
                    <input 
                        value={profile}
                        onChange ={ (e) => setProfile(e.target.value)}
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