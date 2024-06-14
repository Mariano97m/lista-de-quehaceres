import { useState } from "react";


const Formulario = ({setTasks}) =>{
        const [newTasks, setNewTask] = useState ("");

        const handleNewTask = (e) =>{
            e.preventDefault();

            setTasks ((prevValue)=>{
                prevValue.push({text: newTasks, completed: false});
                return ([...prevValue])
            })
            setNewTask("");
            
        };


    return(
        <div>
            <form onSubmit={handleNewTask}>
                <div>
                    <input 
                    type="text" 
                    name="tasksinput" 
                    id="taskipt" 
                    value={newTasks}
                    onChange={(e) => setNewTask(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
};

export default Formulario;