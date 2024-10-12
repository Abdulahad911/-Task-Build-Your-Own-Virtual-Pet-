
var pet = {
    name: "Buddy", 
    type: "dog", 
    age: 3,
    happiness: 70,
    hunger: 50,
    feed: function() {
        this.hunger = this.hunger- 20;
        if (this.hunger < 0) {
            this.hunger = 0;
        }
        alert(`${this.name} has been fed! Hunger is now: ${this.hunger}`);
    },
    
}