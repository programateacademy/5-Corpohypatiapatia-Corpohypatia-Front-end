

function Footer() {
    return (
        <>
            <footer className="bg-light text-muted ">
                <div className="row p-5">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5 ">
                        <h4 className="text-dark">ABOUT</h4>
                        <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae repudiandae veniam quia, animi dignissimos dolor illum maiores et esse, mollitia quasi doloribus inventore iusto consequatur dolorem obcaecati nihil sed dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis sint debitis ad harum doloribus corporis laborum recusandae laudantium, cum et, consequuntur, veniam vitae eos maxime. Magnam magni quia sit.</p>
                    </div>
                    <div className="col-sm-8 col-md-3 col-lg-3 col-xl-3 px-5">
                        <h4 className="text-dark">SERVICE</h4>
                        <div className="row">
                            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 p-0">
                                <svg className="mb-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                            </div>
                            <div className="col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                <p>Bucaramanga <br />Floridablanca <br />Girón <br />Piedecuesta</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 p-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            </div>
                            <div className="col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                <p>+57 301 123 1234</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 p-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                            </div>
                            <div className="col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                <p>correo@ejemplo.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4  col-md-3 col-lg-3 col-xl-3 px-5">
                        <h4 className="text-dark">SOCIAL</h4>
                        <p>Facebook <br />Twitter <br />Instagram</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;