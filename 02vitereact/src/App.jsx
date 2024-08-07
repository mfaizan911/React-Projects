import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 20){
    counter = counter + 1
    setCounter(counter)
    }
  }

  const removeValue = () => {
    if(counter > 0){
    counter = counter - 1
    setCounter(counter)
    }
  }

  return (
    <>
      <h1>Counter is {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
