// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = 300
        this.strength = 150

    }
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
        return undefined
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = 'Harald'
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
        return `${this.name} has received ${damage} points of damage`
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
        this.health = 60
        this.strength = 25
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        }

        return `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
        return undefined
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
        return undefined
    }

    vikingAttack() {
        let randomSaxom = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        let battle = this.saxonArmy[randomSaxom].receiveDamage(this.vikingArmy[randomViking].strength);


        if (this.saxonArmy[randomSaxom].health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxom), 1);
        }
        return battle;
    }

    saxonAttack(){
        let randomSaxom = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        let battle = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxom].strength);


        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        return battle;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        }
        return 'Vikings and Saxons are still in the thick of battle.'
    }

}
