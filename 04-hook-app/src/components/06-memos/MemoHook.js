import React, { useMemo, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import '../02-useEffect/Effects.css'
import { procesoPesado } from '../../helpers/procesoPesado.js'
export const MemoHook = () => {

    const {state, increment} = useCounter( 5000 );

    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])

    return (
        <div>
             <h1>MemoHook</h1>
             <h3>Memorize Counter: <small> { state }</small> </h3>

             <hr/>
             <p> {memoProcesoPesado}</p>
             <button 
                className="btn btn-primary"
                onClick={ increment }
                >
                +1
             </button>

             <button 
             className="btn btn-outline-primary ml-3"
             onClick={ () => {
                 setShow( !show )
                 }}>
                 Show / Hide { JSON.stringify( show ) }
             </button>
        </div>
    )
}
