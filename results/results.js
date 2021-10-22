import { getPokedex, findById } from '../utils.js';
import { pokemons } from '../pokemon.js';
const results = getPokedex();

const main = document.getElementById('main');

for (let item of results){
    const pokemon = findById(pokemons, item.id);
    

    const div = document.createElement('div');

    
    const image = document.createElement('img');
    image.src = pokemon.url_image;
    
    const header = document.createElement('h3');
    header.textContent = pokemon.name;


    const resultSpan1 = document.createElement('span');
    resultSpan1.textContent = `Encountered: ${item.shown}`;

    const resultSpan2 = document.createElement('span');
    resultSpan2.textContent = `Caught: ${item.chosen}`;

   

    div.append(header, image, resultSpan1, resultSpan2);
  
    main.append(div);


}


