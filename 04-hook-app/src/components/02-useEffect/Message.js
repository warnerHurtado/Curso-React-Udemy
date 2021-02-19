import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Componente montado");
    return () => {
      //Esto es lo que retorna cuando ya no es igual
      console.log("Componente desmontado");
    };
  }, []);

  return (
    <div>
      <h3>Eres genial</h3>
    </div>
  );
};
