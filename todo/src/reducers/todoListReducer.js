export const initialState = {
    todoList: [
        {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
        },
        {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
        }
    ]
}

export const todoListReducer = ( state, action ) => {
    console.log(action)
    switch (action.type) {
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if (item.id == action.payload.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    } else {
                        return item
                    }
                })
            }
        default:
            return state
    }
}