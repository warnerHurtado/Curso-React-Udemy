import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  //Cuando lo estoy desestructurando lo puedo cambiar por el nombre que me plazca
  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr></hr>

      <button className="btn btn-danger" onClick={decrement}>
        -1
      </button>

      <button className="btn btn-danger" onClick={reset}>
        reset
      </button>

      <button className="btn btn-success" onClick={increment}>
        +1
      </button>
    </>
  );
};
