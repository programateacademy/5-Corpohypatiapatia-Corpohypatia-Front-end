import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const URI = 'http://localhost:8000/users/';

const EditUser = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [position,setPosition] = useState('');
    const [profile,setProfile] = useState('');
    const navigate = useNavigate();
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}${id}`, {
            name: name,
            email: email,
            password: password,
            phone: phone,
            position: position,
            profile: profile
        });
        navigate('/users');
    }

    useEffect( () => {
        getUserById()
    },[])

    const getUserById = async () => {
        const res = await axios.get(`${URI}${id}`);
        setName(res.data.name);
        setEmail(res.data.email);
        setPassword(res.data.password);
        setPhone(res.data.phone);
        setPosition(res.data.position);
        setProfile(res.data.profile);
    }

    return(
        <div className='container mt-5'>
            <h3>Editar Usuario</h3>
            <form onSubmit={update}>
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
                <button type="submit" className="btn btn-primary">Modificar Usuario</button>
            </form>
        </div>
    )
}

export default EditUser;