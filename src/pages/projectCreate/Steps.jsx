import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { addProject } from "../../service/api"
import { BsFolderX, BsFolderPlus, BsTrashFill } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { Stepper, Step, StepLabel, Button, Typography, Box, FormControl as Group, TextField, styled } from '@mui/material';

const FormControl = styled(Group)`
    margin: 10px 0;
`;

const steps = ['Datos del proyecto', 'Relevancia', 'Marco Lógico', 'Experiencia y sostenibilidad', 'Resultados'];

function StepperComponent() {

    const getStepContent = (step) => {

        switch (step) {
            case 0:
                return (
                    <div>
                        <form className="add-form">
                            <FormControl >
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
                                    // label="Dirección de imagen"
                                    variant="outlined"
                                    name="imagePath"
                                    type="file"
                                    value={project.imagePath}
                                    onChange={(e) => onValueChange(e)}
                                />
                            </FormControl>
                        </form>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <form className="add-form">
                            <FormControl>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={2}
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
                                    rows={2}
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
                                    rows={3}
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
                                    rows={3}
                                    label="Alineación del proyecto con políticas públicas y prioridades"
                                    name="alignment"
                                    value={project.alignment}
                                    onChange={(e) => onValueChange(e)}
                                />
                            </FormControl>
                        </form>
                    </div>
                );
            case 2:
                return (
                    <div>
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
                            <FormControl>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={1}
                                    label="Objetivo específico"
                                    type="text"
                                    value={newFeature}
                                    onChange={handleFeatureChange}
                                />
                                
                                <Button 
                                    type="button" 
                                    onClick={handleAddFeature}>
                                        Agregar otro objetivo específico
                                </Button>

                                <ul className='list-objetives'>
                                    {specific_objectives.map((feature, index) => (
                                        <li key={index} className="objetive">
                                            {feature}
                                            <button 
                                                type="button" 
                                                className="bton-trash" 
                                                onClick={() => handleRemoveFeature(index)}>
                                                    <BsTrashFill className='icon-trash'/>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </FormControl>
                        </form>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <form className="add-form">
                            <FormControl>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={2}
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
                                    rows={2}
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
                                    rows={2}
                                    label="Estrategia de salida al finalizar el proyecto"
                                    name="exit_strategy"
                                    value={project.exit_strategy}
                                    onChange={(e) => onValueChange(e)}
                                />
                            </FormControl>
                        </form>
                    </div>
                );
                case 4:
                    return(
                        <div>
                        <form className="add-form">
                            <FormControl>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={2}
                                    label="Resultado"
                                    name="experience"
                                    value={project.experience}
                                    onChange={(e) => onValueChange(e)}
                                />
                            </FormControl>

                            <FormControl>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={2}
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
                                    rows={2}
                                    label="Estrategia de salida al finalizar el proyecto"
                                    name="exit_strategy"
                                    value={project.exit_strategy}
                                    onChange={(e) => onValueChange(e)}
                                />
                            </FormControl>
                        </form>
                    </div>
                    )
            default:
                return "Paso desconocido";
        }
    };

    //specific objetives
    const [specific_objectives, setFeatures] = useState([]);
    const [newFeature, setNewFeature] = useState('');

    const handleFeatureChange = (e) => {
        setNewFeature(e.target.value);
    }

    useEffect(()=>{
        project.specific_objectives = specific_objectives
    },[newFeature])

    const handleAddFeature = () => {
        setFeatures([...specific_objectives, newFeature]);
        setNewFeature('');
    }

    const handleRemoveFeature = (index) => {
        const newFeatures = [...specific_objectives];
        newFeatures.splice(index, 1);
        setFeatures(newFeatures);
    }

    // -----------------------------------------------------------
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

    // const local = (field, value) => {
    //     localStorage.setItem(field, value);
    // };

    //Project add
    const [project, setProject] = useState(defaultValue);

    //variable that stores the navigation function provided by the hook
    const navigate = useNavigate();

    //function that updates the state of the form whenever a change occurs in a form element
    const onValueChange = (e) => {
        // local(e.target.name, e.target.value)
        setProject({ ...project, [e.target.name]: e.target.value });
        // console.log(e.target.name, e.target.value)

    };

    //function that adds project details to a database
    const addProjectDetails = async () => {
        await addProject(project);
        navigate('/admin-projects');
    }

    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const storedStep = localStorage.getItem('activeStep');
        if (storedStep) {
            setActiveStep(parseInt(storedStep));
        }
    }, []);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        localStorage.setItem('activeStep', activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        localStorage.setItem('activeStep', activeStep - 1);
    };

    const handleReset = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `Estás cancelando la creación del proyecto ${project.project_title}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si, cancelar creación',
            cancelButtonText: 'No, seguir editando'
        }).then((result) => {
            if (result.isConfirmed) {
                setActiveStep(0);
                setProject(defaultValue)
                localStorage.removeItem('activeStep');
            }
        })
        // setActiveStep(0);
        // localStorage.removeItem('activeStep');
    };

    const buttonPage = () => {
        if (activeStep === steps.length - 1) {
            return (
                <Button variant="contained" className="btn-create" onClick={() => addProjectDetails()}>
                    <BsFolderPlus className="step-icon" />Crear proyecto
                </Button>
            );
        }
        else {
            return (
                <Button variant="contained" color="primary" onClick={handleNext}>
                    Siguiente
                </Button>
            );
        }

    }

    return (
        <div className='step'>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box my={3} className="step-content">
                <Typography >{getStepContent(activeStep)}</Typography>
            </Box>
            <div className='buttons'>
                <Button variant="outlined" color="error" onClick={handleReset} >
                    <BsFolderX className="step-icon icon-delete" />Cancelar
                </Button>
                <div className='buttons-create'>
                    <Button disabled={activeStep === 0} onClick={handleBack} >
                        Anterior
                    </Button>
                    {buttonPage()}
                </div>
            </div>
        </div>
    );
}

export default StepperComponent;