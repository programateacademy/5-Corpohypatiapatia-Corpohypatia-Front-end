import React from "react";

function Loader() {
    return (
        <>
            <div id="container-loader">
                <label className="loading-title">
                    Cargando información de proyecto...
                </label>
                <span className="loading-circle sp1">
                    <span className="loading-circle sp2">
                        <span className="loading-circle sp3"></span>
                    </span>
                </span>
            </div>
        </>
    );
}

export default Loader