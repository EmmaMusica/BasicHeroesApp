import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    /* Utilizamos useMemo para que, si en algun futuro queremos trabajar sobre esta pagina
    (pagina del listado de superheroes), cada vez que la pagina sufra un cambio de estado, que no tenga
    que ver con los superheroes, este "getHeroesByPublisher" no tenga que renderizarse nuevamente
    */

    return (
        
            <div className="row d-flex justify-content-evenly">
                {heroes.map( hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))}
            </div>
        
    )
}
