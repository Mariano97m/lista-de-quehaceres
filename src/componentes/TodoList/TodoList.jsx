
const TodoList = ({tasks, setTasks}) => {

    const handlecheck = (idx) => (e) =>{
        setTasks((prevValue) =>{
            prevValue[idx].completed=e.target.checked;
            return(
                [...prevValue]
            )
        })
    }

    const handleDelete = (idx) => () =>{
        setTasks((prevValue)=>{
            const filteredList = prevValue.filter((item, index)=> index !== idx);
            return ([...filteredList]); 
        })
    };

    return(
        <div>
            <ul>
                {
                    tasks.map((item, idx)=>{
                        return(
                                <li key={idx}>
                                    <div>
                                        <p style={{display:"inline", textDecoration:item.completed?"line-through": "none"}}>
                                            {item.text}
                                        </p>
                                        <p>
                                        <input type="checkbox" checked={item.completed} onChange={handlecheck(idx)} />
                                        <button type="button" onClick={handleDelete(idx)}>Delete</button>
                                        </p>
                                    </div>
                                </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default TodoList;