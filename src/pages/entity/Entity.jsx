import { useState } from "react";
import { useNavigate } from "react-router-dom";

//import icon from react icons
import { MdNoteAdd } from "react-icons/md";



//import components from material library
import {
    FormControl as Group,
    Button,
    TextField,
    styled,
} from "@mui/material";

//import function from services api
import { addEntity } from "../../service/api";

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
    entity_name: "",
    entity_adress: "",
    entity_webpage: "",
    entity_phone: "",
    contact_name: "",
    contact_phone: "",
    contact_email: "",
    legal_status: "",
    country: "",
    foundaion_year: "",
    registry_nit: ""
};

const EntityCreate = () => {
    //destructuring of variable with an initial default value
    const [entity, setEntity] = useState(defaultValue);

    //variable that stores the navigation function provided by the hook
    // const navigate = useNavigate();

    //function that updates the state of the form whenever a change occurs in a form element
    const onValueChange = (e) => {
        setEntity({ ...entity, [e.target.name]: e.target.value });
    };

    //function that adds project details to a database
    const addEntityDetails = async () => {
        await addEntity(entity);
        // navigate("/projects");
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
                        label="Nombre de la entidad"
                        variant="outlined"
                        name="entity_name"
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <TextField
                        id="outlined-basic"
                        label="Dirección de la entidad"
                        variant="outlined"
                        name="entity_adress"
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <TextField
                        id="outlined-basic"
                        label="Pagina web"
                        variant="outlined"
                        name="entity_webpage"
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <TextField
                        id="outlined-multiline-static"
                        label="Teléfono"
                        variant="outlined"
                        name="entity_phone"
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <TextField
                        id="outlined-basic"
                        label="Nombre de contacto"
                        variant="outlined"
                        name="contact_name"
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <TextField
                        id="outlined-multiline-static"
                        variant="outlined"
                        label="Teléfono de contacto"
                        name="contact_phone"
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <TextField
                        id="outlined-multiline-static"
                        variant="outlined"
                        label="Correo electrónico"
                        name="contact_email"
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <TextField
                        id="outlined-multiline-static"
                        variant="outlined"
                        label="Estatus legal"
                        name="legal_status"
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <TextField
                        id="outlined-multiline-static"
                        variant="outlined"
                        label="País"
                        name="country"
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <TextField
                        id="outlined-multiline-static"
                        variant="outlined"
                        label="Año de fundación"
                        name="foundaion_year"
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <TextField
                        id="outlined-multiline-static"
                        variant="outlined"
                        label="Número de registro"
                        name="registry_nit"
                        onChange={(e) => onValueChange(e)}
                    />
                </FormControl>

                <ButtonAdd>
                    <Button
                        variant="contained"
                        className="btn"
                        onClick={() => addEntityDetails()}
                    >
                        <MdNoteAdd className="icon" />
                        Crear entidad
                    </Button>
                </ButtonAdd>
            </form>
        </section>
    );
};

export default EntityCreate;
