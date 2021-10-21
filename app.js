import { pokemons } from './pokemon.js';
import { shownPokemon } from './utils.js';

const pokemon1Button = document.getElementById('pokemon-1-button');
const pokemon2Button = document.getElementById('pokemon-2-button');
const pokemon3Button = document.getElementById('pokemon-3-button');

const pokemon1Img = document.getElementById('pokemon-1-image');
const pokemon2Img = document.getElementById('pokemon-2-image');
const pokemon3Img = document.getElementById('pokemon-3-image');








const generatePokemon = () =>{

// //   // generate 3 random pokemon
    let randNum1 = Math.floor(Math.random() * pokemons.length);
    let randNum2 = Math.floor(Math.random() * pokemons.length);
    let randNum3 = Math.floor(Math.random() * pokemons.length);


  // regenerate number if they match
    while (randNum1 === randNum2 ||
      randNum1 === randNum3 ||
      randNum2 === randNum3
    ) { 
        randNum1 = Math.floor(Math.random() * pokemons.length);
        randNum2 = Math.floor(Math.random() * pokemons.length);
        randNum3 = Math.floor(Math.random() * pokemons.length);
    }
    let pokemon1 = pokemons[randNum1];
    
    pokemon1Img.src = pokemon1.url_image;

    let pokemon2 = pokemons[randNum2];
    pokemon2Img.src = pokemon2.url_image;

    let pokemon3 = pokemons[randNum3];
    pokemon3Img.src = pokemon3.url_image;



//   // call showPokemon for each
//   // render pokemon to page


};


generatePokemon();

// button.addEventListener('click', ()=>{


// });