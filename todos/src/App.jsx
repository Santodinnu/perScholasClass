import { useState } from 'react'
import './App.css'
function App() {
  let [todos, setTodos] = useState([])
  let [input, setInput] = useState('')
  let [listType, setListType] = useState('all')
  function handleChange(e) {
    setInput(e.target.value)
  }
  function handleClick() {
    let newTodo = {
      text: input,
      completed: false,
      id: crypto.randomUUID()
    }
    setTodos([...todos, newTodo])
    setInput("")
  }
  let filteredTodos;
  if (listType === 'complete') {
    filteredTodos = todos.filter(todo => todo.completed === true)
  } else if (listType === 'incomplete') {
    filteredTodos = todos.filter(todo => todo.completed === false)
  } else {
    filteredTodos = todos
  }
  function handleDelete(index) {
  // delete the todo its assocciaated with
  const newTodos = [...todos]
  newTodos.splice(index,1)
  setTodos(newTodos)
  console.log(todos)
  }
  function handleCheck(id){
    setTodos (todos.map((todo) => {
        if (todo.id == id) {
          return {...todo, completed: !todo.completed}
          } else {
            return todo
          }
        }
    )
  )}
  return (
    <div>
      <h1>Todos ({listType})</h1>
      <ul>
        {filteredTodos.map((todo, index) => {
          return (
            <div className="list-item">
            <input className="checkbox" type="checkbox" checked={todo.completed} onClick={() => handleCheck(todo.id)}></input>
            <li key={todo.id}>{todo.text}</li>
            <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          )
        })}
      </ul>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <br /><br />
      <button onClick={() => setListType('all')}>All</button>
      <button onClick={() => setListType('complete')}>Completed</button>
      <button onClick={() => setListType('incomplete')}>Incomplete</button>
    </div>
  )
}
export default App