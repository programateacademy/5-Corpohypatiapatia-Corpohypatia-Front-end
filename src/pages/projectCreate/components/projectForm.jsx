import { useState, useEffect } from 'react';
import { Button, FormControl as Group, TextField, styled } from '@mui/material';
import { BsTrashFill } from 'react-icons/bs'

const FormControl = styled(Group)`
    margin: 10px 0;
`;

export function Step1({ project, onValueChange }) {
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
                        label="Dirección de imagen"
                        variant="outlined"
                        name="imagePath"
                        type="string"
                        value={project.imagePath}
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>
            </form>
        </div>
    );
}


export function Step2({ project, onValueChange }) {
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
    )
}

export function Step3({ project, onValueChange }) {

    /*================================================
        Functions for array of specific objectives
    ==================================================*/
    const [objectives, setObjectives] = useState([""]);

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
    )
}

export function Step4({ project }) {

    /*================================================
            Functions to add field data results
    ==================================================*/

    const [results, setResults] = useState([{ percentage: 0, activities: [], indicators: [] }]);

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
    )
}

export function Step5({ project, onValueChange }) {
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
    )
}

