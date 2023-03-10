import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { addProject } from "../../service/api"
import { BsFolderX, BsFolderPlus} from 'react-icons/bs'
import Swal from 'sweetalert2'
import { Stepper, Step, StepLabel, Button, Typography, Box, FormControl as Group, TextField, styled } from '@mui/material';
import {Step1, Step2, Step3, Step4, Step5} from "./components/projectForm"


const steps = ['Datos del proyecto', 'Relevancia', 'Marco Lógico', 'Resultados', 'Experiencia y sostenibilidad'];

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
    results: [],
    project_percentage: 0,
    experience: "",
    sustainability: "",
    exit_strategy: "",
    enabled: true,
};

function StepperComponent() {

    //states
    const [project, setProject] = useState(defaultValue);
    const [activeStep, setActiveStep] = useState(0);

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Step1 project={project} onValueChange={onValueChange}/>
                );
            case 1:
                return (
                    <Step2 project={project} onValueChange={onValueChange}/>
                );
            case 2:
                return (
                    <Step3 project={project} onValueChange={onValueChange}/>
                );
            case 3:
                return (
                    <Step4 project={project}/>
                );
            case 4:
                return (
                    <Step5 project={project} onValueChange={onValueChange}/>
                );
            default:
                return "Paso desconocido";
        }
    };

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
            <Stepper activeStep={activeStep} className='steps-head'>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel className='step-label'>{label}</StepLabel>
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