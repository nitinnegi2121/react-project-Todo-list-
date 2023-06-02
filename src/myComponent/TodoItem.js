import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <> 
    <div>

  <h4>{todo.tittle}</h4>
   <p>{todo.desc}</p>

   <button className="btn btn-danger" onClick={() =>{onDelete(todo)}}
   >delete</button>

    </div>
    <hr/>
    </>
  )
}




