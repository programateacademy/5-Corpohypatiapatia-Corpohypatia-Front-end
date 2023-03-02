import CircularGraphic from '../graphic/CircularGraphic';
import './cardProjects.css'

function CardProjects(props) {

    const { project_title, project_duration, project_budget, imagePath, project_percentage } = props.item;

    const value = project_percentage

    const data = {
        labels: ['Valor', 'Resto'],
        datasets: [
            {
                data: [value, 100 - value],
                backgroundColor: ['#36A2EB', '#B8DAF1'],
            },
        ],
    };


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        borderColor: 'transparent',
    };


    return (
        <article className='card-projects'>
            <div className='container-image'>
                <img src={imagePath} alt="Imagen de proyecto" />
            </div>
            <div className="circular-graphic">
                <CircularGraphic data={data} options={options} />
                <h3>{value}%</h3>
            </div>
            <h2 className='title'>{project_title}</h2>
            <div className='specifications'>
                <div className='specification'>
                    <span>Duración</span>
                    <p>{project_duration}</p>
                </div>
                <div>
                    <span>Presupuesto</span>
                    <p>{project_budget}</p>
                </div>
            </div>
        </article>
    );
}

export default CardProjects;