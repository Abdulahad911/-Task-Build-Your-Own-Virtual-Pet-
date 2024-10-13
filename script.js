
var pet = {
    name: "Jack", 
    type: "dog", 
    age: 2,
    happiness: 60,
    hunger: 40,
    feed: function() {
        this.hunger = this.hunger - 20;
        if (this.hunger < 0) {
            this.hunger = 0;
        }
        alert(`${this.name} has been fed! Hunger is now: ${this.hunger}`);
    },
    
   play: function(){
    this.happiness += 20;
    if (this.happiness > 100){
        this.happiness = 100;
    }
    alert(`${this.name} had fun playing! Happiness is now: ${this.happiness}`);
   },
   agePet: function() {
    this.age += 1;
    this.happiness -= 5;
    this.hunger += 10;
    alert(`${this.name} is now ${this.age} years old! Hunger is ${this.hunger}, Happiness is ${this.happiness}`);
   } }
   function petInteraction() {
    while(true){
        var action = prompt("What would you like to do? (feed/play/age/exit)").toLowerCase();
        if (action === 'feed') {
            pet.feed();
        }
        else if (action === "play") {
            pet.play();
        } else if (action === "age") {
            pet.agePet();
        } else if (action === "exit") {
            alert("Goodbye!");
            break;
        } else {
            alert("Invalid action! Please choose feed, play, age, or exit.");
        }
    }
    }
petInteraction();