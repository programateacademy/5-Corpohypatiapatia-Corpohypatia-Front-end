import React, { useEffect, useState } from 'react'
import axios from 'axios'

function EntityForm() {
    //data db
    const [datos, setDatos] = useState([])

    useEffect(() => {
        datosBack()
    }, [])

    const datosBack = async () => {
        const res = await axios.get('http://localhost:9000/api/data')
        console.log(res.data);
        setDatos(res.data)
    }

    return (
        <div className='container'>
            <form>
                <div className="m-3 px-5 py-3 bg-body-secondary">
                    <div className='fs-3 mb-2 text-center'>Datos de la Entidad Solicitante</div>
                    <label for="nombreEntidad" className="form-label ">Nombre de la entidad</label>
                    <input type="text" id="nombreEntidad" className="form-control mb-4" placeholder="nombre entidad" onChange={(e) => setEntity_name(e.target.value)} value={entity_name} required />
                    <label for="direccion" className="form-label">Dirección</label>
                    <input type="text" id="direccion" className="form-control mb-4" placeholder="cll ejemplo # " onChange={(e) => setEntity_adress(e.target.value)} value={entity_adress} required />
                    <label for="web" className="form-label">Página web</label>
                    <input type="text" id="web" className="form-control mb-4" placeholder="www.ejemplo.com" onChange={(e) => setEntity_webpage(e.target.value)} value={entity_webpage} required />
                    <label for="telefono" className="form-label">Teléfono</label>
                    <input type="text" id="telefono" className="form-control mb-4" placeholder="numero" onChange={(e) => setEntity_phone(e.target.value)} value={entity_phone} required />
                </div>
                <div className="m-3 px-5 py-3 bg-body-secondary">
                    <div className='fs-3 mb-2 text-center'>Contacto</div>
                    <label for="nombre" className="form-label ">Nombre</label>
                    <input type="text" id="nombre" className="form-control mb-4" placeholder="nombre" onChange={(e) => setContact_name(e.target.value)} value={contact_name} required />
                    <label for="tel" className="form-label">Teléfono</label>
                    <input type="text" id="tel" className="form-control mb-4" placeholder="numero" onChange={(e) => setContact_phone(e.target.value)} value={contact_phone} required />
                    <label for="email" className="form-label">correo electronico</label>
                    <input type="email" id="email" className="form-control mb-4" placeholder="@ejemplo.com" onChange={(e) => setContact_email(e.target.value)} value={contact_email} required />
                </div>
                <div className="m-3 px-5 py-3 bg-body-secondary">
                    <div className='fs-3 mb-2 text-center'>Datos de la Entidad</div>
                    <label for="legal" className="form-label ">Estatus legal</label>
                    <input type="text" id="legal" className="form-control mb-4" placeholder="" onChange={(e) => setLegal_status(e.target.value)} value={legal_status} required />
                    <label for="pais" className="form-label">País</label>
                    <input type="text" id="pais" className="form-control mb-4" placeholder="" onChange={(e) => setCountry(e.target.value)} value={country} required />
                    <label for="ano" className="form-label">Año de fundación</label>
                    <input type="text" id="ano" className="form-control mb-4" placeholder="yy/mm/dd" onChange={(e) => setFoundaion_year(e.target.value)} value={foundaion_year} required />
                    <label for="nit" className="form-label">NIT</label>
                    <input type="text" id="nit" className="form-control mb-4" placeholder="" onChange={(e) => setRegistry_nit(e.target.value)} value={registry_nit} required />

                </div>
            </form>
        </div>
    )
}

export default EntityForm