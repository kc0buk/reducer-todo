import React, { useReducer } from 'react';
import { initialState, todoListReducer } from './reducers/todoListReducer'
import TodoList from './components/TodoList'
import './App.css';



function App() {
  const [state, dispatch] = useReducer(todoListReducer, initialState)


  return (
    <main>
      <h2>
        Welcome to Your Todo App
      </h2>
      <TodoList 
        taskList={state.todoList}
        dispatch={dispatch}
      />
      
    </main>
  );
}

export default App;
