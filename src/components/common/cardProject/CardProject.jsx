import './cardProject.css'
import CircularGraphic from '../graphic/CircularGraphic';

function Cardproject (props){

    const { project_title, imagePath } = props.item;

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

    return(
        <article className='card-project'>
            <img src={imagePath} alt="Imagen de proyecto"/> 
            <div className="pentagon">
                <h1 className='title'>{project_title}</h1>
                {/* <div className='circular-graphic'>
                    <CircularGraphic data={data} options={options}/>
                </div> */}
                <div className='graphic'>
                <p>58%</p>
                </div>
            </div>
            
        </article>
    );
}

export default Cardproject;