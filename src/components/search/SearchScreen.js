import React from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { getHeroesByName } from '../heroes/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();

    const { q = ''} = queryString.parse(location.search)

    const [values, handleInputChange, reset] = useForm({
        name: q
    })

    const { name: superhero} = values

    const heroesFiltered = getHeroesByName(q)

    // const heroesFiltered = useMemo(() => getHeroesByName(q), [q]) //---> de la clase, pero no lo necesité

    const handleSearch = (e) =>{
        e.preventDefault()
        history.push(`?q=${superhero}`);
        reset({name: ''})
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder="Find your hero" 
                            name="name" 
                            className="form-control mb-3"
                            autoComplete="off"
                            value={superhero}
                            onChange={handleInputChange}
                        />
                        <button
                            className="btn w-100 btn-outline-primary"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </form>
                </div>


                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>


                    {
                        (q==='')
                        &&
                            <div className="alert alert-info">
                                Search a hero.
                            </div>
                    }
                    {
                        (q!=='' && heroesFiltered.length === 0)
                        &&
                            <div className="alert alert-warning">
                                The value "{q}" isn't a valid superhero.
                            </div>
                    }
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
