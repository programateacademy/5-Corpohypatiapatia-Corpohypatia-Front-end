import './cardProject.css'

function Cardproject (props){

    const { name, image } = props.item;

    return(
        <article className='card-project'>
            <img src={image} alt="Imagen de proyecto"/> 
            <div className="pentagon">
                <h1>{name}</h1>
                <div className='graphic'>
                <p>58%</p>
            </div>
            </div>
            
        </article>
    );
}

export default Cardproject;