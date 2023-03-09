import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { addProject } from "../../service/api"
import { BsFolderX, BsFolderPlus, BsTrashFill } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { Stepper, Step, StepLabel, Button, Typography, Box, FormControl as Group, TextField, styled } from '@mui/material';


const FormControl = styled(Group)`
    margin: 10px 0;
`;

const FormControlHide = styled(Group)`
    display:none;
`;

const steps = ['Datos del proyecto', 'Relevancia', 'Marco Lógico', 'Resultados', 'Experiencia y sostenibilidad'];

const defaultValue = {
    project_title: "",
    project_location: "",
    project_duration: "",
    project_budget: "",
    intervention_sector: "",
    imagePath: "https://i.postimg.cc/vZrwtYdf/20151128-152805-EMPRENDE-NI-OS-NI-AS.jpg",
    problematic_summary: "",
    beneficiaries: "",
    executive_summary: "",
    alignment: "",
    methodology_summary: "",
    general_objetive: "",
    specific_objectives: [],
    results: [],
    project_percentage: 0,
    experience: "",
    sustainability: "",
    exit_strategy: "",
    enabled: true,
};

function StepperComponent() {

    //Constant containing forms for each step
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
                                    name="image"
                                    type="file"


                                />
                            </FormControl>

                            <FormControlHide>
                                <TextField
                                    id="outlined-basic"
                                    // label="Dirección de imagen"
                                    variant="outlined"
                                    name="imagePath"
                                    type="string"
                                    value="https://i.postimg.cc/vZrwtYdf/20151128-152805-EMPRENDE-NI-OS-NI-AS.jpg"
                                    onChange={(e) => onValueChange(e)}
                                />
                            </FormControlHide>
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
                            <div className="specificObjective">
                                {objectives.map((objective, index) => (
                                    <div key={index} className="field" >
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={1}
                                            label={`Objetivo específico ${index + 1}`}
                                            name="general_objetive"
                                            value={objective}
                                            className="textField"
                                            onChange={(e) => handleObjectiveChange(index, e.target.value)}
                                        />
                                        <Button variant="contained" color="error" onClick={() => handleDeleteObjective(index)}
                                            disabled={objectives.length === 1}><BsTrashFill className='icon-trash' /></Button>
                                    </div>
                                ))}
                                <Button onClick={handleAddObjective} type="button" color="secondary" variant="contained">Agregar objetivo</Button>
                            </div>
                        </form>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <form className="add-form results-form">
                            {results.map((result, resultIndex) => (
                                <div key={resultIndex} className="results">
                                    <div className='result-title'><h2>Resultado {resultIndex + 1}</h2>
                                        <Button variant="outlined" color="error" onClick={() => handleRemoveResult(resultIndex)} disabled={results.length === 1}>Eliminar Resultado</Button></div>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={2}
                                        className="textField-result"
                                        label={`Descripción Resultado ${resultIndex + 1}`}
                                        name="result"
                                        value={result.result}
                                        onChange={(e) => handleResultChange(resultIndex, e)}
                                    />
                                    <div className='activities'>
                                        <h4>Actividades de resultado</h4>
                                        {result.activities.map((activity, activityIndex) => (
                                            <div key={activityIndex} className="field">
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    multiline
                                                    rows={2}
                                                    label={`Actividad ${activityIndex + 1}`}
                                                    name="description"
                                                    value={activity.description}
                                                    onChange={(e) => handleActivityChange(e, activityIndex, resultIndex)}
                                                    className="textField"
                                                />
                                                <input type="checkbox" checked={activity.completed} name="completed" onChange={(e) => handleActivityChange(e, activityIndex, resultIndex)} />

                                                <Button variant="contained" color="error" onClick={() => handleRemoveActivity(resultIndex, activityIndex)} disabled={results[resultIndex].activities.length === 1}><BsTrashFill className='icon-trash' /></Button>

                                            </div>
                                        ))}

                                        <Button type="button" color="secondary" variant="contained" onClick={() => handleAddActivity(resultIndex)}>
                                            Agregar actividad
                                        </Button>
                                    </div>

                                    <div className='indicators'>
                                        <h4>Indicadores</h4>
                                        {result.indicators.map((indicator, indicatorIndex) => (
                                            <div className="field" key={indicatorIndex}>
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    multiline
                                                    rows={2}
                                                    className="textField"
                                                    label={`Indicador ${indicatorIndex + 1}`}
                                                    name="exit_strategy"
                                                    value={indicator}
                                                    onChange={(e) => handleIndicatorChange(resultIndex, indicatorIndex, e)}
                                                />
                                                <Button variant="contained" color="error" onClick={() => handleRemoveIndicator(resultIndex, indicatorIndex)} disabled={results[resultIndex].indicators.length === 1}><BsTrashFill className='icon-trash' /></Button>
                                            </div>
                                        ))}
                                        <Button type="button" color="secondary" variant="contained" onClick={() => handleAddIndicator(resultIndex)}>
                                            Agregar indicador
                                        </Button>
                                    </div>

                                </div>
                            ))}
                            <Button type="button" onClick={handleAddResult}>
                                Agregar resultado
                            </Button>

                        </form>
                    </div>
                );
            case 4:
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
            default:
                return "Paso desconocido";
        }
    };


    //states
    const [project, setProject] = useState(defaultValue);
    const [objectives, setObjectives] = useState([""]);
    const [activeStep, setActiveStep] = useState(0);
    const [results, setResults] = useState([{ percentage: 0, activities: [], indicators: [] }]);

    //variable that stores the navigation function provided by the hook
    const navigate = useNavigate();

    //function that updates the state of the form whenever a change occurs in a form element
    const onValueChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    //function that adds project details to a database
    const addProjectDetails = async () => {
        await addProject(project);
        navigate('/projects');
        setActiveStep(0);
        setProject(defaultValue)
        localStorage.removeItem('activeStep');
    }

    //Function to cancel project creation
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
    };


    /*================================================
        Functions for array of specific objectives
    ==================================================*/

    //Function to change value in input field
    const handleObjectiveChange = (index, value) => {
        const newObjectives = [...objectives];
        newObjectives[index] = value;

        setObjectives(newObjectives);
    };

    //Function to add specific array specific objectives
    const handleAddObjective = () => {
        setObjectives([...objectives, ""]);
    };

    //Function to remove specific array specific objectives
    const handleDeleteObjective = (index) => {
        const newObjectives = [...objectives];
        newObjectives.splice(index, 1);

        setObjectives(newObjectives);
    };

    //Effect for value assignment
    useEffect(() => {
        project.specific_objectives = objectives
    }, [objectives])


    /*================================================
            Functions to add field data results
    ==================================================*/

    //Function to add description of results
    const handleAddResult = () => {
        setResults([...results, { percentage: 0, activities: [], indicators: [] }]);
    };

    //Function to change description of results
    const handleResultChange = (index, e) => {
        const newResults = [...results];
        newResults[index].result = e.target.value;
        setResults(newResults);
    };

    //Function to remove description of results
    const handleRemoveResult = (index) => {
        if (results.length === 1) {
            return;
        }
        const newResults = [...results];
        newResults.splice(index, 1);
        setResults(newResults);
    };

    //------------activities-----------------------

    //Functions to change activities
    const handleActivityChange = (event, index, resultIndex) => {
        const newResults = [...results];
        const newActivities = [...newResults[resultIndex].activities];
        newActivities[index][event.target.name] = event.target.value;
        newResults[resultIndex].activities = newActivities;
        setResults(newResults);
    };

    //Functions to add activities
    const handleAddActivity = (resultIndex) => {
        const newResults = [...results];
        const newActivities = [...newResults[resultIndex].activities, { description: '', completed: false }];
        newResults[resultIndex].activities = newActivities;
        setResults(newResults);
    };

    //Functions to remove activities
    const handleRemoveActivity = (resultIndex, index) => {
        if (results[resultIndex].activities.length === 1) {
            return;
        }
        const newResults = [...results];
        const newActivities = [...newResults[resultIndex].activities];
        newActivities.splice(index, 1);
        newResults[resultIndex].activities = newActivities;
        setResults(newResults);
    };

    //------------indicators-----------------------

    //Function to change indicators
    const handleIndicatorChange = (resultIndex, indicatorIndex, e) => {
        const newResults = [...results];
        newResults[resultIndex].indicators[indicatorIndex] = e.target.value;
        setResults(newResults);
    };

    //Function to add indicators
    const handleAddIndicator = (index) => {
        const newResults = [...results];
        newResults[index].indicators.push('');
        setResults(newResults);
    };

    //Function to remove indicators
    const handleRemoveIndicator = (resultIndex, index) => {
        if (results[resultIndex].indicators.length === 1) {
            return;
        }
        const newResults = [...results];
        const newIndicators = [...newResults[resultIndex].indicators];
        newIndicators.splice(index, 1);
        newResults[resultIndex].indicators = newIndicators;
        setResults(newResults);
    };


    useEffect(() => {
        project.results = results
    }, [results])


    /*================================================
            Functions for steps buttons
    ==================================================*/
    useEffect(() => {
        const storedStep = localStorage.getItem('activeStep');
        if (storedStep) {
            setActiveStep(parseInt(storedStep));
        }
    }, []);

    //Function for the next step button
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        localStorage.setItem('activeStep', activeStep + 1);
    };

    //Function for the previous step button
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        localStorage.setItem('activeStep', activeStep - 1);
    };

    //Function to evaluate the button to return
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