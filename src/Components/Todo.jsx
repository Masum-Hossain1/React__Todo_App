import React from 'react'
import style from './todo.module.css'

const Todo = (props) => {

    const {title, desc} = props.todo
    const {id, onRemoveTodo} = props

    const handleClick = (id) => {
        onRemoveTodo(id)
    }
    
  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button className={style.btn} onClick={() => {
                handleClick(id)
            }}>
                <i className="fa fa-trash fa-4x"></i>
            </button>
        </div>
    </article>
  )
}

export default Todo