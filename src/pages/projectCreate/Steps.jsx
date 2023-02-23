import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { addProject } from "../../service/api"
import { BsFolderX, BsFolderPlus } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { Stepper, Step, StepLabel, Button, Typography, Box, FormControl as Group, TextField, styled } from '@mui/material';

const FormControl = styled(Group)`
    margin:10px 0;
`;

const steps = ['Datos del proyecto', 'Relevancia', 'Marco Lógico', 'Experiencia y sostenibilidad'];

function StepperComponent() {

    const getStepContent = (step) => {

        switch (step) {
            case 0:
                return (
                    <div>
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
                                    value={project.imagePath}
                                    // value="https://i.postimg.cc/c4BYckQ7/proyecto.jpg"
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
                        <form className="add-form" onSubmit={handleSubmit}>
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

                            {/* <FormControl>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={1}
                                    label="Objetivo específico"
                                    name="specific_objectives"
                                    onChange={(e) => onValueChange(e)}
                                />
                            </FormControl> */}

                            <FormControl>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={1}
                                    label="Objetivo específico"
                                    name="specific_objective"
                                    type="text"
                                    value={newData}
                                    onChange={(event) => setNewData(event.target.value)}
                                />
                            </FormControl>

                            <Button type="submit">Agregar otro objetivo específico</Button>

                            <ul>
                                {data.map((dato, index) => (
                                    <li key={index}>{dato}</li>
                                ))}
                            </ul>
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
            default:
                return "Paso desconocido";
        }
    };

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
        specific_objectives: "",
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

    const [data, setData] = useState([]);

    const addData = (dato) => {
        setData([...data, dato]);
    };

    const [newData, setNewData] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addData(newData);
        setNewData("");
    };

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
            cancelButtonText:'No, seguir editando'
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
            <Box my={3}>
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
                    {/* {activeStep === steps.length - 1 ? (
                    <Button variant="contained" color="primary" onClick={handleReset} >
                        Reset   
                    </Button>
                ) : (
                    buttonPage()
                )} */}
                </div>
            </div>
        </div>
    );
}

export default StepperComponent;

// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { addProject } from "../../service/api"
// import { MdNoteAdd } from 'react-icons/md'
// import {
//     Stepper,
//     Step,
//     StepLabel,
//     Button,
//     Typography,
//     TextField,
//     FormControl,
// } from "@mui/material";

// const steps = ['Datos del proyecto', 'Relevancia', 'Marco Lógico', 'Experiencia y sostenibilidad'];

// const StepperWithContent = () => {

//     const getStepContent = (stepIndex) => {

//         switch (stepIndex) {
//             case 0:
//                 return (
//                     <div>
//                         <form className="add-form">
//                             <FormControl>
//                                 <TextField
//                                     id="outlined-basic"
//                                     label="Título del proyecto"
//                                     variant="outlined"
//                                     name="project_title"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>

//                             <FormControl>
//                                 <TextField
//                                     id="outlined-basic"
//                                     label="Ubicación geográfica"
//                                     variant="outlined"
//                                     name="project_location"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>

//                             <FormControl>
//                                 <TextField
//                                     id="outlined-basic"
//                                     label="Duración del proyecto"
//                                     variant="outlined"
//                                     name="project_duration"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>

//                             <FormControl>
//                                 <TextField
//                                     id="outlined-basic"
//                                     label="Presupuesto"
//                                     variant="outlined"
//                                     name="project_budget"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>

//                             <FormControl>
//                                 <TextField
//                                     id="outlined-multiline-static"
//                                     multiline
//                                     rows={3}
//                                     label="Sector de intervención"
//                                     name="intervention_sector"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>

//                             <FormControl>
//                                 <TextField
//                                     id="outlined-basic"
//                                     label="Dirección de imagen"
//                                     variant="outlined"
//                                     name="imagePath"
//                                     // value="https://i.postimg.cc/c4BYckQ7/proyecto.jpg"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>
//                         </form>
//                     </div>
//                 );
//             case 1:
//                 return (
//                     <div>
//                         <form className="add-form">
//                             <FormControl>
//                                 <TextField
//                                     id="outlined-multiline-static"
//                                     multiline
//                                     rows={2}
//                                     label="Resumen de la problemática que se quiere abordar"
//                                     name="problematic_summary"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>

