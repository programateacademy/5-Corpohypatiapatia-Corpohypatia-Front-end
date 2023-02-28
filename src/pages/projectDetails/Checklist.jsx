import Task from "./Task";

import './checklist.css'

function Checklist() {
    const tasks = [
        {
            title: "Actividades Resultado 1",
            subtasks: [
                "Realización de encuentros psicosociales “Sintiendo la vida” con población diana para análisis situacional desde enfoque participativo y diferenciales.",
                "Cartografía social Mapeando Sueños y Reconociendo aliados/as con población diana, para identificación de riesgos y vulnerabilidades, incorporando enfoques diferenciales",
                "Diálogos Sociales con actores estratégicos orientados a sensibilizar sobre los resultados diagnósticos e incentivar acuerdos de articulación estratégica con actores sociales e institucionales."
            ],
        },
        {
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

    // const totalProgress = progressValues.reduce((acc, value) => acc + value, 0);
    // const averageProgress = totalProgress / progressValues.length;
    // const overallPercentage = `${averageProgress}%`;

    // console.log(overallPercentage);


    // const progressElements = document.querySelectorAll('.percentage');
    // console.log(progressElements)

    // const progressValues = Array.from(progressElements).map(element => parseInt(element.getAttribute('data-progress')));
    // console.log(progressValues)

    // const totalProgress = progressValues.reduce((accumulator, currentValue) => accumulator + currentValue) / progressValues.length;


    return (
        <>
            <div>
                Progreso general: {percentageGeneral}
            </div>
            <div>
                {tasks.map((task, index) => (
                    <Task key={index} title={task.title} subtasks={task.subtasks} />
                ))}
            </div>
        </>
    );
}

export default Checklist;