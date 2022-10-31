/*1. Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi. */

const animalArray = [
    { nome: 'leone', 
    famiglia: 'felidi', 
    classe: 'mammiferi' },
    { nome: 'cane', 
    famiglia: 'canidi', 
    classe: 'mammiferi' },
    { nome: 'gallina', 
    famiglia: 'fasianidi', 
    classe: 'uccelli' },
]

const newAnimalArray =[]

function findAnimal() {
    for(let i = 0; i < animalArray.length; i++){
        thisObject = animalArray[i];
        if (thisObject.classe ===`mammiferi`) {
            newAnimalArray.push(thisObject)
        }
    }
    return thisObject;
}

findAnimal();
console.log(newAnimalArray, "fuori function");
