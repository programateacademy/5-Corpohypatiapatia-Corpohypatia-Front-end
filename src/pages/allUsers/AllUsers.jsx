import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'https://5-corpohypatiapatia-corpohypatia-back-end.vercel.app/users/'

const AllUsers = () => {
    const [users, setUser] = useState([])
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const res = await axios.get(URI);
        setUser(res.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`${URI}${id}`);
        getUsers();
    }

    return (
        <div className='container'>
            {<div className='row'>
                <div className='col'>
                    <Link to="/create-user" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>N°</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Email</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.firstNames}</td>
                                    <td>{user.lastNames}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/edit-user/${user._id}`} className='btn btn-info mx-2'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => deleteUser(user._id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>}
        </div>
    )
}

export default AllUsers;