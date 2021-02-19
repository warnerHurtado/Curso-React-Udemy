import React from 'react'

//Con ese memo lo que hago es que no se me esté recargando esto sino es necesario
export const Small = React.memo( ({value}) => {

    console.log('Holi')
    return (
        <div>
            <small> { value } </small>
        </div>
    )
}
)
