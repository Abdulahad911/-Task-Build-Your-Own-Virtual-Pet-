
var pet = {
    name: "Buddy", 
    type: "dog", 
    age: 2,
    happiness: 80,
    hunger: 40,
    feed: function() {
        this.hunger = this.hunger- 20;
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
  
}