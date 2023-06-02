
import './App.css';
import Header from "./myComponent/Header";
import { Todos } from "./myComponent/Todos";
import { Footer } from "./myComponent/Footer";
import { AddTodo } from './myComponent/AddTodo';
import {About} from './myComponent/About';

import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom/cjs/react-router-dom.min";

function App() {

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
    console.log("I am adding this todo", tittle, desc);
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
    console.log(myTodo);


  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])


  return (
    <>
      <Router>
        <Header tittle="My Todos list" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }} >
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
