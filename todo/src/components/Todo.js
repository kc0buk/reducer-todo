import React from 'react'

const Todo = props => {
    const { dispatch } = props

    return (
        <div
            onClick={ () => dispatch({ 
                type: 'TOGGLE_COMPLETED', payload: props.item })}
            className={`item${props.item.completed ? ' completed' : '' }`}
        >
        <p>{props.item.task}</p>
        </div>
    )
}

export default Todo