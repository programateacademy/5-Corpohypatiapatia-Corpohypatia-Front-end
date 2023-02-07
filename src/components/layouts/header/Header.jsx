

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="" alt="corpohypatia" />
                    </a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0 p-3">
                        <form className="d-flex ms-auto" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                            <li className="nav-item ms-auto">
                                <a className="nav-link active" aria-current="page" href="/">Iniciar sesión</a>
                            </li>
                            <li className="nav-item ms-auto">
                                <a className="nav-link" href="/">Registrarse</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;