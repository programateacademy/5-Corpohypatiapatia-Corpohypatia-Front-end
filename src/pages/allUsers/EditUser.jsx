import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const URI = 'https://5-corpohypatiapatia-corpohypatia-back-end.vercel.app/users/';

const EditUser = () => {
    const [firstNames,setFirstNames] = useState('');
    const [lastNames,setLastNames] = useState('');
    const [email,setEmail] = useState('');
    const [position,setPosition] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}${id}`, {
            firstNames:firstNames,
            lastNames:lastNames, 
            email:email,
            position: position,
            phone: phone,
            password: password
        });
        navigate('/all-users');
    }

    useEffect( () => {
        getUserById()
    },[])

    const getUserById = async () => {
        const res = await axios.get(`${URI}${id}`);
        setFirstNames(res.data.firstNames);
        setLastNames(res.data.lastNames);
        setEmail(res.data.email);
        setPosition(res.data.position);
        setPhone(res.data.phone);
        setPassword(res.data.password);        
    }

    return(
        <div className='container mt-5'>
            <h3>Editar Usuario</h3>
            <form onSubmit={update}>
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
                <button type="submit" className="btn btn-primary">Modificar Usuario</button>
            </form>
        </div>
    )
}

export default EditUser;