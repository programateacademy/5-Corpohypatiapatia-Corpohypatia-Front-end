import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/users/';

const CreateUser = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, {name:name, email:email});
        navigate('/users');        
    }
    
    return (
        <div>
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