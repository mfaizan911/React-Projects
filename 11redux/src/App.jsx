import './App.css'
import Todos from './components/Todos';
import AddTodo from './components/AddTodos';

function App() {


  return (
    <>
    <h1 className='text-3xl font-bold text-white'>React Redux Toolkit</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
