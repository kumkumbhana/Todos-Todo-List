import React from 'react'
import {TodoItem} from '../MyComponents/TodoItem.js'
/*import {TodoItem} from './TodoItem.js'       esa bhi likh sakte hai*/

export const Todos = (props) => {
  let myStyle={
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container ' style={myStyle}>
        <h3 className=' my-3'>Todos List</h3>
        {props.todos.length===0? "No todos to display": 
        props.todos.map((todo)=>{
          return( <TodoItem todo={todo} key={todo.SNo} onDelete={props.onDelete}/>
          )
        })
        }
    </div>
  )
}
