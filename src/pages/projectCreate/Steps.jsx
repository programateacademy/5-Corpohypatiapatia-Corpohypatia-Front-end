import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MdNoteAdd } from 'react-icons/md'
import { addProject } from "../../service/api";
import {
    FormControl as Group,
    TextField,
    styled,
} from "@mui/material";

const FormControl = styled(Group)`
    margin:10px 0;
`;

const steps = ['Datos del proyecto', 'Relevancia', 'Marco Lógico', 'Experiencia', 'sostenibilidad'];

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

function Steps() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    //Project add
    const [project, setProject] = useState(defaultValue);

    //variable that stores the navigation function provided by the hook
    const navigate = useNavigate();

    //function that updates the state of the form whenever a change occurs in a form element
    const onValueChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
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

    return (
        <Box sx={{ width: '90%'}} className="box-step">
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

                    <form className="add-form">
                        <FormControl>
                            <TextField
                                id="outlined-basic"
                                label="Título del proyecto"
                                variant="outlined"
                                name="project_title"
                                onChange={(e) => onValueChange(e)}
                            />
                        </FormControl>

                        <FormControl>
                            <TextField
                                id="outlined-basic"
                                label="Ubicación geográfica"
                                variant="outlined"
                                name="project_location"
                                onChange={(e) => onValueChange(e)}
                            />
                        </FormControl>

                        <FormControl>
                            <TextField
                                id="outlined-basic"
                                label="Duración del proyecto"
                                variant="outlined"
                                name="project_duration"
                                onChange={(e) => onValueChange(e)}
                            />
                        </FormControl>

                        <FormControl>
                            <TextField
                                id="outlined-basic"
                                label="Presupuesto"
                                variant="outlined"
                                name="project_budget"
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
                                onChange={(e) => onValueChange(e)}
                            />
                        </FormControl>

                        <FormControl>
                            <TextField
                                id="outlined-basic"
                                label="Dirección de imagen"
                                variant="outlined"
                                name="imagePath"
                            // value="https://i.postimg.cc/c4BYckQ7/proyecto.jpg"
                                onChange={(e) => onValueChange(e)}
                            />
                        </FormControl>
                    </form>


                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default Steps