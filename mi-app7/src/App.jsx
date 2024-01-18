import { useState } from "react";
import "./MiApp.css"
const App = () =>{

  //valor funcion que modifica valor
  const [contador, setContador] = useState(0)

  return (
    <> 
    <h1>Hola Mundo</h1>
    <p>Felix Manuel Cruz Monge</p>
    <h3>Contador:{contador}</h3>
    <button id="btn1"  className="btns" onClick={() => setContador(contador + 1)}>Incrementa</button>
    <button id="btn2"  className="btns" onClick={() => setContador(contador - 1)}>Decrementa</button>
    <button id="btn3"  className="btns" onClick={() => setContador(0)}>Reinicia</button>
    </>
  )
}

export default App;