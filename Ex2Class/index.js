class Person
{
    constructor(name,food){this.name=name;this.food=food;}
    greetings(){return "I am "+this.name;}
    getFood(){return "I would like to Eat "+this.food;}
    static displayWalk(){return "I am static Method with name display walk";}
}

let person1 = new Person("Subramani","Idli");
let greetings = person1.greetings();
let foodtype = person1.getFood();
console.log(`${greetings} , ${foodtype}`);
let food = new Person("Omkar","pizza");
greetings = food.greetings();
foodtype = food.getFood();
console.log(`${greetings} , ${foodtype}`);
console.log(Person.displayWalk());