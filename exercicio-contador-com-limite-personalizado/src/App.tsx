import { useState } from 'react'
import './App.css'

function App() {

  const [initialValue, setInitialValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setCount(initialValue)
    setStart(true)
  }

  const handleIncrease = () => {
    if (count < maxValue) {
      setCount(count +1)
    }
  }

  const handleDecrease = () => {
    if(count > 0) {
      setCount(count -1)
    }
  }

  if(!start) {
    return(
      <div style={{ textAlign: "center", fontFamily: "sans-serif"}}>
        <h2>Configurar Contador </h2>

        <div>
          <label>Valor inicial:</label>
          <input type="text"
          value={initialValue} 
          onChange={(e) => setInitialValue(Number(e.target.value))}/>
        </div>

        <div>
          <label>Valor máximo:</label>
          <input type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))}
           />
        </div>

        <button onClick={handleStart} style={{margin: "10px"}}>
          Iniciar Contador
        </button>

      </div>
    )
  }

  return (
    <>
      <div style={{textAlign: "center", fontFamily: "sans-serif"}}>
        <h2>Contador: {count}</h2>
        <button onClick={handleDecrease} style={{ marginRight: "10px" }}>-</button>
        <button onClick={handleIncrease}>+</button>

        {count === maxValue && (
          <p style={{color: "red"}}>Você atingiu o valor máximo</p>
        )}
      </div>
    </>
  )
}

export default App
