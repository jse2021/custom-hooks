import React, { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';



export const useTodos = () => {

    const [todos,dispatch] = useReducer(todoReducer,[]);
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    
    },[todos])
    
    
    // Esto mando al Reducer, usando el dispatch, que es la funcion que usare para mandar la accion
    // Es el payload que quiero mandar al reducer
    const handleNewTodo = (todo) => {
        const action = {
            type:'[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    
    }
    const handleDeletedTodo =(id)=>{
    
        dispatch({ 
            type: '[TODO] Remove Todo',
            payload: id
        });
    }
    
    const handleToggleTodo =(id)=>{
        
        dispatch({ 
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }
     
    
    const init =()=>{
        //intenta parsear todo, si es nullo, regresa un arreglo vacio
        return JSON.parse(localStorage.getItem('todos') || []);
    }


    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeletedTodo,
        handleToggleTodo
    }
        
    ;
};

export default useTodos;