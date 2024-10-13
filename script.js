var petName = prompt('What is your pet\'s name?');
var petType = prompt('What kind of pet\'s it is .e.g. "dog", "cat", "dragon" ?');
var petAge = +prompt('What is your pet\'s age?Enter a value as number');
var petHappiness = +prompt('How happy is your pet?Enter a value as number');
var petHunger = +prompt('How hungry is your pet?Enter a value as number');
if (isNaN(petAge) || isNaN(petHappiness) || isNaN(petHunger)) {
    alert('Enter pet age, happiness and hunger as a number')
}
var pet = {
    name: "", 
    type: "", 
    age: 0,
    happiness: 0,
    hunger: 0,
    
    feed: function() {
        this.hunger -= 20;
        if (this.hunger < 0) {
            this.hunger = 0;
        }
        alert(`${this.name} has been fed! Hunger is now: ${this.hunger}`);
    },
    
    play: function() {
        this.happiness += 20;
        if (this.happiness > 100) {
            this.happiness = 100;
        }
        alert(`${this.name} had fun playing! Happiness is now: ${this.happiness}`);
    },
    
    agePet: function() {
        this.age += 1;
        this.happiness -= 5;
        this.hunger += 10;
        alert(`${this.name} is now ${this.age} years old! Hunger is ${this.hunger}, Happiness is ${this.happiness}`);
    }
}

function petInteraction() {
    pet.name = petName;
    pet.type = petType;
    pet.age = petAge;
    pet.happiness = petHappiness;
    pet.hunger = petHunger;

    while (true) {
        var action = prompt("What would you like to do? (feed/play/age/exit)").toLowerCase();
        
        if (action === 'feed') {
            pet.feed();
        } 
        else if (action === "play") {
            pet.play();
        } 
        else if (action === "age") {
            pet.agePet();
        } 
        else if (action === "exit") {
            alert("Goodbye!");
            break;
        } 
        else {
            alert("Invalid action! Please choose feed, play, age, or exit.");
        }
    }
}

petInteraction();
