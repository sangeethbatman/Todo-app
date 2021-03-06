import React, {useState} from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal } from '@material-ui/core'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
    paper:{
        position:'absolute',
        width:400,
        backgroundColor:theme.palette.background.paper,
        border:'2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}))
function Todo(props) {
    const classes=useStyles()
    const [open, setOpen]=useState(false)
    const [input, setInput]=useState()
    const handleOpen =()=>{
        setOpen(true)
    }
    const updateTodo=()=>{
        db.collection('todos').doc(props.todo.id).set({
            todo:input

        },{merge:true})
        setOpen(false)
    }
    return (
        <>
        <Modal 
         open={open}
         onClose={e=>setOpen(false)}
         >
             <div className={classes.paper}>
                 <h1>I am modal</h1>
                 <input placeholder={props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}/>
                 <Button type="submit" onClick={updateTodo}>update todo</Button>
             </div>

         </Modal>
        <List className="todo__align">
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
            
            <ListItemText primary={props.todo.todo} secondary={props.todo.timestamp} />
            </ListItem>
            <Button onClick={e=>setOpen(true)}>Edit</Button>
            <DeleteForeverIcon variant="contained" color="secondary" onClick={event=>db.collection('todos').doc(props.todo.id).delete()} />
            
        </List>
        </>
    )
}

export default Todo
