import { evaluate } from "mathjs";
import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import BotonClear from "./components/BotonClear";
import Pantalla from "./components/Pantalla";
import Logo from "./img/freeCodeCamp-logo.png";

function App() {
  const [input, setInput] = useState("");
  const agregarInput = (val) => {
    setInput(input + val);
  };
  const calculaResultado = (valor) => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Debes ingresar un número o operador");
    }
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={Logo}
          alt="Logo de FreeCodeCamp"
          className="freecodecamp-logo"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calculaResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClic={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
