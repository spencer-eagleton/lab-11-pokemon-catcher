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


const names = results.map((item)=>{
    const pokemon = findById(pokemons, item.id);
    return pokemon.pokemon;
});
const picked = results.map((item)=>{
    return item.chosen;
});

var ctx = document.getElementById('resultsChart').getContext('2d');

// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Catches',
            data: picked,
            backgroundColor: [
                'rgba(0, 0, 0, 0.2)',
                
            ],
            borderColor: [
                'rgba(0, 0, 0, 0.5)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});