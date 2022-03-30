
class Ninja {
    constructor(ninjaName, health) {
        this.name = ninjaName
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(
            `${this.name} has health of ${this.health}, speed of ${this.speed} and strength of ${this.strength}!`
        )
    }
    drinkSake() {
        this.health += 10;
    }
}


class Sensei extends Ninja {
    constructor(name, health) {
        super(name, health);
        this.wisdom = 10;
    }
    showSenseiStats() {
        super.showStats();
        console.log(this.wisdom);
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Ninjas don't wish upon a star, they throw them...");
    }
}

const superSensei = new Sensei("Master Kawakami", 200);

superSensei.speakWisdom();
superSensei.showSenseiStats();