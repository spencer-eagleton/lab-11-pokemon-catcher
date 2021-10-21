export function getResults(){
    const resultsString = localStorage.getItem('POKEMON') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function setResults(pokemon){
    const chosenString = JSON.stringify(pokemon);
    localStorage.setItem('POKEMON', chosenString);
}

export function chosenPokemon(id){
    const currentResults = getResults();
    const pokemonChosen = currentResults.find(pokemon => pokemon.id === id

    );
    console.log(pokemonChosen)
    pokemonChosen.chosen ++;
    console.log(pokemonChosen)
    setResults(currentResults);
    
}