//                             <FormControl>
//                                 <TextField
//                                     id="outlined-multiline-static"
//                                     multiline
//                                     rows={2}
//                                     label="Beneficiarios"
//                                     name="beneficiaries"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>

//                             <FormControl>
//                                 <TextField
//                                     id="outlined-multiline-static"
//                                     multiline
//                                     rows={3}
//                                     label="Resumen ejecutivo del proyecto"
//                                     name="executive_summary"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>

//                             <FormControl>
//                                 <TextField
//                                     id="outlined-multiline-static"
//                                     multiline
//                                     rows={3}
//                                     label="Alineación del proyecto con políticas públicas y prioridades"
//                                     name="alignment"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>
//                         </form>
//                     </div>
//                 );
//             case 2:
//                 return (
//                     <div>
//                         <form className="add-form" onSubmit={handleSubmit}>
//                             <FormControl>
//                                 <TextField
//                                     id="outlined-multiline-static"
//                                     multiline
//                                     rows={2}
//                                     label="Resumen de la problemática que se quiere abordar"
//                                     name="methodology_summary"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>

//                             <FormControl>
//                                 <TextField
//                                     id="outlined-multiline-static"
//                                     multiline
//                                     rows={2}
//                                     label="Objetivo general"
//                                     name="general_objetive"
//                                     onChange={(e) => onValueChange(e)}
//                                 />
//                             </FormControl>

//                             <h3>Objetivos específicos</h3>

//                             {/* <FormControl>
//                         <TextField
//                             id="outlined-multiline-static"
//                             multiline
//                             rows={1}
//                             label="Objetivo específico"
//                             name="specific_objectives"
//                             onChange={(e) => onValueChange(e)}
//                         />
//                     </FormControl> */}

//                             <FormControl>
//                                 <TextField
//                                     id="outlined-multiline-static"
//                                     multiline
//                                     rows={1}
//                                     label="Objetivo específico"
//                                     name="specific_objective"
//                                     type="text"
//                                     value={newData}
//                                     onChange={(event) => setNewData(event.target.value)}
//                                 />
//                             </FormControl>

//                             <Button type="submit">Agregar otro objetivo específico</Button>

//                             <ul>
//                                 {data.map((dato, index) => (
//                                     <li key={index}>{dato}</li>
//                                 ))}
//                             </ul>
//                         </form>
//                     </div>
//                 );
//             case 3:
//                 return (
//                     <div>
//                         <form className="add-form">
//                         <FormControl>
//                             <TextField
//                                 id="outlined-multiline-static"
//                                 multiline
//                                 rows={2}
//                                 label="Experiencia y capacidad"
//                                 name="experience"
//                                 onChange={(e) => onValueChange(e)}
//                             />
//                         </FormControl>

//                         <FormControl>
//                             <TextField
//                                 id="outlined-multiline-static"
//                                 multiline
//                                 rows={2}
//                                 label="Elementos que aseguren sostenibilidad económica, social y ambiental"
//                                 name="sustainability"
//                                 onChange={(e) => onValueChange(e)}
//                             />
//                         </FormControl>

//                         <FormControl>
//                             <TextField
//                                 id="outlined-multiline-static"
//                                 multiline
//                                 rows={2}
//                                 label="Estrategia de salida al finalizar el proyecto"
//                                 name="exit_strategy"
//                                 onChange={(e) => onValueChange(e)}
//                             />
//                         </FormControl>
//                         </form>
//                     </div>
//                 );
//             // case 4:
//             //     return (
//             //         <div>
//             //             <Typography variant="h6">Confirmación de proyecto</Typography>
//             //             <Typography>
//             //                 Nombre completo:
//             //             </Typography>
//             //             <Typography>
//             //                 Correo electrónico:
//             //             </Typography>
//             //             <Typography>
//             //                 Dirección de envío:
//             //             </Typography>
//             //             <Typography>
//             //                 Código postal:
//             //             </Typography>
//             //         </div>
//             //     );
//             default:
//                 return "Paso desconocido";
//         }
//     };

//     const defaultValue = {
//         project_title: "",
//         project_location: "",
//         project_duration: "",
//         project_budget: "",
//         intervention_sector: "",
//         imagePath: "",
//         problematic_summary: "",
//         beneficiaries: "",
//         executive_summary: "",
//         alignment: "",
//         methodology_summary: "",
//         general_objetive: "",
//         specific_objectives: "",
//         experience: "",
//         sustainability: "",
//         exit_strategy: ""
//     };

