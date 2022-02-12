import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const { heroId } = useParams();

  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( heroId ), [ heroId ]); //El use memo es por si cambia el heroId se ejecute la otra funcion

  if ( !hero ) return <Navigate to='/'/>;

  const handleBack = () => {
    navigate( -1 ); //Con esto le estoy diciendo que vaya a la vista anterior
  }


  
  console.log(hero.id);
  
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={`/assets/${hero.id}.jpg`} className="img-thumbnail animate__animated animate__fadeInLeft" alt={hero.superhero}/>
      </div>
      <div className='col-8'>
        <h3>{ hero.superhero }</h3>
        <ul className='list-group list-group'>
          <li className='list-group-item'> <b>Alter ego: </b>{ hero.alter_ego }</li>
          <li className='list-group-item'> <b>Publisher: </b>{ hero.publisher }</li>
          <li className='list-group-item'> <b>First Apparance: </b>{ hero.first_appearance }</li>
        </ul>
        <h5 className='mt-5'>Characters</h5>
        <p>{ hero.characters }</p>

        <button
          className='btn btn-outline-info'
          onClick={ handleBack }
        >
          Back
        </button>
      </div>
    </div>
  )
}
