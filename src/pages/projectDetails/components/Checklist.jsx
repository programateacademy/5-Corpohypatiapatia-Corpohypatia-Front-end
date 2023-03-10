import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject, editProject } from "../../../service/api";
import { FaRegHandPointRight } from "react-icons/fa"

import './checklist.css'
import Loader from "./Loader";

function Checklist() {

    const [project, setProject] = useState(null);

    const { id } = useParams();

    const token = localStorage.getItem("token");

    const loadProjectsDetails = async () => {
        if (token) {
            const response = await getProject(id, token);
            setProject(response.data);
        }
    };

    useEffect(() => {
        loadProjectsDetails();
    }, []);

    const handleActivityChecked = (resultIndex, activityIndex, isChecked) => {
        const newProject = { ...project };
        const activities = newProject.results[resultIndex].activities;
        const activity = activities[activityIndex];
        activity.completed = isChecked;

        const completedActivities = activities.filter(a => a.completed).length;
        const totalActivities = activities.length;
        const percentage = Math.round((completedActivities / totalActivities) * 100);
        newProject.results[resultIndex].percentage = percentage;

        calculateProjectPercentage(newProject);

        setProject(newProject);
        editProject(newProject, id, token);
    };

    const calculateProjectPercentage = (newProject) => {
        const resultPercentages = newProject.results.map((result) => result.percentage);
        const totalPercentage = resultPercentages.reduce((total, percentage) => total + percentage, 0);
        const projectPercentage = Math.round(totalPercentage / newProject.results.length);
        newProject.project_percentage = projectPercentage;
    };

    if (!project) {
        return (
            <Loader/>
        );
    }

    return (
        <>

            <div>
                {project.results.map((result, resultIndex) => (
                    <div key={result._id}>
                        <div class="card tasks">
                            <div className="form">
                                <div className="result-container">
                                    <div class="card-indicator">
                                        <div className="rectangulo">
                                            <p>Resultado {resultIndex + 1}</p>
                                        </div>
                                        <p>{result.result}</p>
                                    </div>
                                    <div className="result-percentage">
                                        <h2>{result.percentage}%</h2>
                                        <p>Avance</p>
                                    </div>
                                </div>
                                <h4>Indicadores</h4>
                                <ul>
                                    {result.indicators.map((indicator) => (
                                        <li key={indicator} className="indicator"><FaRegHandPointRight className="icon-ind" />{indicator}</li>
                                    ))}
                                </ul> 
                                <h4>Actividades</h4>
                                <ul>
                                    {result.activities.map((activity, activityIndex) => (
                                        <li key={activity._id} className="activity">
                                            <input
                                                type="checkbox"
                                                id={activity._id}
                                                checked={activity.completed}
                                                onChange={(e) => handleActivityChecked(resultIndex, activityIndex, e.target.checked)}
                                            />
                                            <label htmlFor={activity._id}>{activity.description}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Checklist;