// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
//let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
//let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
//let room = new Room("dark room", "It is dark");
let hallway = new Room("hallway", "it is very eery...");
let bedroom = new Room("bedroom","there is a creepy blind guy in there...")
let dungeon = new Room("dungeon","it is very dark...")
let kitchen = new Room("kitchen","there is good looking food in there...")
let diningroom = new Room("dining room","there is a wierd looking family in there...")
let bathroom = new Room("bathroom","it is very messy.")
let bed = new Item("bed","made of wood.");
let mirror = new Item("mirror","fancy.");
let key = new Item("key","big and rusty.");
let knife = new Item("knife","bloody.");
let plateoffood = new Item("plate of food","very yummy smelling.");
let cup = new Item("cup","clean.");
let chair = new Item("chair","fancy.");
let table = new Item("table","fancy.");
let sink = new Item("sink","not working very well.");
let bathtub = new Item("bathtub","very dirty.");
let closet = new Item("closet","filled with clothes.")
let door = new Door("door","locked. It may need a key.");
door.locked = true;
let creepyfamily = new Item("creepy family", "enjoying their delicious meal.");
let blindguy = new Item("blind guy sitting in a chair", "sitting quietly.");

// Put them in their spots
//hallway.addItem(vase);
diningroom.addItem(creepyfamily);
bedroom.addItem(blindguy);
dungeon.addItem(door);
bedroom.addItem(closet);
hallway.addItem(bedroom);
door.addItem(hallway);
//hallway.addItem(dungeon);
hallway.addItem(bathroom);
hallway.addItem(kitchen);
hallway.addItem(diningroom);
bedroom.addItem(bed);
bedroom.addItem(mirror);
dungeon.addItem(key);
dungeon.addItem(knife);
kitchen.addItem(plateoffood);
kitchen.addItem(cup);
diningroom.addItem(plateoffood);
diningroom.addItem(chair);
diningroom.addItem(table);
bathroom.addItem(sink);
bathroom.addItem(bathtub);

let talkAction = /talk/;
let talk = function(action, player, object) {
  if (action == 'talk') {
    object.talk();
  }
  return player;
}

Item.prototype.talk = function() {
  addLine("You tried to talk to the " + this.name + " they smile, but don't answer you...");
}

let eatAction = /eat/;
let eat = function(action, player, object) {
  if (action == 'eat') {
    object.eat();
  }
  return player;
}
//addAction(eatAction, eat);
//  addline("You have eaten the food. You feel dizzy and pass out.")

  Item.prototype.eat = function() {
    addLine("You have eaten the " + this.name + ", You feel dizzy and pass out...");

  player.move(dungeon)
  player.cameFrom = null;
}


addAction(eatAction , eat);
addAction(talkAction, talk);


player.move(hallway)
