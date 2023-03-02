import { useState } from "react";
import { useNavigate } from "react-router-dom";

//import icon from react icons
import { MdNoteAdd } from "react-icons/md";

import "./projectCreate.css";

//import components from material library
import {
  FormControl as Group,
  // Input,
  // InputLabel,
  Button,
  TextField,
  styled,
} from "@mui/material";

//import function from services api
import { addProject } from "../../service/api";

//styled components - emotion library
// const FormSpan = styled(FormControl)`
//     grid-column: span 2;
// `;

const FormControl = styled(Group)`
  margin: 10px 0;
`;

const ButtonAdd = styled(Group)`
  margin: 20px 0;
  grid-column: span 2;
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
  specific_objectives: "",
  experience: "",
  sustainability: "",
  exit_strategy: "",
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

  //function that adds project details to a database
  const addProjectDetails = async () => {
    await addProject(project);
    navigate("/projects");
  };

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
    <section>
      <form className="add-form" onSubmit={handleSubmit}>
        <FormControl>
          {/* executes event handling function whenever the value of the input field changes */}
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

        <FormControl>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={2}
            label="Resumen de la problemática que se quiere abordar"
            name="problematic_summary"
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
            onChange={(e) => onValueChange(e)}
          />
        </FormControl>

        <FormControl>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={2}
            label="Resumen de la problemática que se quiere abordar"
            name="methodology_summary"
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

        <FormControl>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={2}
            value={data}
            label="Enviar objetivos"
            name="specific_objectives"
            onChange={(e) => onValueChange(e)}
          />
        </FormControl>

        {/* <Button>Agregar otro objetivo específico</Button> */}

        <FormControl>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={2}
            label="Experiencia y capacidad"
            name="experience"
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
            onChange={(e) => onValueChange(e)}
          />
        </FormControl>

        <ButtonAdd>
          <Button
            variant="contained"
            className="btn"
            onClick={() => addProjectDetails()}
          >
            <MdNoteAdd className="icon" />
            Crear proyecto
          </Button>
        </ButtonAdd>
      </form>
    </section>
  );
};

export default ProjectCreate;
