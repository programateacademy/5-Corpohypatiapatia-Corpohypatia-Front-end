import './cardProject.css'

function Cardproject (props){

    const { project_title, imagePath } = props.item;

    return(
        <article className='card-project'>
            <img src={imagePath} alt="Imagen de proyecto"/> 
            <div className="pentagon">
                <h1 className='title'>{project_title}</h1>
                <div className='graphic'>
                <p>58%</p>
            </div>
            </div>
            
        </article>
    );
}

export default Cardproject;