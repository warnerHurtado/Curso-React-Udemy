import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/userForm';
import { getHerosByName } from '../../selectors/getHerosByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const [ formValues, handleInputChange ] = useForm({ searchText: q });

  const { searchText } = formValues;

  const heroesFiltered = useMemo( () => getHerosByName(q), [ q ]);

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`?q=${ searchText }`);
  
  }
  return (
    <>
      <h1>Searchs</h1>
      <hr/>

      <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr/>

          <form onSubmit={ handleSearch }>
            <input 
              type="text"
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={ searchText }
              onChange={ handleInputChange }
            />

            <button className='btn btn-outline-primary mt-1' type='submit'>
                Search...
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr/>

          {
            ( q === '' ) 
              ? <div className='alert alert-info'> Search a hero </div>
              : ( heroesFiltered.length === 0 )
                && <div className='alert alert-danger'> There are not results to: { q }</div>
          }

          {
            heroesFiltered.map( hero => (
              <HeroCard key={ hero.id } { ...hero }/>
            ))
          }
        </div>
      </div>
    </>
  )
}
