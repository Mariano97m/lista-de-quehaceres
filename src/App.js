
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import { useState } from 'react';
import TodoList from './componentes/TodoList/TodoList';

const App = () => {

    const [tasks, setTasks] = useState ([]);

  return (
    <div className="App">
      <Formulario setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
