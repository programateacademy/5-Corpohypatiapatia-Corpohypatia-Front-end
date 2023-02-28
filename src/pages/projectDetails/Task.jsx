import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"

function Task({ title, subtasks, result, indicators }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    const [completedSubtasks, setCompletedSubtasks] = useState([]);

    const handleSubtaskCompletion = (subtaskIndex) => {
        if (completedSubtasks.includes(subtaskIndex)) {
            setCompletedSubtasks(completedSubtasks.filter((i) => i !== subtaskIndex));
        } else {
            setCompletedSubtasks([...completedSubtasks, subtaskIndex]);
        }
    };

    const getCompletionPercentage = () => {
        if (subtasks.length === 0) {
            return completedSubtasks.length === 0 ? 0 : 100;
        }
        const subtaskCompletionPercentage =
            (completedSubtasks.length / subtasks.length) * 100;
        return subtaskCompletionPercentage;
    };

    console.log(indicators)

    return (
        <>
            <div className="task">
                <p className="result">{result}</p>
                {/* <p>{indicators}</p> */}
                <div className="accordion-header" onClick={toggleAccordion}>
                    <h2>{title} <span className="percentage">{getCompletionPercentage().toFixed(2)}%</span></h2>
                    <i className={isOpen ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}></i>
                </div>
                {isOpen &&
                    <div className="accordion-content">
                        {subtasks.map((subtask, index) => (
                            <div className="container-task" key={index}>
                                <input
                                    type="checkbox"
                                    id={`${title}-${index}`}
                                    className="cbx"
                                    checked={completedSubtasks.includes(index)}
                                    onChange={() => handleSubtaskCompletion(index)}
                                />
                                <label for={`${title}-${index}`} className="check">
                                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                                        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                                        <polyline points="1 9 7 14 15 4"></polyline>
                                    </svg>
                                    <p>{subtask}</p>
                                </label>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    );
}

export default Task;