import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EditTodoForm from '../EditTodoForm/EditTodoForm';

import useToggleState from '../../hooks/useToggleState'

import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ id, task, completed, editTodo, removeTodo, toggleTodo }) {
  const [isEditing, toggle] = useToggleState()
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm 
          id={id} 
          editTodo={editTodo} 
          task={task} 
          toggleEditForm={toggle} 
        /> 
      ) : (
        <>
          <Checkbox 
            tabIndex={-1} 
            checked={completed} 
            onClick={() => toggleTodo(id)} 
          />
          <ListItemText 
            style={{
              textDecoration: completed ? 
                'line-through' : 
                'none'
              }}
            >
              {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle} >
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;