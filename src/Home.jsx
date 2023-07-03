import React, { useState, useEffect } from 'react';
import { AddTodo } from './myComponent/AddTodo';
import { Todos } from "./myComponent/Todos";
import Header from './myComponent/Header';
import { Footer } from './myComponent/Footer';

const Home = () => {
    let initTodo;

    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }


    const onDelete = (todo) => {
        console.log("I am onDelete todo", todo);

        // deleting this way is not working on React
        // let index = todos.indexOf(todo);
        // todos.splice(index, 1);

        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const addTodo = (tittle, desc) => {
        let sno;
        if (todos.length === 0) {
            sno = 0;
        }
        else {
            sno = todos[todos.length - 1].sno + 1;
        }

        const myTodo = {
            sno: sno,
            tittle: tittle,
            desc: desc,
        }
        setTodos([...todos, myTodo]);
    }

    const [todos, setTodos] = useState(initTodo);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos])
    return (
        <div>
            <Header tittle="My Todos list" searchBar={false} />
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            <Footer />
        </div>
    )
}

export default Home
