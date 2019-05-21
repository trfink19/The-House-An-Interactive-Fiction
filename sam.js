alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let pencil = new Item('pencil', 'you can stab someone like john wick.')
let room = new Room("dark room", "It is filled with dead fish.");
let fishingRod = new Item('fishing Rod', 'go fishing or something.')
let rock = new Item('rock', 'eat it or throw it.')
let bedroom = new Room('bedroom', 'It is a bedroom')
var key = new Item('rusty key', 'It is a large, heavy brass key.')
let note = new Item('note', 'the note says, ....................................nothing go away.')
let oofRoom = new Room('oof Room', 'is an oof Room.')
let glasses = new Item('glasses', 'you can use them to see better or eat them.')
let manzana = new Item('manzana', 'you found a manzana, an apple EAT IT NOW!')
let randomRoom = new Room('Random Room')
let aguacate = new Item('aguacate', 'AGUACATEEEEEEEEEEEEEEEEEEEEEEEEE.')
let pikachu = new Item('pikachu', 'PIKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHUUUUUUUUUUUUUUU.')

// Put them in their spots
hallway.addItem(vase);
hallway.addItem(pencil);
hallway.addItem(room);
room.addItem(fishingRod);
room.addItem(rock);
hallway.addItem(bedroom);
bedroom.addItem(key);
bedroom.addItem(note);
hallway.addItem(oofRoom);
oofRoom.addItem(glasses);
oofRoom.addItem(manzana);
hallway.addItem(randomRoom);
randomRoom.addItem(aguacate);
randomRoom.addItem(pikachu);


room.addItem(hallway);


player.move(hallway)



// Create the function
let jumpaction = /jump/;
let jump = function(action, player, object) {
  if (action == 'jump') {
    addLine('You jump. As you land, you hear a loud creak from the floor.');
  }
  return player
}

//To create a function that interacts with an object...
let eatAction = /eat/;
let eat = function(action, player, object) {
  if (action == 'eat') {
    object.eat();
  }
  return player;
}

let kickaction = /kick/;
let kick = function(action, player, object) {
  if (action == 'kick') {
    object.kick();
  }
  return player
}

let shootaction = /shoot/;
let shoot = function(action, player, object) {
  if (action == 'shoot') {
    object.shoot();
  }
  return player
}

let punchaction = /punch/;
let punch = function(action, player, object) {
  if (action == 'punch') {
    object.punch();
  }
  return player
}

//... then add a method to an object. This only works for the one object.
vase.eat = function() {
  addLine("You ate the " + this.name + " the fragments stabbed your mouth and you are beleeding out.")
}

// You can also extend the class, adding an eat() method to all items in your game.
Item.prototype.eat = function() {
  addLine("You ate the " + this.name);
}

Item.prototype.kick = function() {
  addLine("You kicked the " + this.name + ", it was useless");
}

Item.prototype.shoot = function() {
  addLine("You shot the " + this.name + ", you probably broke it.");
}

Item.prototype.punch = function() {
  addLine("You punched the " + this.name + ", your hand hurts.");
}

//Add the function to the action list
addAction(jumpaction, jump);
addAction(eatAction, eat);
addAction(kickaction, kick);
addAction(shootaction, shoot);
addAction(punchaction, punch);