//     //Project add
//     const [project, setProject] = useState(defaultValue);

//     //variable that stores the navigation function provided by the hook
//     const navigate = useNavigate();

//     //function that updates the state of the form whenever a change occurs in a form element
//     const onValueChange = (e) => {
//         setProject({ ...project, [e.target.name]: e.target.value });
//     };

//     //function that adds project details to a database
//     const addProjectDetails = async () => {
//         await addProject(project);
//         navigate('/admin-projects');
//     }

//     const [data, setData] = useState([]);

//     const addData = (dato) => {
//         setData([...data, dato]);
//     };

//     const [newData, setNewData] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         addData(newData);
//         setNewData("");
//     };

//     const [activeStep, setActiveStep] = useState(0);
//     const [formData, setFormData] = useState({});

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleChange = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     };

//     const buttonPage = () => {
//         if (activeStep === steps.length - 1) {
//             return (
//                 <Button variant="contained" className="btn-create" onClick={() => addProjectDetails()}>
//                     <MdNoteAdd className="icon"/>Crear proyecto
//                 </Button>
//             );
//         }
//         else {
//             return (
//                 <Button variant="contained" color="primary" onClick={handleNext}>
//                     Siguiente
//                 </Button>
//             );
//         }

//     }

//     return (
//         <div>
//             <Stepper activeStep={activeStep}>
//                 {steps.map((label) => (
//                     <Step key={label}>
//                         <StepLabel>{label}</StepLabel>
//                     </Step>
//                 ))}
//             </Stepper>
//             <div>
//                 {activeStep === steps.length ? (
//                     <div>
//                         <Typography>Proyecto registrado con éxito</Typography>
//                     </div>
//                 ) : (
//                     <div>
//                         {getStepContent(activeStep, handleChange)}
//                         <div>
//                             <Button disabled={activeStep === 0} onClick={handleBack}>
//                                 Atrás
//                             </Button>

//                             {buttonPage()}

//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StepperWithContent;








// import * as React from 'react';
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { MdNoteAdd } from 'react-icons/md'
// import { addProject } from "../../service/api";
// import {
//     FormControl as Group,
//     TextField,
//     styled,
// } from "@mui/material";

// const FormControl = styled(Group)`
//     margin:10px 0;
// `;

// const steps = ['Datos del proyecto', 'Relevancia', 'Marco Lógico', 'Experiencia', 'sostenibilidad'];

// const defaultValue = {
//     project_title: "",
//     project_location: "",
//     project_duration: "",
//     project_budget: "",
//     intervention_sector: "",
//     imagePath: "",
//     problematic_summary: "",
//     beneficiaries: "",
//     executive_summary: "",
//     alignment: "",
//     methodology_summary: "",
//     general_objetive: "",
//     specific_objectives: "",
//     experience: "",
//     sustainability: "",
//     exit_strategy: ""
// };

// function Steps() {
//     const [activeStep, setActiveStep] = React.useState(0);
//     const [skipped, setSkipped] = React.useState(new Set());

//     const step = [
//         {
//             label: 'Paso 1',
//             content:
//                 <form className="add-form">
//                     <FormControl>
//                         <TextField
//                             id="outlined-basic"
//                             label="Título del proyecto"
//                             variant="outlined"
//                             name="project_title"
//                             onChange={(e) => onValueChange(e)}
//                         />
//                     </FormControl>

//                     <FormControl>
//                         <TextField
//                             id="outlined-basic"
//                             label="Ubicación geográfica"
//                             variant="outlined"
//                             name="project_location"
//                             onChange={(e) => onValueChange(e)}
//                         />
//                     </FormControl>

//                     <FormControl>
//                         <TextField
//                             id="outlined-basic"
//                             label="Duración del proyecto"
//                             variant="outlined"
//                             name="project_duration"
//                             onChange={(e) => onValueChange(e)}
//                         />
//                     </FormControl>

//                     <FormControl>
//                         <TextField
//                             id="outlined-basic"
//                             label="Presupuesto"
//                             variant="outlined"
//                             name="project_budget"
//                             onChange={(e) => onValueChange(e)}
//                         />
//                     </FormControl>

