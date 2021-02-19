import React, { useEffect, useState } from "react";
import "./Effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("hey!");
  }, []); //Con los corchetes cuadrados estoy evitando que se me vuelva a recargar

  useEffect(() => {
    console.log("Holaaaa!");
  }, [formState]); //Lo que hace es que cada ves que haya un cambio en el formState
  //ejecuata lo que hay dentro de esta función

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>UseEffect Simple Form</h1>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>

      {name === "123" && <Message />}
    </>
  );
};
