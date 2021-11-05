import React from 'react'
import { Link } from 'react-router-dom'

const heroImages = require.context('../../assets/heroes', true);


export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card mb-4 col-md-12 animate__animated animate__fadeInLeft" style={ { maxWidth: 540 } }>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={heroImages(`./${id}.jpg`).default} className="img-fluid rounded-start" alt={superhero}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>

                        {
                            (alter_ego !== characters)
                            && <p className="card-text">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`./heroe/${id}`}>
                            Más...
                        </Link>

                    </div> 
                </div>
            </div>
        </div>
    )
}
