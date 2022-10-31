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


/*2. Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età. */

const people = [
    {
        name: "Luigi",
        lastName: "Giannone",
        age: 26
    },
    {
        name: "Francesca",
        lastName: "Rossi",
        age: 35
    },
    {
        name: "Michele",
        lastName: "Bianchi",
        age: 72
    },
    {
        name: "Carmela",
        lastName: "Verdi",
        age: 84
    },
];

const readyToDrive = [];

function checkAge() {
    for(let i = 0; i < people.length; i++){
        thisDriver = people[i];
        console.log(thisDriver);
        if(thisDriver.age < 70){
            readyToDrive.push(thisDriver)
        }
    }
    return thisDriver
}

checkAge();
console.log(readyToDrive);