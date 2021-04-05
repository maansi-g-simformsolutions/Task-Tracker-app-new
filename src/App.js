import React, { useState } from "react";
import {TextField, Button } from "@material-ui/core";
import Task from './components/Task';
import "./App.css";
import './styles.css';

export default function App() {

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTasks = (event) => {
    event.preventDefault();
    setTasks([...tasks, input]);
    setInput('');
  }

  return (
    <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    
    <div className="App">
      <div className="task-container">
        <h1>Task Tracker App 📗</h1>
        <br />
        <form>
        <TextField value={input} onChange={event => setInput(event.target.value)} id="standard-basic" label="✅ Write a Task" />
        <Button type='submit' disabled={!input} onClick={addTasks} variant="contained" style={{background: '#4cd137', border: '2px solid #4cd137', fontStyle: 'bold'}}>
          ADD TASK
        </Button>
        </form>
        {
          tasks.map(task => <Task text={task}/>)
        }
      </div>
    </div>
    </div >
  );
}