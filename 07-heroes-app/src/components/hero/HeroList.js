import { useMemo } from "react";
import { getHerosByPublisher } from "../../selectors/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHerosByPublisher( publisher ), [ publisher ] ); //Con memo solo se ejecuta cuando cambia el publisher

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">

        {
            heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    />
            ))
        }

    </div>
  )
}
