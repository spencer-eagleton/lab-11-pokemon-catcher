export function getResults(){
    const resultsString = localStorage.getItem('POKEMON') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function shownPokemon(id){
    const currentResults = getResults();
    const pokemonShown = currentResults.find(pokemon => pokemon.id === id

    );
    console.log(pokemonShown)
    pokemonShown.shown ++;
 
    const shownString = JSON.stringify(currentResults);
    localStorage.setItem('POKEMON', shownString);
    console.log(shownString);
    
    
    console.log(pokemonShown);
}