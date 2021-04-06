import React from 'react';
import {ListItemText, ListItem, Button} from '@material-ui/core';
import './Task.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Task = (props) => {
  return(
    <div className='task-set'>
      {
        <ListItem>
        <ListItemText
          primary={props.task.task}
          secondary='Deadline'
        />
      </ListItem>
      }
      <div>
        <Button size="small" variant='contained' style={{background: '#4cd137', border: '1px solid #4cd137', fontStyle: 'bold'}}>
          EDIT
        </Button>
        </div>
        <div>
        <DeleteForeverIcon style={{marginLeft: '10px', fontSize: 30}}/>
      </div>
      
    </div>
  )
}

export default Task;