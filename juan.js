alert("Loading main.js!"); //Don't change this line
player = new Player()

console.log("Loading game");
//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let door = new Item("door", "made of old wood, chipped on top. has dryed up red satains.")
let room = new Room("dark room", "It is dark");
let lights = new Item ('lights', 'It is slowly getting brighter.')
let key = new Item('key', 'long key around 5 inches. has a diamond shape at the end.')
let bedroom = new Room("bedroom", "has red stains on the bed, and has a dusty carpet" )
let carpet = new item("carpet", "has two holes and is very colorful, you lift up the carpet and find a key and a trap door.")
let trapdoor = new item("trapdoor","you open the trapdoor with the key and has a ladder and you end up in a secret room.")
let secret room = new room("secret room", "the secret room has a gun with losts of ammo, also has a lot of water and can food.")
let gun = new item("gun","the gun is heavy with no bullets in it." )


//1.) Create the function & the search term
let jumpaction = /jump/;
let jump = function(action, player, object) {
  if (action == 'jump') {
    let text = "";
    addLine("You fall through the floor!");
    player.move(dungeon)
    player.cameFrom = null;
  }
  return player
}
addAction(jumpaction, jump);


//To create a function that interacts with an object...
let eatAction = /eat/;
let eat = function(action, player, object) {
  if (action == 'eat') {
    object.eat();
  }
  return player;
}
addAction(eatAction, eat);

//... then add a method to an object. This only works for the one object.
// vase.eat = function() {
//   addLine("You ate the " + this.name)
// }

// You can also extend the class, adding an eat() method to all items in your game.
Item.prototype.eat = function() {
  addLine("You ate the " + this.name);
}

//Add the function to the action list



// Put them in their spots
hallway.addItem(vase);
hallway.addItem(room);
hallway.addItem(key);
room.addItem(bedroom);
room.addItem(hallway);


player.move(hallway)
