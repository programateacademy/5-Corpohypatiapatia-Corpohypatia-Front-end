import CircularGraphic from '../graphic/CircularGraphic';
import './cardProjects.css'

function CardProjects (props){

    const data = {
        labels: ['Valor', 'Resto'],
        datasets: [
            {
                data: [15, 100 - 15],
                backgroundColor: ['#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
            },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    const { project_title, project_duration, project_budget, imagePath } = props.item;

    return(
        <article className='card-projects'>
            <div className='container-image'>
                <img src={imagePath} alt="Imagen de proyecto"/>
            </div> 
            <div className="circular-graphic">
                <CircularGraphic data={data} options={options}/>
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