
const anExampleVariable = "Hello World"
console.log(anExampleVariable)
 


class Ave {
    private _name: string;
   constructor(name: string) {
    this._name = name;
   }
}

class Mamifero {
    private _name: string;
   constructor(name: string) {
    this._name = name;
   }
}

const animalsFly: Ave[] = [];

function addAnimal() {
    for (let i = 0; i < 5; i++) {
        let a = new Ave(`{mario}` + i)
        animalsFly.push(a);
    }
}

addAnimal();
console.log('animalsFly', animalsFly);

const receiveAnimal = (animal: Ave | Mamifero) => {

}

const galinha: Ave | Mamifero = new Mamifero('maria');


 console.log(galinha instanceof Ave);