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

    const { project_title, imagePath } = props.item;

    return(
        <article className='card-projects'>
            <div className='container-image'>
                <img src={imagePath} alt="Imagen de proyecto"/>
            </div> 
            <div className="circular-graphic">
                <CircularGraphic data={data} options={options}/>
            </div>
            <p>{project_title}</p>
        </article>
    );
}

export default CardProjects;