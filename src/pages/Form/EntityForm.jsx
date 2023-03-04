import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "../Form/Data";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function Form() {
  //data api
  const [datos, setDatos] = useState([]);

  const [validation, setValidation] = useState(false);

  //target values form
  const [entity_name, setEntity_name] = useState("");
  const [entity_adress, setEntity_adress] = useState("");
  const [entity_webpage, setEntity_webpage] = useState("");
  const [entity_phone, setEntity_phone] = useState("");
  const [contact_name, setContact_name] = useState("");
  const [contact_phone, setContact_phone] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [legal_status, setLegal_status] = useState("");
  const [country, setCountry] = useState("");
  const [foundaion_year, setFoundaion_year] = useState("");
  const [registry_nit, setRegistry_nit] = useState("");

  const [id, setId] = useState();

  useEffect(() => {
    datosBack();
  }, []);

  const datosBack = async () => {
    const res = await axios.get("https://5-corpohypatiapatia-corpohypatia-back-end.vercel.app/form/data");
    console.log(res.data);
    setDatos(res.data);
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post("https://5-corpohypatiapatia-corpohypatia-back-end.vercel.app/form/data", {
      entity_name,
      entity_adress,
      entity_webpage,
      entity_phone,
      contact_name,
      contact_phone,
      contact_email,
      legal_status,
      country,
      foundaion_year,
      registry_nit,
    });
    datosBack();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`https://5-corpohypatiapatia-corpohypatia-back-end.vercel.app/form/data/${id}`, {
      entity_name,
      entity_adress,
      entity_webpage,
      entity_phone,
      contact_name,
      contact_phone,
      contact_email,
      legal_status,
      country,
      foundaion_year,
      registry_nit,
    });
    datosBack();
    setValidation(false);
  };

  const handleRemove = async (_id) => {
    await axios.delete(`https://5-corpohypatiapatia-corpohypatia-back-end.vercel.app/form/data/${_id}`);
    datosBack();
  };

  const confirm = (_id) => {
    confirmAlert({
      title: "confirmación",
      message: "¿Deseas eliminar el registro?",
      buttons: [
        {
          label: "Si",
          onClick: () => handleRemove(_id),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const activeEdit = async (_id) => {
    const respuesta = await axios.get(`https://5-corpohypatiapatia-corpohypatia-back-end.vercel.app/form/data/${_id}`);
    setEntity_name(respuesta.data.entity_name);
    setEntity_adress(respuesta.data.entity_adress);
    setEntity_webpage(respuesta.data.entity_webpage);
    setEntity_phone(respuesta.data.entity_phone);
    setContact_name(respuesta.data.contact_name);
    setContact_phone(respuesta.data.contact_phone);
    setContact_email(respuesta.data.contact_email);
    setLegal_status(respuesta.data.legal_status);
    setCountry(respuesta.data.country);
    setFoundaion_year(respuesta.data.foundaion_year);
    setRegistry_nit(respuesta.data.registry_nit);
    setId(_id);
    setValidation(true);
    //console.log(id);
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="m-3 px-5 py-3 bg-body-secondary">
            <div className="fs-3 mb-2 text-center">
              Datos de la Entidad Solicitante
            </div>
            <label for="nombreEntidad" className="form-label ">
              Nombre de la entidad
            </label>
            <input
              type="text"
              id="nombreEntidad"
              className="form-control mb-4"
              placeholder="nombre entidad"
              onChange={(e) => setEntity_name(e.target.value)}
              value={entity_name}
              required
            />
            <label for="direccion" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              className="form-control mb-4"
              placeholder="cll ejemplo # "
              onChange={(e) => setEntity_adress(e.target.value)}
              value={entity_adress}
              required
            />
            <label for="web" className="form-label">
              Página web
            </label>
            <input
              type="text"
              id="web"
              className="form-control mb-4"
              placeholder="www.ejemplo.com"
              onChange={(e) => setEntity_webpage(e.target.value)}
              value={entity_webpage}
              required
            />
            <label for="telefono" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              id="telefono"
              className="form-control mb-4"
              placeholder="numero"
              onChange={(e) => setEntity_phone(e.target.value)}
              value={entity_phone}
              required
            />
          </div>
          <div className="m-3 px-5 py-3 bg-body-secondary">
            <div className="fs-3 mb-2 text-center">Contacto</div>
            <label for="nombre" className="form-label ">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="form-control mb-4"
              placeholder="nombre"
              onChange={(e) => setContact_name(e.target.value)}
              value={contact_name}
              required
            />
            <label for="tel" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              id="tel"
              className="form-control mb-4"
              placeholder="numero"
              onChange={(e) => setContact_phone(e.target.value)}
              value={contact_phone}
              required
            />
            <label for="email" className="form-label">
              correo electronico
            </label>
            <input
              type="email"
              id="email"
              className="form-control mb-4"
              placeholder="@ejemplo.com"
              onChange={(e) => setContact_email(e.target.value)}
              value={contact_email}
              required
            />
          </div>
          <div className="m-3 px-5 py-3 bg-body-secondary">
            <div className="fs-3 mb-2 text-center">Datos de la Entidad</div>
            <label for="legal" className="form-label ">
              Estatus legal
            </label>
            <input
              type="text"
              id="legal"
              className="form-control mb-4"
              placeholder=""
              onChange={(e) => setLegal_status(e.target.value)}
              value={legal_status}
              required
            />
            <label for="pais" className="form-label">
              País
            </label>
            <input
              type="text"
              id="pais"
              className="form-control mb-4"
              placeholder=""
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              required
            />
            <label for="ano" className="form-label">
              Año de fundación
            </label>
            <input
              type="text"
              id="ano"
              className="form-control mb-4"
              placeholder="yy/mm/dd"
              onChange={(e) => setFoundaion_year(e.target.value)}
              value={foundaion_year}
              required
            />
            <label for="nit" className="form-label">
              NIT
            </label>
            <input
              type="text"
              id="nit"
              className="form-control mb-4"
              placeholder=""
              onChange={(e) => setRegistry_nit(e.target.value)}
              value={registry_nit}
              required
            />
          </div>
          <div className="d-grid gap-2 col-3 mx-auto">
            {validation ? (
              <button
                type="submit"
                className="btn btn-warning m-3"
                onClick={(e) => handleUpdate(e)}
              >
                Modificar
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-success m-3"
                onClick={(e) => handleAdd(e)}
              >
                Guardar
              </button>
            )}
          </div>
        </form>
      </div>
      <Data datos={datos} confirm={confirm} activeEdit={activeEdit} />
    </>
  );
}

export default Form;
