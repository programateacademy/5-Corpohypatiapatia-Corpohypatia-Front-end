import './cardProject.css'

function Cardproject (props){

    const { name, image } = props.item;

    return(
        <article className='card-project'>
            <img src={image} alt="Imagen de proyecto"/> 
            <div className="pentagon">
                <h1>{name}</h1>
            </div>
        </article>
    );
}

export default Cardproject;