import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroeScreen = ({history}) => {

    const { heroeId } = useParams(); //se utiliza para tomar los parametros enviados por la ruta del navegador
    
    const hero = useMemo(() => getHeroById(heroeId), [heroeId])
    /* Utilizamos useMemo para que, si en algun futuro queremos trabajar sobre esta pagina
    (pagina del superheroe), cada vez que la pagina sufra un cambio de estado, que no tenga
    que ver con los superheroes, este "getHeroById" no tenga que renderizarse nuevamente
    */

    if(!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () =>{
        if(history.length <= 2){
            history.push('/');
        }else{
            history.goBack()
        }

    }

    const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters} = hero

    return (
        <div className="row container-fluid">
            <h1>HeroeScreen</h1>
            <hr />

           <div className="row mt-5">
               <div className="col-4 animate__animated animate__fadeInLeft">
                   <img src={`../assets/heroes/${heroeId}.jpg`} className="img-thumbnail" alt={superhero}/>

               </div>
               <div className="col-8 d-flex flex-column justify-content-between animate__animated animate__fadeInUp">
                   <div>
                        <h3>{superhero}</h3>
                        <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                                <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                                <li className="list-group-item"><b>First appearance:</b> {first_appearance}</li>
                        </ul>
                   </div>
                   <div>
                    <h5>Characters</h5>
                    <p>{characters}</p>

                    <button 
                            className="btn btn-outline-info"
                            onClick={ handleReturn }    
                    >
                        Return
                    </button>
                   </div>
               </div>
           </div>
        </div>
    )
}
