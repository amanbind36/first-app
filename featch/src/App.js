import logo from './logo.svg';
import react, { useEffect , useState } from "react"
import './App.css';


//state to stre this pagenumber
//api for every pagenumber change;

useEffect(()=>{
  axios
  .get
})

function App() {
  const [page,setPage]=useState(0)
  const [todos,setTodos]=useEffect([]);

  //use effect to run anything only once
  //use effect

  return (
    <div className="App">
      {todos.map(()=>(
        <div key={todo.id}>
        {todo.id} {` : `} {todo.value}       </div>
      ))}
  
    </div>
  );
}

export default App;
