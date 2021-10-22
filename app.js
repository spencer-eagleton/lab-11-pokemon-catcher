import { pokemons } from './pokemon.js';
import { chosenPokemon, shownPokemon } from './utils.js';

const pokemon1Button = document.getElementById('pokemon-1-button');
const pokemon2Button = document.getElementById('pokemon-2-button');
const pokemon3Button = document.getElementById('pokemon-3-button');

const pokemon1Img = document.getElementById('pokemon-1-image');
const pokemon2Img = document.getElementById('pokemon-2-image');
const pokemon3Img = document.getElementById('pokemon-3-image');

const chooseButton = document.getElementById('choose-button');

const throwsSpan = document.getElementById('total-throws');

const cry = document.getElementById('cry');



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
    shownPokemon(pokemon1.id);
    pokemon1Img.src = pokemon1.url_image;
    pokemon1Button.value = pokemon1.id;

    let pokemon2 = pokemons[randNum2];
    shownPokemon(pokemon2.id);
    pokemon2Img.src = pokemon2.url_image;
    pokemon2Button.value = pokemon2.id;

    let pokemon3 = pokemons[randNum3];
    shownPokemon(pokemon3.id);
    pokemon3Img.src = pokemon3.url_image;
    pokemon3Button.value = pokemon3.id;



//   // call showPokemon for each
//   // render pokemon to page


};

let totalThrows = 0;

generatePokemon();
cry.play();

chooseButton.addEventListener('click', ()=>{
    const chosenButton = document.querySelector('input[type=radio]:checked');

    if (chosenButton){
        const chosenId = Number(chosenButton.value);
        
        
        totalThrows++;
        throwsSpan.textContent = totalThrows;
        
        chosenPokemon(chosenId);
        if (totalThrows >= 10){
            window.location = './results/index.html';
        } else {
            generatePokemon();
            cry.play();
        }
    }
});