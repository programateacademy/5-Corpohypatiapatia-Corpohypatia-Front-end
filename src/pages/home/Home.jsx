import FotHypa from '../../assets/img/Fot-Hypa.jpg'
import FotHypatia from '../../assets/img/Fot-Hypatia.jpg'
import Hypatia from '../../assets/img/Hypatia.jpg'
import './home.css'

function Home() {
    return (
        <>
            <p className="fs-1 text-uppercase text-center">corpohypatia</p>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={FotHypa} className="d-block w-100 " alt="ggg" />
                    </div>
                    <div className="carousel-item">
                        <img src={FotHypatia} className="d-block w-100" alt="rrr" />
                    </div>
                    <div className="carousel-item">
                        <img src={Hypatia} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Home;