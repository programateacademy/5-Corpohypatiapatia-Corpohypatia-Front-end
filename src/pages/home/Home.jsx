// import image for carousel
import graphic from '../../assets/img/grafico.png'
import './home.css'

function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="row p-5">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-2">
                        <p className="fs-1 mt-5">BIENVENID@S</p>
                        <p className=' mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque earum repudiandae velit ipsa molestiae perferendis quae voluptate, adipisci et porro qui unde ad? Asperiores, accusamus tenetur obcaecati eos velit delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime totam a? Laborum quasi nulla corporis alias ducimus. Ad obcaecati cupiditate ab enim molestiae unde quibusdam eligendi dignissimos tenetur. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel aut consequatur beatae officia vitae veniam, eos recusandae sequi autem quibusdam dolore asperiores? Sequi, aspernatur odit? Dolorem laboriosam cupiditate ad?</p>
                        {/* buttons */}
                        <div className="mt-5">
                            <button type="button" class="btn btn-outline-secondary btn-lg">Continuar</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                        <div className="graphic">
                            <img src={graphic} alt="graphic piece" width="700" className="rounded float-end " />
                        </div>
                    </div>
                </div>
            </div>
            {/* text */}
            <div className="container">
                <div className="row">
                    <p className="fs-3 text-center mt-5">¿Quiénes Somos?</p>
                    <p className="">La Corporación para la Equidad, la Democracia y el Buen Vivir - CORPORACIÓN HYPATIA, es una organización no gubernamental, sin ánimo de lucro, con sede en Bucaramanga (Santander) - Colombia.
                        Su objeto social es la promoción y defensa integral de los derechos humanos, especialmente los derechos de las mujeres, la búsqueda de la equidad social y de género, el fortalecimiento de la gobernabilidad y de una sociedad democrática, contribuyendo a la construcción de una Cultura de paz y a la prevención y erradicación de toda forma de discriminación y vulneración de derechos por razones de sexo, etnia, orientación sexual, edad y condición socioeconómica.
                    </p>
                    <p className="fs-3 text-center mt-3">Misión</p>
                    <p>
                        Somos una organización que promueve y defiende los derechos humanos con enfoques diferenciales, en la búsqueda de la igualdad social y de género, la construcción de una sociedad democrática, pacífica y respetuosa de las diferencias, que garantice el buen vivir de hombres y mujeres en su
                        diversidad.
                    </p>
                    <p className="fs-3 text-center mt-3">Visión</p>
                    <p>
                        La Corporación Hypatia es reconocida por su capacidad de influir en los derechos humanos, la democracia, la equidad y el buen vivir de hombres y mujeres en su diversidad.
                    </p>
                </div>
            </div>

        </>
    );
}

export default Home;