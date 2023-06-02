import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {

const[tittle, setTittle] = useState("");
const[desc, setDesc] = useState("");


 const submit = (e)=>{

    e.preventDefault();
    if(!tittle || !desc){
        alert("Tittle or Description can not be blank")
    }
    else{ 
    addTodo(tittle, desc);
    setTittle("");
    setDesc("");
    }

 }

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>

            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="tittle" className="form-label">Todo Tittle</label>
                    <input type="text" value={tittle} onChange={(e)=> setTittle(e.target.value)}  
                    className="form-control" id="tittle" aria-describedby="emailHelp"/>
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label"> Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=> setDesc(e.target.value)}  
                    className="form-control" id="desc"/>
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>

        </div>
    )
}


