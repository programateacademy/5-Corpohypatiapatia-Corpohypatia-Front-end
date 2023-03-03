import React from "react";

function Data({ datos, activeEdit, confirm }) {
  return (
    <div className="container my-3">
      <table className="table table-striped align-middle">
        {datos.map((item) => (
          <>
            <thead key={item}>
              <tr className="table-success">
                <th className="text-center">Datos de la Entidad SOLICITANTE</th>
                <th className="text-center">info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Nombre entidad</th>
                <th>{item.entity_name}</th>
              </tr>
              <tr>
                <th>Dirección</th>
                <th>{item.entity_adress}</th>
              </tr>
              <tr>
                <th>Página web</th>
                <th>{item.entity_webpage}</th>
              </tr>
              <tr>
                <th>Teléfono</th>
                <th>{item.entity_phone}</th>
              </tr>
            </tbody>
            <thead>
              <tr className="table-success">
                <th className="text-center">Contacto de la Persona</th>
                <th className="text-center">info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>{item.contact_name}</th>
              </tr>
              <tr>
                <th>Teléfono</th>
                <th>{item.contact_phone}</th>
              </tr>
              <tr>
                <th>Correo electronico</th>
                <th>{item.contact_email}</th>
              </tr>
            </tbody>
            <thead>
              <tr className="table-success">
                <th className="text-center">Datos de la Entidad</th>
                <th className="text-center">info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Estatus legal</th>
                <th>{item.legal_status}</th>
              </tr>
              <tr>
                <th>País</th>
                <th>{item.country}</th>
              </tr>
              <tr>
                <th>Año de fundación</th>
                <th>{item.foundaion_year}</th>
              </tr>
              <tr>
                <th>NIT</th>
                <th>{item.registry_nit}</th>
              </tr>
            </tbody>
            <div className="d-grid gap-2 d-md-block">
              <button
                type="submit"
                className="btn btn-outline-warning m-3"
                onClick={() => activeEdit(item._id)}
              >
                Editar
              </button>
              <button
                type="submit"
                className="btn btn-outline-danger m-3"
                onClick={() => confirm(item._id)}
              >
                Eliminar
              </button>
            </div>
          </>
        ))}
      </table>
    </div>
  );
}

export default Data;
