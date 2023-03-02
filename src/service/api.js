import axios from "axios";

const URL = "http://localhost:8000";

export const addProject = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (e) {
        console.log("Error while calling add User Api", e);
    }
};

export const getProjects = async () => {
    try {
        return await axios.get(`${URL}`);
    } catch (e) {
        console.log("Error while calling getMovies API", e);
    }
};

export const getProject = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (e) {
        console.log("Error while calling getMovie api", e);
    }
};

export const editProject = async (project, id) => {
    try {
        return await axios.put(`${URL}/${id}`, project);
    } catch (e) {
        console.log("Error while calling editUser api", e);
    }
};


export const deleteProject = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (e) {
        console.log('Error while callign deleteUser api', e)
    }
}