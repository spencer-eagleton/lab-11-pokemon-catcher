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
    const pokemonChosen = currentResults.find(pokemon => pokemon.id === id);
    if (chosenPokemon){
        chosenPokemon.chosen ++;
    } else {
        const newPokemon = { 'id': id, 'chosen': 1 };
        currentResults.push(newPokemon);
    }

    
    console.log(pokemonChosen)
    pokemonChosen.chosen ++;
    console.log(pokemonChosen)
    setResults(currentResults);
    
}