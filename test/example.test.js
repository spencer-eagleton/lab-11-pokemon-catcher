// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getResults, shownPokemon } from '../utils.js';
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

test('shownPokemon should add 1 to quantity if item is in the cart', (expect)=>{

    const fakeResults = [
        { id: '2', shown: 5 }
        
    ];

    localStorage.setItem('POKEMON', JSON.stringify(fakeResults));
    


    const results = getResults();
    const expected = [
        { id: '2', shown: 6 }
    ];
    shownPokemon('2');

    expect.deepEqual(results, expected);
});