//                     <FormControl>
//                         <TextField
//                             id="outlined-multiline-static"
//                             multiline
//                             rows={3}
//                             label="Sector de intervención"
//                             name="intervention_sector"
//                             onChange={(e) => onValueChange(e)}
//                         />
//                     </FormControl>

//                     <FormControl>
//                         <TextField
//                             id="outlined-basic"
//                             label="Dirección de imagen"
//                             variant="outlined"
//                             name="imagePath"
//                             // value="https://i.postimg.cc/c4BYckQ7/proyecto.jpg"
//                             onChange={(e) => onValueChange(e)}
//                         />
//                     </FormControl>
//                 </form>,
//         },
//         {
//             label: 'Paso 2',
//             content: <p>Contenido del paso 2</p>,
//         },
//         {
//             label: 'Paso 3',
//             content: <p>Contenido del paso 3</p>,
//         },
//     ];

//     const isStepOptional = (step) => {
//         return step === 0;
//     };

//     const isStepSkipped = (step) => {
//         return skipped.has(step);
//     };

//     const handleNext = () => {
//         let newSkipped = skipped;
//         if (isStepSkipped(activeStep)) {
//             newSkipped = new Set(newSkipped.values());
//             newSkipped.delete(activeStep);
//         }

//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//         setSkipped(newSkipped);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleSkip = () => {
//         if (!isStepOptional(activeStep)) {
//             // You probably want to guard against something like this,
//             // it should never occur unless someone's actively trying to break something.
//             throw new Error("You can't skip a step that isn't optional.");
//         }

//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//         setSkipped((prevSkipped) => {
//             const newSkipped = new Set(prevSkipped.values());
//             newSkipped.add(activeStep);
//             return newSkipped;
//         });
//     };

//     const handleReset = () => {
//         setActiveStep(0);
//     };

//     //Project add
//     const [project, setProject] = useState(defaultValue);

//     //variable that stores the navigation function provided by the hook
//     const navigate = useNavigate();

//     //function that updates the state of the form whenever a change occurs in a form element
//     const onValueChange = (e) => {
//         setProject({ ...project, [e.target.name]: e.target.value });
//     };

//     //function that adds project details to a database
//     const addProjectDetails = async () => {
//         await addProject(project);
//         navigate('/admin-projects');
//     }


//     const [data, setData] = useState([]);

//     const addData = (dato) => {
//         setData([...data, dato]);
//     };

//     const [newData, setNewData] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         addData(newData);
//         setNewData("");
//     };

//     return (
//         <Box sx={{ width: '90%' }} className="box-step">
//             <Stepper activeStep={activeStep}>
//                 {steps.map((label, index) => {
//                     const stepProps = {};
//                     const labelProps = {};
//                     if (isStepOptional(index)) {
//                         labelProps.optional = (
//                             <Typography variant="caption">Optional</Typography>
//                         );
//                     }
//                     if (isStepSkipped(index)) {
//                         stepProps.completed = false;
//                     }
//                     return (
//                         <Step key={label} {...stepProps}>
//                             <StepLabel {...labelProps}>{label}</StepLabel>
//                         </Step>
//                     );
//                 })}
//             </Stepper>
//             {activeStep === steps.length ? (
//                 <React.Fragment>
//                     <Typography sx={{ mt: 2, mb: 1 }}>
//                         All steps completed - you&apos;re finished
//                     </Typography>
//                     <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                         <Box sx={{ flex: '1 1 auto' }} />
//                         <Button onClick={handleReset}>Reset</Button>
//                     </Box>
//                 </React.Fragment>
//             ) : (
//                 <React.Fragment>
//                     <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

//                     {/* content */}

//                     <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                         <Button
//                             color="inherit"
//                             disabled={activeStep === 0}
//                             onClick={handleBack}
//                             sx={{ mr: 1 }}
//                         >
//                             Back
//                         </Button>
//                         <Box sx={{ flex: '1 1 auto' }} />
//                         {isStepOptional(activeStep) && (
//                             <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
//                                 Skip
//                             </Button>
//                         )}

//                         <Button onClick={handleNext}>
//                             {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                         </Button>
//                     </Box>
//                 </React.Fragment>
//             )}
//         </Box>
//     );
// }

// export default Steps