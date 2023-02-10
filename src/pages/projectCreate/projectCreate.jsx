import { useState } from "react";
import { useNavigate } from "react-router-dom";


//import icon from react icons
import { MdNoteAdd } from 'react-icons/md'

import './projectCreate.css'

//import components from material library
import {
    FormControl,
    Input,
    InputLabel,
    styled,
} from "@mui/material";

//import function from services api
import { addProject } from "../../service/api";

//styled components - emotion library
const FormSpan = styled(FormControl)`
    grid-column: span 2;
`;

const ButtonAdd = styled(FormControl)`
    margin: 20px 0;
    grid-column: span 2;
`;

//initial values for each of the properties that correspond to the inputs
const defaultValue = {
    project_title:"",
    project_location:"",
    project_duration:"",
    project_budget:"",
    intervention_sector:"",
    imagePath:"",
    problematic_summary:"",
    beneficiaries:"",
    executive_summary:"",
    alignment:"",
    methodology_summary:"",
    general_objetive:"",
    specific_objectives:"",
    experience:"",
    sustainability:"",
    exit_strategy:""
};

const ProjectCreate = () => {
    //destructuring of variable with an initial default value
    const [project, setProject] = useState(defaultValue);

    //variable that stores the navigation function provided by the hook
    const navigate = useNavigate();

    //function that updates the state of the form whenever a change occurs in a form element
    const onValueChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    //function that adds movie details to a database
    const addProjectDetails = async () => {
        await addProject(project);
        // navigate('/');
    }

    return (
        <section className="container_all">
            <section className="container_form">

                <form className="add-form">
                    <FormControl>
                        <InputLabel>Título</InputLabel>
                        {/* executes event handling function whenever the value of the input field changes */}
                        <Input onChange={(e) => onValueChange(e)} name="project_title" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Ubicación geográfica</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="project_location" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Duración del proyecto</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="project_duration"/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Presupuesto</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="project_budget"/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Sector de intervención</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="intervention_sector"/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Dirección de imagen</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="imagePath"/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Resumen de la problemática que se quiere abordar</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="problematic_summary"/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Beneficiarios</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="beneficiaries"/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Resumen ejecutivo del proyecto</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="executive_summary"/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>alineación del proyecto con políticas públicas y prioridades</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="alignment"/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Resumen de la problemática que se quiere abordar</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="methodology_summary" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Objetivo general</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="general_objetive" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Objetivos especificos</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="specific_objectives" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Experiencia y capacidad</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="experience" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>elementos que aseguren la sostenibilidad económica, social y ambiental del Proyecto</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="sustainability" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Estrategia de salida al finalizar el proyecto</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="exit_strategy" />
                    </FormControl>

                    <ButtonAdd>
                        <button className="btn" onClick={() => addProjectDetails()}><MdNoteAdd className="icon"/>AGREGAR PELICULA</button>
                    </ButtonAdd>

                </form>
            </section>
        </section>
    );
};

export default ProjectCreate;