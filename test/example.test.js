// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getResults, chosenPokemon } from '../utils.js';
const test = QUnit.test;


test('getResults should return results', (expect)=>{
    const fakeResults = [
        { id: '2', picked: 4, shown: 4 },
        { id: '4', picked: 4, shown: 5 }

    ];
    localStorage.setItem('POKEMON', JSON.stringify(fakeResults));
    const actual = getResults();
    expect.deepEqual(actual, fakeResults);
});

test('chosenPokemon should add 1 to quantity if item is in the cart', (expect)=>{

    const fakeResults = [
        { id: '2', chosen: 5 }
        
    ];

    localStorage.setItem('POKEMON', JSON.stringify(fakeResults));
    


    
    const expected = [
        { id: '2', chosen: 6 }
    ];
    chosenPokemon('2');
    const results = getResults();
    expect.deepEqual(results, expected);
});
