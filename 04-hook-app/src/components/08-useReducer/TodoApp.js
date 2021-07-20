import React, { useEffect, useReducer } from 'react'
import { TodoList } from './TodoList';
import { todoReducer } from './TodoReducer';
import './styles.css'
import { TodoAdd } from './TodoAdd';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, [],  init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( state ));
    }, [state])

    const handleDelete = ( todoId ) => {

        dispatch({
            type: 'delete',
            payload: todoId
        })
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    return (
        <div>
            <h1>TodoApp ( { state.length} )</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                <TodoList
                    state={ state }
                    handleDelete = { handleDelete }
                    handleToggle = { handleToggle }
                />
                </div>

                <div className="col-5">
                   <TodoAdd 
                        dispatch={ dispatch }
                   />
                </div>

            </div>
            
        </div>
    )
}
