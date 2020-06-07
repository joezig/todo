import React from 'react';

import Todo from '../Todo/Todo';

import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

function TodoList({ todos, editTodo, removeTodo, toggleTodo }) {
  return(
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <Todo 
              id={todo.id}
              task={todo.task} 
              key={todo.id} 
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo} 
            />      
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;