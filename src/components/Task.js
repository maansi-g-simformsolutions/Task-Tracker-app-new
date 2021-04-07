import React , {useState} from 'react';
import {ListItemText, ListItem, Button, TextField} from '@material-ui/core';
import './Task.css';
import db from '../firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const Task = (props) => {

  const [input, setInput] = useState('');

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Button type='button' onClick={handleOpen} size="small" variant='contained' style={{background: '#4cd137', border: '1px solid #4cd137', fontSize: '.9rem'}}>
          EDIT
        </Button>
        </div>
        <div>
        <DeleteForeverIcon 
        style={{marginLeft: '10px', fontSize: 30, cursor: 'pointer'}}
        onClick={(event) =>
          db.collection("tasks").doc(props.task.id).delete()}
        />
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Update your Task</h2>
            <p id="transition-modal-description"><TextField 
             value={input}
             placeholder={props.task.task}
             onChange={event => setInput(event.target.value)} /></p>
            <Button variant='contained'>UPDATE</Button>
        </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Task;