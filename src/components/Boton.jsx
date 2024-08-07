import React, { useState } from "react";
import "../css/Boton.css";
export default function Boton(props) {
  const esOperador = (valor) => {
    // return props.children === "+" || props.children === "-" || props.children === "*" || props.children === "/";
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  const [lastClicked, setLastClicked] = useState(null);
  const handleClick = () => {
    if (esOperador(props.children) && esOperador(lastClicked)) {
      return; // Do not perform any action if the current button is an operator and the last clicked button is also an operator
    }
    props.manejarClic(props.children);
    setLastClicked(props.children);
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
}
