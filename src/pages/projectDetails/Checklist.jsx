import Task from "./Task";

import './checklist.css'

function Checklist() {
    const tasks = [
        {   
            result:"Se afianza la apropiación colectiva acerca del panorama de riesgos situacional y Línea de base (LdB) sobre capacidades y necesidades de bienestar emocional de NN de 5 a 12 años en cinco (5) barrios de la Comuna 1 de Bucaramanga.",
            indicators:[
                "250 niñas y niñas de 5 a 12 años que auto reconocen sus emociones, necesidades y capacidades",
                "5 barrios de Bucaramanga de la Comuna 1 cuentan con un mapa de sueños que identifica riesgos y vulnerabilidades a niñas y niños de 5 a 12 años con enfoques diferenciales",
                "5 barrios de Bucaramanga de la Comuna 1 identifican factores protectores institucionales y comunitarios para la población diana"
            ],
            title: "Actividades Resultado 1",
            subtasks: [
                "Realización de encuentros psicosociales “Sintiendo la vida” con población diana para análisis situacional desde enfoque participativo y diferenciales.",
                "Cartografía social Mapeando Sueños y Reconociendo aliados/as con población diana, para identificación de riesgos y vulnerabilidades, incorporando enfoques diferenciales",
                "Diálogos Sociales con actores estratégicos orientados a sensibilizar sobre los resultados diagnósticos e incentivar acuerdos de articulación estratégica con actores sociales e institucionales."
            ],
        },
        {
            result:"La población de NN reconoce e incorpora estrategias para la resiliencia, el control de impulsos y afrontamiento de emociones negativas.",
            indicators: [
                "250 niñas y niños participan activa y comprometidamente en la gestión de estrategias de bienestar emocional",
                "250 niñas y niños que apropian mecanismos de gestión resiliente de sus emociones",
            ],
            title: "Actividades Resultado 2",
            subtasks: [
                "Realización de sesiones de reconocimiento mutuo, establecimiento de redes de confianza y encuadre participativo del plan de educación emocional y resiliencia para NN.",
                "Implementación de la estrategia lúdica senti-pensante de cuidado emocional, que incorpora técnicas participativas centradas en el arte, el juego y la lúdica, con NN",
                "Implementación de estrategia sanar con ritmo y movimiento, para el desarrollo y fortalecimiento de capacidades de resiliencia de NN y la protección frente al riesgo de violencias.",
                "Desarrollo de laboratorios creativos de participación de NN y festivalito artístico para visibilizar estrategias de comunidad protectora, identificar oferta institucional y enganche de oportunidades locales.",
                "Diseño e implementación de herramienta de monitoreo y seguimiento al cambio en bienestar emocional de población diana."
            ],
        },
        {
            title: "Actividades Resultado 3",
            subtasks: [],
        },
    ];


    const progressElements = document.querySelectorAll(".percentage");

    const progressValues = [];

    progressElements.forEach((element) => {
        const progressValue = parseInt(element.textContent.trim());
        if (!isNaN(progressValue)) {
            progressValues.push(progressValue);
        }
    });

    console.log(progressValues)

    const total = progressValues.reduce((sum, value) => sum + value, 0);
    const percentageGeneral = (total / (progressValues.length * 100)).toFixed(2);

    return (
        <>
            <div>
                Progreso general: {percentageGeneral}
            </div>
            <div>
                {tasks.map((task, index) => (
                    <><h3>Resultado {index +1}</h3>
                    <Task key={index} title={task.title} subtasks={task.subtasks} indicators={task.indicators} result={task.result} /></>
                ))}
            </div>
        </>
    );
}

export default Checklist;