import React , {Fragment, useState} from "react"

let counter = 4;

function App() {
  const [todos,setTodos] = useState([{ //intial state of the todo!
    id : 1,
    title : "Go to gym",
    description : "go to gym today",
  } , {
    id:2,
    title: "eat food",
    description : "eat food very hardly"
  }, {
    id:3,
    title:"go to class",
    description : "go to class and study hard"
  }])

  function addTodo() {
    setTodos([...todos , { //all the old todos + all the new todos we want . we are updating the state varaible of the todo state
      id: counter ++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return ( 
    <div> 
      <button onClick={addTodo}>Add a todo</button>
       {todos.map(function(todo){  //whenver we are iterating over an array we need to add a key to it so that if we sort the array or udate it or delete it later somehow then it dosent gets a big jargon so definig each div or todos with a id helps us in the future for a better optimal app
        return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo> //iterating over the todos to render all the todos
       })}
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}

export default App
