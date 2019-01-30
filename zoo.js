var animalPopulation = 0;

function run() {
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");

    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");

    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();

    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    gemma.sleep();

    var stinger = new Bee("Stinger");
    stinger.eat("pollen");
    stinger.sleep();

    var zoo = [tigger, pooh, rarity, gemma, stinger];
    console.log("There were " + Animal.getPopulation() + " total animals created.");

    var zoebot = new Zookeeper("Zoebot");
    zoebot.feedAnimals(zoo, "sushi");
}

class Animal {
    constructor(name, food) {
        this.name = name;
        this.favoriteFood = food;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        console.log(this.name + " eats " + food + ".");
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }

    static getPopulation() {
        return animalPopulation;
    }
}

class Tiger extends Animal {
    constructor(name) {
        super(name, "meat");
    }
}

class Bear extends Animal {
    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal {
    constructor(name) {
        super(name, "marshmallows");
    }

    sleep() {
        console.log(this.name + " sleeps in a cloud.");
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super(name, "leaves");
    }

    eat(food) {
        food == this.favoriteFood ? super.eat("leaves") : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours.");
    }
}

class Bee extends Animal {
    constructor(name) {
        super(name, "pollen");
    }

    eat(food) {
        food == this.favoriteFood ? super.eat("pollen") : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }

    sleep() {
        console.log(this.name + " never sleeps.");
    }
}

class Zookeeper {
    constructor(name) {
        this.name = name;
    }

    feedAnimals(animals, food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals.");
        for (var i = 0; i < animals.length; i++) {
            animals[i].eat(food);
        }
    }
}