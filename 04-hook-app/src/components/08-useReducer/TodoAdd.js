import React from 'react'
import { useForm } from '../../Hooks/useForm';

export const TodoAdd = ({ dispatch }) => {

    const [{ description }, hadleInputChange, reset] = useForm({
        description: '',

    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <=1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        dispatch({
            type: 'add',
            payload: newTodo
        });
        reset();
    }
    return (
        <>
            <h4>Agregar TODO</h4>

            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={ description }
                    onChange={ hadleInputChange }>
                </input>

                <button 
                    className="btn btn-outline-primary mt-1 w-100"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
            
        </>
    )
}
