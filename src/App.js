import React, { useState, useEffect} from "react";
import {TextField, Button } from "@material-ui/core";
import Task from './components/Task';
import "./App.css";
import './styles.css';
import db from './firebase';
import firebase from 'firebase';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function App() {

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTasks = (event) => {
    event.preventDefault();
    
    db.collection('tasks').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  useEffect(() => {
    db.collection('tasks').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        task: doc.data().task
      })))
    })
  }, [])

  return (
    <ThemeProvider theme={theme} style={{backgroundSize: 'cover'}}>
    <Paper>
    <div className="area" >
            <ul className="circles">
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
        <Button type='submit' disabled={!input} onClick={addTasks} variant="contained" style={{background: '#4cd137', border: '2px solid #4cd137', fontWeight: 'bold'}}>
          ADD TASK
        </Button>
        </form>
        {
          tasks.map(task => <Task task={task}/>)
        }
      </div>
    </div>
    </div >
    </Paper>
    </ThemeProvider>
  );
}
