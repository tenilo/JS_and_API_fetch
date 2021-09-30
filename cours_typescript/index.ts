// Les variables 
let num1 = 24;
// ou
let num2:number = 38;

let numOrString: number | string;

// les tableaux
let arr = ['chien', 'chat', 'poisson'];
//déclaration d'un tableau qui contiendra des nombres ou boolean
let tableau: (number | boolean)[] = [];
tableau.push(false);
tableau.push(24);

// Les objets
interface Player {
    id: number,
    name: string,
    jersey: number
}

let zidane: Player ={
    id: 0,
    name: "Zidane",
    jersey: 10
}

class Singer {
    id: number;
    name: string;
    alive?: boolean

    constructor(id: number, name: string, alive?:boolean){
        this.id = id;
        this.name = name;
        this.alive = alive
    }
}
const prince = new Singer(0,'Prince')
console.log(prince);