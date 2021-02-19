import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "./layout.css";


export const Layout = () => {
  const { state, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  console.log(data);

  //Aquí lo que le digo es que si viene la data me retorne la posición 0
  const { quote } = !!data && data[0];

  const pTag = useRef();

  useLayoutEffect( () => {
      console.log( 'pTag.current.getBoundingClientReact() ');
  },[quote])

  return (
    <div>
      <h1>Layout Effect</h1>

      <hr />


        <blockquote className="blockquote text-right">
            <p 
                className="mb-0"
                ref={ pTag }
            > 
                {quote} 
            </p>
        </blockquote>
        

      <button className="btn btn-primary" onClick={increment}>
        Siguient quote
      </button>
    </div>
  );
};
