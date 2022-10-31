import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import style from './home.module.css'
import NewTodo from './NewTodo'
import Todos from './Todos'


const Home = () => {

    const [todos, setTodos] = useState([])

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), todo}]
        })
    }

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filteredTodos = prevTodos.filter((todo) => todo.id !== id)
            return filteredTodos
            
        })
    }
    
  return (
    <div className={style.container}>
        <h1 className={style.title}>Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo} />
        <Todos data={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home