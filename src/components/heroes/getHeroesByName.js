import { heroes } from "../../data/heroes"

export const getHeroesByName = (q) => {
    
    const name = q.toLocaleLowerCase();
    const filer = heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(q))

    if(name === ''){
        return [];
    } else if(filer === undefined){
        return [];
    } else {
        return filer;
    }

}
