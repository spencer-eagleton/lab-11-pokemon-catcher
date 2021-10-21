export function findById(items, id){
    for (const item of items){
        if (item.id === item){
            return item;
        }
    }
}
export function getPokedex(){
    const resultsString = localStorage.getItem('POKEMON') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function setPokedex(pokemon){
    const chosenString = JSON.stringify(pokemon);
    localStorage.setItem('POKEMON', chosenString);
}

export function shownPokemon(id){
    const currentResults = getPokedex();
    const pokemonShown = currentResults.find(pokemon => pokemon.id === id);
    if (pokemonShown){
        pokemonShown.shown++;
    } else {
        const newPokemon = { 'id': id, 'shown': 1, 'chosen': 0 };
        currentResults.push(newPokemon);
    }

    

  
    setPokedex(currentResults);
    
}

export function chosenPokemon(id){
    const currentResults = getPokedex();
    const pokemonChosen = currentResults.find(pokemon => pokemon.id === id);
   
    pokemonChosen.chosen ++;
   
    
    
    
    
    setPokedex(currentResults);
    
}

