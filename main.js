


alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let room = new Room("dark room", "It is dark");
let bedroom = new Room('bedroom', 'It is a bedroom')
var key = new Item('rusty key', 'It is a large, heavy brass key.')

// Create the function
let jump = function (action, player, object) {
  addLine('You jump. As you land, you hear a loud creak from the floor.')
  return player
}


//Decide what the player should type to run the function
let jumpaction = /jump/;
//Add the function to the action list
addAction(jumpaction, jump);

// Put them in their spots
hallway.addItem(vase);
hallway.addItem(room);
room.addItem(bedroom);
room.addItem(hallway);


player.move(hallway)
