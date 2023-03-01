import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../projectCreate/projectCreate.css'
import Swal from 'sweetalert2';

//import components from material library
import {
    Button,  FormControl as Group, TextField, styled, 
} from "@mui/material";

//import functions from services api
import { editProject, getProject } from "../../service/api";

//styled components - emotion library
const FormControl = styled(Group)`
    margin: 10px 0;
`;

//initial values for each of the properties that correspond to the inputs
const defaultValue = {
    project_title: "",
    project_location: "",
    project_duration: "",
    project_budget: "",
    intervention_sector: "",
    imagePath: "",
    problematic_summary: "",
    beneficiaries: "",
    executive_summary: "",
    alignment: "",
    methodology_summary: "",
    general_objetive: "",
    specific_objectives: [],
    experience: "",
    sustainability: "",
    exit_strategy: ""
};

const ProjectEdit = () => {
    //destructuring of variable with an initial default value
    const [project, setProject] = useState(defaultValue);

    //variable that stores the navigation function provided by the hook
    // const navigate = useNavigate();

    //hook that accesses the parameters of the current route in the application (in this case, id)
    const { id } = useParams();

    //component rendering and function execution
    useEffect(() => {
        loadProjectDetails();
    }, []);

    //Get movie data from database and update application status
    const loadProjectDetails = async () => {
        const response = await getProject(id);
        setProject(response.data);
    };

    //event handling function to update object state
    const onValueChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    //Function for editing movie data
    const editProjectDetails = async () => {
        Swal.fire({
            title: '¿Estás seguro de realizar estos cambios?',
            text: `Estás cambiando la información del proyecto: ${project.project_title}`,
            icon: 'warning',
            showDenyButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, realizar cambios',
            denyButtonText: 'No, cancelar edición'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Los cambios han sido guardados', '', 'success')
                window.history.back();
                editProject(project, id);
            }
            else if (result.isDenied) {
                Swal.fire('Los cambios no han sido guardados', '', 'info')
                window.history.back();
            }
        })
        // navigate("/admin-projects");
        // await editProject(project, id);
    };

    const cancelEdit = () => {
        Swal.fire({
            title: '¿Cancelar edición?',
            showDenyButton: true,
            confirmButtonText: 'Si, cancelar',
            denyButtonText: `No, seguir editando`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Los cambios no han sido guardados', '', 'info')
                window.history.back();
            }
        })
    }

    return (
        <>
            <div className="card-foto card-edit h-25 w-75 mx-auto">
                <img className="imagen" src={project.imagePath} alt="Card cap" />
                <div className="data-title">
                    <p className="title-edit">Editar Proyecto | {project.project_title}</p>
                    <div className="btns-actions">
                        <Button variant="outlined" color="error" onClick={() => cancelEdit()}> CANCELAR </Button>
                        <Button variant="contained" color="primary" onClick={() => editProjectDetails()}>
                            GUARDAR CAMBIOS
                        </Button>
                    </div>
                </div>
            </div >

            {/* <div class="card w-75 mx-auto">
                <div class="card-body">
                    <div className="contenedor-fechas">
                        Editar projecto | {project.project_title}
                        <div className="fechas">
                            <p className="bold">Duración:</p>
                            <p>{project.project_duration}</p>
                        </div>
                        <div className="fechas">
                            <p className="bold">Presupuesto:</p>
                            <p>{project.project_budget}</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="card w-75 mx-auto">
                <div className="card-header">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link active"
                                id="projectData-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#projectData"
                                type="button"
                                role="tab"
                                aria-controls="projectData"
                                aria-selected="true"
                            >
                                Datos del proyecto
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link"
                                id="relevance-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#relevance"
                                type="button"
                                role="tab"
                                aria-controls="relevance"
                                aria-selected="false"
                            >
                                Relevancia
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link"
                                id="logicFrame-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#logicFrame"
                                type="button"
                                role="tab"
                                aria-controls="logicFrame"
                                aria-selected="false"
                            >
                                Marco Lógico
                            </button>
                        </li>

                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link"
                                id="experience&Sustainability-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#experience&Sustainability"
                                type="button"
                                role="tab"
                                aria-controls="experience&Sustainability"
                                aria-selected="false"
                            >
                                Experiencia y sostenibilidad
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div
                            class="tab-pane fade show active"
                            id="projectData"
                            role="tabpanel"
                            aria-labelledby="projectData-tab"
                        >
                            <div className="card-body">
                                <form className="add-form">
                                    <FormControl>
                                        <TextField
                                            id="outlined-basic"
                                            label="Título del proyecto"
                                            variant="outlined"
                                            name="project_title"
                                            value={project.project_title}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            id="outlined-basic"
                                            label="Ubicación geográfica"
                                            variant="outlined"
                                            name="project_location"
                                            value={project.project_location}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            id="outlined-basic"
                                            label="Duración del proyecto"
                                            variant="outlined"
                                            name="project_duration"
                                            value={project.project_duration}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            id="outlined-basic"
                                            label="Presupuesto"
                                            variant="outlined"
                                            name="project_budget"
                                            value={project.project_budget}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={3}
                                            label="Sector de intervención"
                                            name="intervention_sector"
                                            value={project.intervention_sector}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            id="outlined-basic"
                                            label="Dirección de imagen"
                                            variant="outlined"
                                            name="imagePath"
                                            type="text"
                                            value={project.imagePath}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </FormControl>
                                </form>
                            </div>

                        </div>
                        <div
                            class="tab-pane fade"
                            id="relevance"
                            role="tabpanel"
                            aria-labelledby="relevance-tab"
                        >
                            <form className="add-form">
                                <FormControl>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={4}
                                        label="Resumen de la problemática que se quiere abordar"
                                        name="problematic_summary"
                                        value={project.problematic_summary}
                                        onChange={(e) => onValueChange(e)}
                                    />
                                </FormControl>

                                <FormControl>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={4}
                                        label="Beneficiarios"
                                        name="beneficiaries"
                                        value={project.beneficiaries}
                                        onChange={(e) => onValueChange(e)}
                                    />
                                </FormControl>

                                <FormControl>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={4}
                                        label="Resumen ejecutivo del proyecto"
                                        name="executive_summary"
                                        value={project.executive_summary}
                                        onChange={(e) => onValueChange(e)}
                                    />
                                </FormControl>

                                <FormControl>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={4}
                                        label="Alineación del proyecto con políticas públicas y prioridades"
                                        name="alignment"
                                        value={project.alignment}
                                        onChange={(e) => onValueChange(e)}
                                    />
                                </FormControl>
                            </form>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="logicFrame"
                            role="tabpanel"
                            aria-labelledby="logicFrame-tab"
                        ><div className="card-body">
                                <form className="add-form" >
                                    <FormControl>
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={2}
                                            label="Resumen de la problemática que se quiere abordar"
                                            name="methodology_summary"
                                            value={project.methodology_summary}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={2}
                                            label="Objetivo general"
                                            name="general_objetive"
                                            value={project.general_objetive}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </FormControl>

                                    <h3>Objetivos específicos</h3>

                                </form>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="experience&Sustainability"
                            role="tabpanel"
                            aria-labelledby="experience&Sustainability-tab"
                        ><div className="card-body">
                                <form className="add-form">
                                    <FormControl>
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={4}
                                            label="Experiencia y capacidad"
                                            name="experience"
                                            value={project.experience}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={4}
                                            label="Elementos que aseguren sostenibilidad económica, social y ambiental"
                                            name="sustainability"
                                            value={project.sustainability}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={4}
                                            label="Estrategia de salida al finalizar el proyecto"
                                            name="exit_strategy"
                                            value={project.exit_strategy}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </FormControl>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <section className="container_all">
                <section className="container_form">
                    <div className="title">
                        <div className="triangle"></div>
                        <h1>EDITAR PROYECTO - {project.project_title}</h1>
                    </div> */}

            {/* <form className="add-form">
                        <FormControl>
                            <InputLabel>Titulo</InputLabel>
                            {/* executes event handling function whenever the value of the input field changes 
                            <Input onChange={(e) => onValueChange(e)}
                                name="project_title"
                                value={project.project_title}
                            />
                        </FormControl>

                        <FormControl>
                            <InputLabel>Ubicación</InputLabel>
                            <Input onChange={(e) => onValueChange(e)}
                                name="project_location"
                                value={project.project_location}
                            />
                        </FormControl>


                        <InputLabel>Duración</InputLabel>
                        <Input onChange={(e) => onValueChange(e)}
                            name="project_duration"
                            value={project.project_duration}
                        />


                        <FormControl>
                            <InputLabel>Presupuesto</InputLabel>
                            <Input onChange={(e) => onValueChange(e)}
                                name="project_budget"
                                value={project.project_budget}
                            />
                        </FormControl>

                        <div className="btns-actions">
                            <Link to='/all'><button className="btn btn-edit"> CANCELAR </button></Link>
                            <button className="btn" onClick={() => editProjectDetails()}>
                                GUARDAR CAMBIOS
                            </button>
                        </div>

                    </form> */}
            {/* </section>  </section> */}

            {/* <div className="btns-actions">
                <Link to='/admin-projects'><Button variant="outlined" color="error"> CANCELAR </Button></Link>
                <Button variant="contained" color="primary" onClick={() => editProjectDetails()}>
                    GUARDAR CAMBIOS
                </Button>
            </div> */}
        </>
    );
};

export default ProjectEdit;