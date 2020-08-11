import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    return (
        <section className='todoList'>
            {
                props.taskList.map( item => (
                    <Todo 
                        key={item.id}
                        item={item}
                        dispatch={props.dispatch}
                    />
                ))
            }
        </section>
    )
}

export default TodoList