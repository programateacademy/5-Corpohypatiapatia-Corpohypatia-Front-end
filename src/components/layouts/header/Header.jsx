import logo from "../../../assets/img/logo.jpg"
import React, {useState, useEffect} from 'react';

function Header() {
    // hooks
    const [info, setInfo] = useState([])
    const [search, setSearch] = useState("")

    //api or db
    const URL = "https://jsonplaceholder.typicode.com/users"

    //datos a traer
    const dataSheet = async () => {
        const res = await fetch(URL)
        const data = await res.json()
        setInfo(data);
        console.log(data);
    }
    
    //function search
    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    //filter
    let result = []
    if(!search){
        result = info
    }else{
        result = info.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
    }

    useEffect(() =>{
        dataSheet();
    },[]);

    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand p-0" href="/">
                        <img src={logo} width="200" alt="corpohypatia" />
                    </a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0 p-3">
                        <form className="d-flex ms-auto" role="search">
                            <input value={search} onChange={searcher} className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                            <li className="nav-item ms-auto">
                                <a className="nav-link active" aria-current="page" href="/login">Iniciar sesión</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;