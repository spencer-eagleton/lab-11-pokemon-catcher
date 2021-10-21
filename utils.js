export function getPokedex(){
    const resultsString = localStorage.getItem('POKEMON') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function setResults(pokemon){
    const chosenString = JSON.stringify(pokemon);
    localStorage.setItem('POKEMON', chosenString);
}

export function chosenPokemon(id){
    const currentResults = getPokedex();
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

export function shownPokemon(id){
    const currentResults = getPokedex();
    const pokemonShown = currentResults.find(pokemon => pokemon.id === id);
    if (shownPokemon){
        shownPokemon.shown ++;
    } else {
        const newPokemon = { 'id': id, 'shown': 1 };
        currentResults.push(newPokemon);
    }

    
    console.log(pokemonShown)
    pokemonShown.shown ++;
    console.log(pokemonShown)
    setResults(currentResults);
    
}