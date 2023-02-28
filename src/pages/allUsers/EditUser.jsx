import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const URI = 'http://localhost:8000/users/';

const EditUser = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}${id}`, {
            name: name,
            email: email
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
    }

    return(
        <div>
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
                <button type="submit" className="btn btn-primary">Modificar Usuario</button>
            </form>
        </div>
    )
}

export default EditUser;