import { useState, useEffect } from "react"
import { getEntities } from "../../service/api";

function Entity() {


    const [entities, setEntities] = useState([]);
    const token = localStorage.getItem("token");

    const getAllEntities = async () => {
        if (token) {
            let response = await getEntities(token);
            setEntities(response.data);
        }
    };

    useEffect(() => {
        getAllEntities();
    }, []);

    return (
        <>
            <ul>
                {entities.map((entity, index) => (
                    <li key={index}>{entity}</li>
                ))}
            </ul>
        </>
    );

}

export default Entity;