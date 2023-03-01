import React from 'react'

function Data() {
    return (
        <div className='container my-3'>
            <table className='table table-striped align-middle' >
                <thead >
                    <tr className='table-success'>
                        <th className='text-center'>Datos de la Entidad SOLICITANTE</th>
                        <th className='text-center'>info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Nombre entidad</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Dirección</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Página web</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Teléfono</th>
                        <th></th>
                    </tr>
                </tbody>
                <thead>
                    <tr className='table-success'>
                        <th className='text-center'>Contacto de la Persona</th>
                        <th className='text-center'>info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >Nombre</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Teléfono</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Correo electronico</th>
                        <th></th>
                    </tr>
                </tbody>
                <thead>
                    <tr className='table-success'>
                        <th className='text-center'>Datos de la Entidad</th>
                        <th className='text-center'>info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >Estatus legal</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>País</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Año de fundación</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>NIT</th>
                        <th></th>
                    </tr>
                </tbody>
                <div className='d-grid gap-2 d-md-block'>
                    <button type="submit" className="btn btn-outline-warning m-3" onClick={() => }>Editar</button>
                    <button type="submit" className="btn btn-outline-danger m-3" onClick={() => }>Eliminar</button>
                </div>
            </table>
        </div>
    )
}

export default Data;