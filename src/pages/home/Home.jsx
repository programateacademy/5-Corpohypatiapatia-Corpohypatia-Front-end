import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { getHome } from "../../service/api";

import "./home.css";

function Home() {
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const signOff = (ruta) => {
    localStorage.removeItem("token");
    navigate(ruta);
  };

  async function fetchData(token) {
    if (token) {
      const res = await getHome(token);
      setMessage(res.data.message);
    }
  }

  useEffect(() => {
    fetchData(token);
  }, [token]);

  return (
    <div className="container">
      <div className="home">
        <h3>{message ? `${message}` : "No estas autorizado!"}</h3>
        <button onClick={() => signOff("/login")}>
          {!message ? "Iniciar Sesión" : "Cerrar Sesión"}
        </button>
      </div>
    </div>
  );
}

export default Home;
