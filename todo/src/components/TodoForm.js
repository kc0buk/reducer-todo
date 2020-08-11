import React, {useState} from 'react'

const TodoForm = props => {
    const [inputText, setInputText] = useState('')
    const { dispatch } = props

    const handleChanges = event => {
        setInputText(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({ 
            type: 'ADD_NEW_ITEM', 
            payload: {
                task: inputText,
                id: Date.now(),
                completed: false
        } 
    })
        setInputText('')
    }

    return (
        <section onSubmit={handleSubmit}>
            <form>
                <input 
                    onChange={handleChanges}
                    type='text'
                    name='inputText'
                    value={inputText}
                    placeholder='Add new item...'
                />
                <button>Add Todo</button>
                <button onClick={ () => dispatch({
                    type: 'CLEAR_COMPLETED'
                })}>Clear Completed</button>
            </form>

        </section>
    )
}

export default TodoForm